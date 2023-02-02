import type { Request, Response } from "express";
import fs from "fs";
import ini from "ini";

import config from "~/config";

const GetTestusersAction = (_req: Request, res: Response) => {
    if (config.testusers_file) {
        try {
            if (fs.existsSync(config.testusers_file)) {
                const data = ini.parse(
                    fs.readFileSync(config.testusers_file, "utf8")
                );
                res.json(data);
            }
        } catch (e) {
            res.json(null);
        }
    } else {
        res.json(null);
    }
};

export default GetTestusersAction;
