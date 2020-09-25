$(function(){
    //Código das funções Adicionar, Salvar, Editar e Excluir
    $(".btnExcluir").bind("click", Excluir);
    $("#btnAdicionar").bind("click", Adicionar);       
 
});

function Adicionar() {
    $("#tblCarrinho tbody").append(
        "<tr>"+
        "<td>"+ $("#name_product").val() +"</td>"+
        "<td>"+ $("#quantity_product").val()+"</td>"+
        "<td>"+ $("#price_product").val() +"</td>"+
        "<td><button class='btnExcluir'>Excluir</button> <button class='btnEditar'>Editar</button></td>"+
        "</tr>");
     
        formClear();

    $(".btnExcluir").bind("click", Excluir);    
    $(".btnEditar").bind("click", Editar);
};

function cartUpdate() {
    if ($("#name_product").val() != null && $("#name_product").val() != ''
    && $("#quantity_product").val() != null && $("#quantity_product").val() != ''
    && $("#price_product").val() != null && $("#price_product").val() != '') {
        // Adicona o produto no carrinho
        Adicionar();
    }
}

function formClear() {
    $("#name_product").val("");
    $("#quantity_product").val("");
    $("#price_product").val("");
}

function Excluir(){
    var par = $(this).parent().parent(); //tr
    par.remove();
};


function Recarregar(){
    document.location.reload(true);
}
/*
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
   */
