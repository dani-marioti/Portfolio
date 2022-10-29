import { RequestHandler } from "express";
import db from "../db";

export const login: RequestHandler = async (req, res) => {
  try {
    const found = await db.user.findFirst({
      where: req.body
    })

    if(found) {
      return res.sendStatus(200)
    }

    res.sendStatus(404);
  } catch (error) {
    console.error(error)
    res.sendStatus(400);
  }
};