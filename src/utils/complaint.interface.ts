import { Document, Model } from "mongoose";

export interface ComplaintInterface {
  title: string;
  description?: string;
  category?: string;
  status: string;
}

export interface ComplaintDocument extends Document, ComplaintInterface {}

export type ComplaintModelInterface = Model<ComplaintDocument>;
