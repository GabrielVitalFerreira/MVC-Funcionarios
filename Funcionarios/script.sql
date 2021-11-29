drop database if exists Empresa;
create database Empresa;
use Empresa;

create table Funcionarios(
    matricula integer (6) primary key,
    nome_completo varchar(255) not null,
    data_desligamento Date not null,
    ultimo_salario decimal (9,2) not null
);

insert into Funcionarios(matricula, nome_completo, data_desligamento, ultimo_salario) values ('201901', 'Alfredo Santos', '13/01/2020', 2525.00), ('201902', 'Amanda Alves', '28/05/2020', 3507.00);