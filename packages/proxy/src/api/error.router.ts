import type { Request, Response } from "express";

import { Router } from "express";

const router = Router();

router.use("*", (_req: Request, res: Response) => {
    res.json("The route is not specified");
});

export default router;
