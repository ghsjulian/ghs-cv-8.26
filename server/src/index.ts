import dotenv from "dotenv"
import cors from "cors"
import path from "node:path";
import { fileURLToPath } from "node:url";
import express, { NextFunction, Request, Response } from 'express';
import connectDB from "./config/db.config.js";
import router from "./routes/visitor.routes.js";

dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;


const corsOptions: cors.CorsOptions = {
    origin: (oriorigin: string | undefined, callback) => {
        if (!origin || process.env.CORS_ORIGIN as string) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use("/static", express.static(path.join(__dirname, "../public")));


app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ status: "OK", uptime: process.uptime() });
});
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../public/visitors.json"))
});

// Defined API Endponts
app.use("/api/v1", router)

// 404 Handler
app.use((req: Request, res: Response) => {
    res.status(404).json({ success: false, message: "Route not found" });
});

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("Unhandled Error:", err.stack);
    res.status(500).json({
        success: false,
        message: process.env.NODE_ENV === "production" ? "Internal Server Error" : err.message,
    });
});


connectDB().then(() => {
    const server = app.listen(PORT, () => {
        console.log(`[${process.env.NODE_ENV as string || "development"}] Server running on http://localhost:${PORT}`);
    });

    process.on("SIGTERM", () => {
        console.log("SIGTERM received. Shutting down gracefully...");
        server.close(() => {
            console.log("Process terminated.");
        });
    });
});