const { con } = require("./mysql_controll.js")
const modelo = require('../model/funcionario_model.js')

const all = (req,res) => {
    let string = 'select * from funcionarios'
    con.query(string, (err, result)=>{
        res.json(result)
    })
}

const get_matricula = (req,res) => {
    let string = 'select * from funcionarios where matricula = '+ req.params.matricula
    con.query(string, (err, result)=>{
        res.json(result)
    })
}

const add_funcionario = (req,res) => {
    let body = req.body
    let string = 'insert into funcionarios(matricula, nome_completo, data_desligamento, ultimo_salario) values (\'' + body.matricula + '\',' + body.nome_completo + ',' + body.data_desligamento + ',\'' + body.ultimo_salario + '\')' 
    con.query(string, (err, result)=>{
        if(err != null){
            res.status(400).end()
        }else{
            res.status(200).end()
        }
    })
}

const delete_funcionario = (req,res) => {
    let string = 'delete from funcionarios where matricula = ' + req.params.matricula
    con.query(string, (err, result)=>{
        if(result.affectedRows == 0){
            req.send(400).end()
        }else{
            res.send(200).end()
        }
    })
}

const update_funcionario = (req,res) => {
    let matricula = req.body.matricula
    let nome_completo = req.body.nome_completo;
    let data_desligamento = req.body.data_desligamento;
    let ultimo_salario = '\'' +req.body.ultimo_salario+'\'';
    let string = `update funcionarios set nome_completo = ${nome_completo}, data_desligamento = ${data_desligamento}, ultimo_salario = ${ultimo_salario} where matricula = ${matricula}`
    con.query(string, (err, result)=>{
        if(result.affectedRows == 1){
            con.query('select * from alunos where matricula ='+matricula, (err, result)=>{
                res.json(result)
            })
        }else{
            res.send(400).end()
        }
    })
}

module.exports = {
    all,
    get_matricula,
    add_funcionario,
    delete_funcionario,
    update_funcionario
}