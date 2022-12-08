import type { Request, Response } from "express";
import { Router } from "express";

const rootRouter = Router();
const apiRouter = Router();

apiRouter.all("*", (req: Request, res: Response) => {
    return res.send({
        ...req.headers,
        originalUrl: req.originalUrl,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: req.body
    });
});

rootRouter.use("/", apiRouter);

export default rootRouter;
