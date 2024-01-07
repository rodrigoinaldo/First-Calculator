const operadores = document.querySelectorAll("[operador]");
const numeros = document.querySelectorAll("[number]");
const igual = document.querySelector("[igual]");
const visualizacao = document.querySelector("[visualizacao]");
const deletar = document.querySelector("[delete]")

class Calculadora {
    constructor(visualizacao) {
        this.visualizacao = visualizacao;
    }

    aparecer(valor) {
        this.visualizacao.textContent += valor
    }   

    calcular() {
        try {       //eval vai pegar oque esta escrito e transformar em calculo
            const resultado = eval(this.visualizacao.textContent);
            this.visualizacao.textContent = resultado;
        } catch (error) {
            this.visualizacao.textContent = 'Erro';
        }
    }

    apagar(){
        this.visualizacao.textContent = ""
    }
}

const calculadora = new Calculadora(visualizacao);

// smepre que for usar com estou usando o query SelectorAll
numeros.forEach(number => {
    number.addEventListener("click", () => {
        calculadora.aparecer(number.innerText);
    });
});

operadores.forEach(operadore => {
    operadore.addEventListener("click", () => {
        calculadora.aparecer(operadore.innerText);
    });
});

igual.addEventListener("click", () => {
    calculadora.calcular();
});

deletar.addEventListener("click", () =>{
    calculadora.apagar()
})