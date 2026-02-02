import { Router } from "express";
import ComplaintController from "../controllers/complaint.controller";
import { Routes } from "../utils/route.Interface";

class ComplaintRoutes implements Routes {
  public path = "/complaints";
  public router = Router();
  public controller = new ComplaintController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(this.path, this.controller.createComplaint);
    this.router.get(this.path, this.controller.getAllComplaints);
    this.router.get(`${this.path}/:id`, this.controller.getComplaintById);
    this.router.put(`${this.path}/:id`, this.controller.updateComplaint);
    this.router.delete(`${this.path}/:id`, this.controller.deleteComplaint);
  }
}

export default ComplaintRoutes;
