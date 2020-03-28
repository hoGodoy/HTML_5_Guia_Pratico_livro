'use strict'

function atualizarNomeArquivo(caminho)  {
    document.getElementById("imagem").src = caminho;
}

function validar(){
    var n = document.pnome.formulario.pnome.value;
        if(n==""){
        alert('O campo nome está vazio');
        document.formulario.pnome.focus();
    }
}
function mostraalerta(){
    alert('Botão foi clicado');
}