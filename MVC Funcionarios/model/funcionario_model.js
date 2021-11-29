const funcionario_model = (matricula, nome_completo, data_desligamento, ultimo_salario) => {
    
    let json =   {
        "matricula": matricula,
        "nome_completo": nome_completo,
        "data_desligamento": data_desligamento,
        "ultimo_salario": ultimo_salario,
    }
    return json
}