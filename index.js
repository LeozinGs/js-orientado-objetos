//Importando classes.
import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

//Criando Clientes.
const cliente1 = new Cliente(
    "Ricardo",
    11122233309
);

const cliente2 = new Cliente(
    "Alice",
    99988877765
);

//Criando Conta Corrente.
const conta1 = new ContaCorrente(
    cliente1,
    1001
);

const conta2 = new ContaCorrente(
    cliente2,
    102
);

//Métodos de depósito e transferencia.
conta1.depositar(500);
conta1.transferir(100, conta2);

//Exibindo no console.
console.log(cliente2.cpf);
console.table(conta1);
console.table(conta2);

console.log(ContaCorrente.numeroDeContas);