import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export let index = async (req: Request, res: Response) => {
    await delay(10 * 1000);

    res.json({
        title: "Home"
    });
};

function delay(ms: number) {
    return new Promise<void>(function (resolve) {
        setTimeout(resolve, ms);
    });
}