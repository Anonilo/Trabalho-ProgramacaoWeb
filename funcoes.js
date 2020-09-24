$(function(){
    //Código das funções Adicionar, Salvar, Editar e Excluir
    $(".btnExcluir").bind("click", Excluir);
    $("#btnAdicionar").bind("click", Adicionar);       
 
});

function Adicionar() {
    $("#tblCarrinho tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><button class='btnExcluir'>Excluir</button> <button class='btnSalvar'>Salvar</button></td>"+
        "</tr>");
     
    $(".btnExcluir").bind("click", Excluir);    
    $(".btnSalvar").bind("click", Salvar);
};

function Excluir(){
    var par = $(this).parent().parent(); //tr
    par.remove();
};

function Salvar(){
    var par = $(this).parent().parent(); //tr
    var tdProduto = par.children("td:nth-child(1)");
    var tdQuantidade = par.children("td:nth-child(2)");
    var tdPreco = par.children("td:nth-child(3)");
    var tdBotoes = par.children("td:nth-child(4)");
 
    tdProduto.html(tdProduto.children("input[type=text]").val());
    tdQuantidade.html(tdQuantidade.children("input[type=text]").val());
    tdPreco.html(tdPreco.children("input[type=text]").val());
    tdBotoes.html("<button class='btnEditar'>Editar</button> <button class='btnExcluir'>Excluir</button");

    $(".btnExcluir").bind("click", Excluir);
    $(".btnEditar").bind("click", Editar);
};

function Editar(){
    var par = $(this).parent().parent(); //tr
    var tdProduto = par.children("td:nth-child(1)");
    var tdQuantidade = par.children("td:nth-child(2)");
    var tdPreco = par.children("td:nth-child(3)");
    var tdBotoes = par.children("td:nth-child(4)");
    
    tdProduto.html("<input type='text' id='txtNome' value='"+tdProduto.html()+"'/>");
    tdQuantidade.html("<input type='text' id='txtTelefone' value='"+tdQuantidade.html()+"'/>");
    tdPreco.html("<input type='text' id='txtEmail' value='"+tdBotoes.html()+"'/>");
    tdBotoes.html("<button class='btnSalvar'>Salvar</button>");
    
    $(".btnExcluir").bind("click", Excluir);
    $(".btnSalvar").bind("click", Salvar);
    $(".btnEditar").bind("click", Editar);
   };
   

