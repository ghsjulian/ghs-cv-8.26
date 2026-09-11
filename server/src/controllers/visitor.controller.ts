import { Request, Response } from 'express';
import fs from 'fs/promises';
import path from "node:path";
import Visitor from '../models/visitors.model';


const createVisitor = async (req: Request, res: Response): Promise<Response> => {
    try {
        const data = req.body;

        const newVisitor = new Visitor(data);
        const result = await newVisitor.save();

        const [total, newestVisitors] = await Promise.all([
            Visitor.countDocuments(),
            Visitor.find()
                .sort({ createdAt: -1 })
                .limit(10)
                .lean()
        ]);

        const filePath = path.join(__dirname, '../../public/visitors.json');
        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, JSON.stringify({
            lastUpdated: new Date().toISOString(),
            totalVisitors: total,
            visitors: newestVisitors
        }, null, 2), 'utf-8');

        return res.status(201).json({
            success: true,
            message: "User tracked successfully",
            data: {
                current: result,
                total,
                newestVisitors
            }
        });
    } catch (error: any) {
        console.error('Error tracking visitor:', error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

export default createVisitor;