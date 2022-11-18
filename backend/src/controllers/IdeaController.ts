import { RequestHandler } from "express";
import db from "../db";

export const findOne: RequestHandler = async (req, res) => {
  const id = Number(req.params.id)

  try {
    const found = await db.idea.findUnique({ where: { id } })

    if(found) {
      return res.status(200).send({
        ...found
      })
    }

    res.sendStatus(404);
  } catch (error) {
    console.error(error)
    res.sendStatus(400);
  }
};

export const findAll: RequestHandler = async (req, res) => {
    res.status(200).send({
      ideas: await db.idea.findMany()
    })
};

export const createIdea: RequestHandler = async (req, res) => {
  console.log(req.body)
    try {
      if(req.body) req.body.status = 'pending'; // no banco teria os tipos: pending, rejected, approved
      const idea = await db.idea.create({ data: req.body })

      res.status(201).send({
        ...idea
      });
    } catch (error) {
      console.error(error)
      res.sendStatus(400);
    }
};

export const updateIdea: RequestHandler = async (req, res) => {
    const id = Number(req.params.id);
    try {
      const idea = await db.idea.update({ data: req.body, where: { id } })

      res.status(200).send({
        ...idea
      });
    } catch (error) {
      console.error(error)
      res.sendStatus(400)
    }
};

export const deleteIdea: RequestHandler = async (req, res) => {
    const id = Number(req.params.id);
    if(!id) {
      return res.sendStatus(400);
    }

    try {      
      const deleted = await db.idea.delete({ where: { id } })

      if(deleted) {
        return res.sendStatus(200)
      }
    } catch (error) {
      console.error(error)
      res.sendStatus(500);
    }
};