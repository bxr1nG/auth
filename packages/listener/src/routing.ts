import type { Request, Response } from "express";
import { Router } from "express";

const rootRouter = Router();
const apiRouter = Router();

apiRouter.all("*", (req: Request, res: Response) => {
    return res.send({
        ...req.headers,
        originalUrl: req.originalUrl,
        body: req.body as unknown
    });
});

rootRouter.use("/", apiRouter);

export default rootRouter;
