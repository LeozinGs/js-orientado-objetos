import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;

    agencia;

    //Atributos privados...sem o uso da #.
    _cliente;
    _saldo = 0;


    //Acessores de atributos privados.
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //Construtor
    constructor(cliente, agencia) {
        this.agencia = agencia;
        this.cliente = cliente;

        //Quando formos chamar um atributo estático, chamamos ele assim \/.
        ContaCorrente.numeroDeContas += 1;
    }

    //Métodos de saque, transferência e depósito.
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}