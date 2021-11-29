const express = require('express')
const router = express.Router()

const funcionario_controll = require('../controll/funcionario_controll.js')
router.get('/empresa/funcionario', funcionario_controll.all)
router.get('/empresa/funcionario/:matricula', funcionario_controll.get_matricula)
router.post('/empresa/create',funcionario_controll.add_funcionario)
router.delete('/empresa/delete/:matricula', funcionario_controll.delete_funcionario)
router.put('/empresa/update', funcionario_controll.update_funcionario)
module.exports = router