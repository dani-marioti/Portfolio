import { Request, Response } from "express";

// requisições
const ideiasDoBanco = ["aa", "bb", 'cc'];

export const getIdea = (req: Request, res: Response) => {
    // Pegar informações do banco e retornar
    res.status(200).send({
        status: "OK",
        ideias: ideiasDoBanco
    });
};

export const postIdea = (req: Request, res: Response) => {
    const ideia = req.body && req.body.ideia ? req.body.ideia : null;
    ideiasDoBanco.push(ideia)
    res.status(201).send('Requisição recebida com sucesso!');
};

export const putIdea = (req: Request, res: Response) => {
    const id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

export const deleteIdea = (req: Request, res: Response) => {
    const id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};