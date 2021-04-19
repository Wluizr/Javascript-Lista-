/// COmponente começa com maiusculo. (mas não quis utilizar aqui)
const BotaoExcluir = () =>{
    const btnExcluir = document.createElement('button');

    btnExcluir.innerText = 'Deletar';
    btnExcluir.classList.add('delete-button');    
    btnExcluir.addEventListener('click', excluirTarefa );

    return btnExcluir;
}

const excluirTarefa = (evento) =>{
   evento.preventDefault();
   const btnExcluir = evento.target;

   const tarefaExcluir = btnExcluir.parentElement;
   
    tarefaExcluir.remove();

   console.log(tarefaExcluir);
   //tarefaExcluir.

};

export default BotaoExcluir;