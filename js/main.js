// CRIANDO UM IIFE EM JS
 import BotaoConcluir from './componentes/concluirTarefa.js'
 import BotaoExcluir from './componentes/deletaTarefa.js'

const criarTarefa = (evento) =>{
    evento.preventDefault();

    const input = document.querySelector('[data-form-input]');
    const list = document.querySelector('[data-list]');
    const valorCampo = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');

    const conteudo = `<p class='content'>${valorCampo}</p>`;
        

    tarefa.innerHTML = conteudo;

    tarefa.appendChild( BotaoConcluir() );
    tarefa.appendChild( BotaoExcluir() );
    list.appendChild(tarefa);
    input.value = '';

}

const button = document.querySelector('[data-form-button]');

button.addEventListener('click', criarTarefa);




// link:
 // https://www.google.com/search?q=javascript+criando+componente&client=firefox-b-d&biw=1366&bih=626&tbm=vid&ei=0pRfYKXGKpu95OUPsd2AyAk&oq=javascript+criando+componente&gs_l=psy-ab.3..33i160k1.14189.18940.0.19196.29.19.0.6.6.0.236.2320.0j13j2.15.0....0...1c.1.64.psy-ab..9.20.2237...0j0i67k1j0i433i131k1j0i433k1j0i433i67k1j0i22i30k1j33i22i29i30k1.0.gDBIPimyVms
 // http://devfuria.com.br/javascript/dom-create-element/
 // https://www.devmedia.com.br/javascript-for-for-in-for-of/41018
 // https://stackoverflow.com/questions/726816/how-to-access-iframe-parent-page-using-jquery
 // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 


/*Os desafios nos torna mais fortes.
Será que vc não se questiona de sua capacidade pq nunca enfrentou um desafio?
Será que quando se vê diante de uma tarefa que Teoricamente foge ao seu controle, vc se questiona a capacidade?
Qual foi a ultima vez que vc esteve em uma situação desconfortavel.

Você tem se desafiado? vc tem colocado os seus conhecimento a prova? Testado eles ou até mesmo comprovado-os?
Quando é voce que se coloca em uma posição desconfortavel, ela é mais controla (vc tem o controle) sobre ela. E não ao Contrario.
Não fuja de situações dificeis ou de desafios.
Começe a encara-los e de o seu melhor, mesmo que isso leve mais tempo do que gostaria 

http://177.103.243.158:8088/qsystem/rest/appointment/customers;phoneMobile=5567997112252


{"firstName":"Carl", "lastName":"Carlson", "cardNumber":"1234", "properties":{"email":"someone@example.com","phoneNumber":"555-1234"}}


*/