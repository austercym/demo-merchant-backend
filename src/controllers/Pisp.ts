import { Request, Response } from "express";
import { GetPisps } from "../services/PispService";


export let get = async (req: Request, res: Response) => {
    let pisps = await GetPisps();
    res.json(pisps);
};