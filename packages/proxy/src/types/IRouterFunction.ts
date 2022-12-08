import type { Router } from "express";

import IStore from "./IStore";

type IRouterFunction = (store: IStore) => Router;

export default IRouterFunction;
