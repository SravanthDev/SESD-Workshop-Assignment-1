import { Request, Response } from "express";
import ComplaintModel from "../models/complaint.model";

class ComplaintController {
  public createComplaint = async (req: Request, res: Response) => {
    const complaint = await ComplaintModel.create(req.body);
    res.status(201).json(complaint);
  };

  public getAllComplaints = async (_req: Request, res: Response) => {
    const complaints = await ComplaintModel.find();
    res.json(complaints);
  };

  public getComplaintById = async (req: Request, res: Response) => {
    const complaint = await ComplaintModel.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    res.json(complaint);
  };

  public updateComplaint = async (req: Request, res: Response) => {
    const complaint = await ComplaintModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    res.json(complaint);
  };

  public deleteComplaint = async (req: Request, res: Response) => {
    const complaint = await ComplaintModel.findByIdAndDelete(req.params.id);

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    res.status(204).send();
  };
}

export default ComplaintController;
