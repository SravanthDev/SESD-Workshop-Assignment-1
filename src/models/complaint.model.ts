import { model, Schema } from "mongoose";
import {
  ComplaintDocument,
  ComplaintModelInterface
} from "../utils/complaint.interface";

const complaintSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    category: {
      type: String
    },
    status: {
      type: String,
      default: "open"
    }
  },
  {
    timestamps: true
  }
);

const ComplaintModel = model<ComplaintDocument, ComplaintModelInterface>(
  "Complaint",
  complaintSchema
);

export default ComplaintModel;
