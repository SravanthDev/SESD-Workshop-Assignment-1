import { Request, Response } from "express";
import ComplaintModel from "../models/complaint.model";

class ComplaintController {
  public createComplaint = async (req: Request, res: Response) => {
    const complaint = await ComplaintModel.create(req.body);
    res.status(201).json(complaint);
  };

  // FILTER + PAGINATION + SORTING
  public getAllComplaints = async (req: Request, res: Response) => {
    const { category, page = "1", limit = "10", sort = "desc" } = req.query;

    const filter: any = {};
    if (category) {
      filter.category = category;
    }

    const pageNumber = parseInt(page as string, 10);
    const limitNumber = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * limitNumber;

    const sortOrder = sort === "asc" ? 1 : -1;

    const complaints = await ComplaintModel.find(filter)
      .sort({ createdAt: sortOrder })
      .skip(skip)
      .limit(limitNumber);

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
