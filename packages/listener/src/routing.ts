import type { Request, Response } from "express";
import { Router } from "express";

const rootRouter = Router();
const apiRouter = Router();

apiRouter.all("*", (req: Request, res: Response) => {
    return res.send(req.headers);
});

rootRouter.use("/", apiRouter);

export default rootRouter;
