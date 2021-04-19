// Criar um componente
const BotaoConcluir = () => {
    const btnConcluir = document.createElement('button');
    btnConcluir.classList.add('check-button');
    btnConcluir.innerText = 'Concluir';
    btnConcluir.addEventListener('click', concluirTarefa );

    return btnConcluir;
}

const concluirTarefa = (evento) => {
    evento.preventDefault();
    const btnConcluir = evento.target;

    const tarefaconcluir = btnConcluir.parentElement;

    tarefaconcluir.classList.toggle('done');

};

export default BotaoConcluir;
//Caso queira exportar mais de um
/*
export {
    BotaoConcluir,
    concluirTarefa
}
*/