import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IInfrastructureContent extends Document {
  section: string;
  title: string;
  description: string;
  images: string[];
  videoUrl?: string;
  order: number;
  isVisible: boolean;
  updatedAt: Date;
}

const InfrastructureContentSchema = new Schema<IInfrastructureContent>(
  {
    section: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String }],
    videoUrl: { type: String },
    order: { type: Number, default: 0 },
    isVisible: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const InfrastructureContent: Model<IInfrastructureContent> =
  mongoose.models.InfrastructureContent ||
  mongoose.model<IInfrastructureContent>(
    'InfrastructureContent',
    InfrastructureContentSchema
  );

export default InfrastructureContent;
