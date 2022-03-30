import { Router } from "express";
import { CreateUrlController } from "./createUrlController";
import { CreateUrlService } from "./createUrlService";
import { CreateUrlRepositoy } from "./createUrlRepository";

const createUrlRepositoy = new CreateUrlRepositoy();
const createUrlService = new CreateUrlService(createUrlRepositoy);
const createUrlController = new CreateUrlController(createUrlService);

const UrlRouter = Router();

// UrlRouter.post("/createUrl", (req, res) =>
//   createUrlController.create(req, res)
// );

UrlRouter.post("/createShortUrl", (req, res) =>
  createUrlController.createShortUrl(req, res)
);

export { UrlRouter };
