// requisições
var ideiasDoBanco = ["aa", "bb", 'cc'];

exports.get = (req, res) => {
    // Pegar informações do banco e retornar
    res.status(200).send({
        status: "OK",
        ideias: ideiasDoBanco
    });
};
exports.post = (req, res) => {
    let ideia = req.body && req.body.ideia ? req.body.ideia : null;
    ideiasDoBanco.push(ideia)
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.put = (req, res) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};