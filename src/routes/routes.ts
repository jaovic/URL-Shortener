import { Router } from "express";
import { UrlRouter } from "../modules/url/createUrl/index";

const router = Router();

router.use("/", UrlRouter);

export default router;
