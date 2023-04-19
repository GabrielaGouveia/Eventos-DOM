function calculadora(){
    const operacao = Number(prompt('escolha uma operação:\n 1-soma(+)\n 2- subtração(-)\n 3- multiplicação(*)\n 4-Divisão real(/)\n 5- Divisão Inteira(%)\n 6- potenciação(**)\n'));

    let n1 = Number(prompt('Insira o primeiro valor'));
    let n2 = Number(prompt('Insira o segundo valor'));
    let resultado;

    function soma(){
        resultado = n1  +n2;
        alert('${n1} + ${n2} = ${resultado}')
    }
    function subtracao(){
        resultado = n1 - n2;
        alert('${n1} - ${n2} = ${resultado}')
    }
    function multiplicacao(){
        resultado = n1 *n2;
        alert('${n1} * ${n2} = ${resultado}')
    }
    function divisaoReal(){
        resultado = n1 /n2;
        alert('${n1} / ${n2} = ${resultado}')
    }
    function divisaoInteira(){
        resultado = n1  %n2;
        alert('O resto da divisao inteira entre ${n1} e ${n2} é igual a ${resultado}')
        novaOperacao();
    }
    function potenciacao(){
        resultado = n1  **n2;
        alert('${n1} elevado ${n2} é igual a ${resultado}')
        novaOperacao();
    }
    function novaOperacao(){
        let opcao = prompt('Deseja fazer outra operação?\n 1- sim\n 2- não\n');
        

    }
    if (opcao ==1){
        calculadora();
    
    } else id (opcao ==2);{
        alert('até mais!')
    } else {
        alert('Digite uma opção válida')
        novaOperacao();
    }

    if (operacao == 1){
        soma();
    } else if(operacao == 2){
        subtracao();
    } else if (operacao == 3){
        multiplicacao();
    }else if (operacao == 4){
        divisaoReal();
    }else if (operacao == 5);{
        divisaoInteira();
    }elseif (operacao== 6);{
        potenciacao();
    }

        


















}
    

calculadora();
