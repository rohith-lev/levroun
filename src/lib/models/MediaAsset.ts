import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IMediaAsset extends Document {
  filename: string;
  originalName: string;
  url: string;
  mimeType: string;
  size: number;
  data?: Buffer;
  uploadedAt: Date;
}

const MediaAssetSchema = new Schema<IMediaAsset>(
  {
    filename: { type: String, required: true },
    originalName: { type: String, required: true },
    url: { type: String, required: true },
    mimeType: { type: String, required: true },
    size: { type: Number, required: true },
    data: { type: Buffer },
    uploadedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const MediaAsset: Model<IMediaAsset> =
  mongoose.models.MediaAsset ||
  mongoose.model<IMediaAsset>('MediaAsset', MediaAssetSchema);

export default MediaAsset;
