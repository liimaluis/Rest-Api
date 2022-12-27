const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: "Retorna Os Pedidos"
    })
})

router.post('/', (req, res, next) =>{
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        mensagem: "Pedido Foi Criado",
        pedidoCriado: pedido
    })
})

router.get('/:id_pedido', (req, res, next) =>{
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: "Pedido Especifico",
        id_pedido: id
    })
})


router.delete('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: "Deletando Um Pedido"
    })
})

module.exports = router