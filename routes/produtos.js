const express = require('express')
const router = express.Router()

const mysql = require('../mysql').pool;

router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: "Usando GET Produtos"
    })
})

router.post('/', (req, res, next) =>{
  
    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO produtos (nome, preco) VALUES (?,?)',
            [req.body.nome, req.body.preco],
            (error, resultado, field) => {
                conn.release();

                if (error) {
                   return res.status(500).send({
                        error: error,
                        response: null
                    });
                } 

                res.status(201).send({
                    mensagem: "Produto Criado",
                    Id_produto: resultado.insertId
                })
            }
        )
    })
});

router.get('/:id_produto', (req, res, next) =>{
    const id = req.params.id_produto
    res.status(200).send({
        mensagem: "Usando GET Produto Especifico"
    })
})

router.patch('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: "Usando PATCH Produtos"
    })
})

router.delete('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: "Usando DELETE Produtos"
    })
})

module.exports = router