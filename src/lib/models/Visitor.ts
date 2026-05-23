import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IVisitor extends Document {
  sessionId: string;
  page: string;
  deviceType: 'desktop' | 'tablet' | 'mobile' | 'unknown';
  referrer?: string;
  ip?: string;
  visitedAt: Date;
}

const VisitorSchema = new Schema<IVisitor>(
  {
    sessionId: { type: String, required: true },
    page: { type: String, required: true },
    deviceType: {
      type: String,
      enum: ['desktop', 'tablet', 'mobile', 'unknown'],
      default: 'unknown',
    },
    referrer: { type: String },
    ip: { type: String },
    visitedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Visitor: Model<IVisitor> =
  mongoose.models.Visitor || mongoose.model<IVisitor>('Visitor', VisitorSchema);

export default Visitor;
