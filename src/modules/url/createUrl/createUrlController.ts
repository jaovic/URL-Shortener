import { Request, Response } from "express";
import { CreateUrlService } from "./createUrlService";

class CreateUrlController {
  constructor(private createUrlService: CreateUrlService) {}
  async create(req: Request, res: Response): Promise<Response> {
    const { url } = req.body;
    const newUrl = await this.createUrlService.create(url);
    return res.status(200).json({ status: "success", user: newUrl });
  }
}
export { CreateUrlController };
