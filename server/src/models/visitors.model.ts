import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
    ip_address: string;
    location: string;
    isp_org: string;
    referrer: string;
    screen_resolution: string;
    device_info: string;
    time: string;
    developer: string;
}

const userSchema = new Schema<IUser>(
    {
        ip_address: { type: String },
        location: { type: String },
        isp_org: { type: String },
        referrer: { type: String },
        screen_resolution: { type: String },
        device_info: { type: String },
        time: { type: String },
        developer: { type: String },
    },
    {
        timestamps: true,
    },
);

const Visitor = model<IUser>("Visitor", userSchema);

export default Visitor;
