contarTempo()
inciador()
botaoFunciona()
verSeTacerto()
limpar()
var tempoInic = $("#tempo").text();




function inciador(){
    var frase = $(".frase").text();
    var tamanho = frase.split(" ").length;
    $("#tamanho_frase").text(tamanho + " Palavras");

    $("#campo-digitacao").on("input", function(){
        var campo = $("#campo-digitacao").val()
    
        var numPalavras = campo.split(/\S+/).length - 1;
        var numLetras = campo.length;
        
        $("#cont-carcater").text(numLetras)
        $("#cont-palavras").text(numPalavras)
    
    })
}

function contarTempo() {  
    $("#campo-digitacao").one("focus", function(){
        var tempoSobrando = $("#tempo").text();
        var cronometroID = setInterval(function(){
            tempoSobrando--;
            $("#tempo").text(tempoSobrando)
    
            if(tempoSobrando == 0){            
                $("#campo-digitacao").attr("disabled", true)
                recorde()
                limpar()
                clearInterval(cronometroID)
                $("#campo-digitacao").addClass("desativar")

            }
        },1000)
    })
    
}


function verSeTacerto() {
    $("#campo-digitacao").on("input", function(){
    var campo = $("#campo-digitacao").val()
    var frase = $(".frase").text()
    var comparavel = frase.substr(0, campo.length)

    if(campo == comparavel){
        $("#campo-digitacao").addClass("campo-correto")
        $("#campo-digitacao").removeClass("campo-errado")

    }else{
        $("#campo-digitacao").addClass("campo-errado")
        $("#campo-digitacao").removeClass("campo-correto")

    }


})}



function botaoFunciona(){
    $("#btnResetar").click(function(){
        $("#campo-digitacao").attr("disabled", false)
        $("#campo-digitacao").val("")

        $("#cont-carcater").text("0")
        $("#cont-palavras").text("0")
        $("#tempo").text(tempoInic)
        $("#campo-digitacao").removeClass("campo-correto")
        $("#campo-digitacao").removeClass("campo-errado")
        $("#campo-digitacao").removeClass("desativar")


        contarTempo()
    })
}

function recorde() {
    var numPalavras = $("#cont-palavras").text();
    var usuario = "user";
  
    $("tbody").prepend('<tr>  <td>' + usuario +'</td>   <td>' + numPalavras + '</td> <td> <i class="material-icons lixeira">delete</i> </td> </tr>');
  }
  
  function limpar() {
    $("tbody").on("click", ".lixeira", function() {
      $(this).closest("tr").remove();
    });
  }
  