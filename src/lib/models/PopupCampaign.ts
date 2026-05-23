import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPopupCampaign extends Document {
  title: string;
  type: 'internship' | 'admission' | 'webinar' | 'discount';
  content: string;
  ctaText: string;
  ctaUrl: string;
  imageUrl?: string;
  isActive: boolean;
  trigger: 'timed' | 'exit_intent' | 'immediate';
  timerDelay?: number;
  pages: 'homepage' | 'all';
  startDate?: Date;
  endDate?: Date;
  frequency: 'once' | 'always' | 'daily';
  createdAt: Date;
  updatedAt: Date;
}

const PopupCampaignSchema = new Schema<IPopupCampaign>(
  {
    title: { type: String, required: true },
    type: {
      type: String,
      enum: ['internship', 'admission', 'webinar', 'discount'],
      required: true,
    },
    content: { type: String, required: true },
    ctaText: { type: String, required: true },
    ctaUrl: { type: String, required: true },
    imageUrl: { type: String },
    isActive: { type: Boolean, default: false },
    trigger: {
      type: String,
      enum: ['timed', 'exit_intent', 'immediate'],
      default: 'timed',
    },
    timerDelay: { type: Number, default: 3000 },
    pages: { type: String, enum: ['homepage', 'all'], default: 'all' },
    startDate: { type: Date },
    endDate: { type: Date },
    frequency: { type: String, enum: ['once', 'always', 'daily'], default: 'once' },
  },
  { timestamps: true }
);

const PopupCampaign: Model<IPopupCampaign> =
  mongoose.models.PopupCampaign ||
  mongoose.model<IPopupCampaign>('PopupCampaign', PopupCampaignSchema);

export default PopupCampaign;
