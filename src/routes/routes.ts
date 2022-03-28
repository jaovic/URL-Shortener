import { Router } from "express";

import createUrl from "..//modules/url/createUrl/createUrlController";
const router = Router();

router.use("/", createUrl);

export default router;
