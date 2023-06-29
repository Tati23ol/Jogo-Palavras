contarTempo()
inciador()
botaoFunciona()
verSeTacerto()
limpar()
mostrarPlacar()
trocarFrase()
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
  
function mostrarPlacar(){
    $("#btnLimpar").click(function(){
        $("#placarDois").stop().toggle()
    })

    var placarPosicao = $("#placarDois").offset().top;
    $("body").animate({
        scrollTop: placarPosicao+"px"
    },1000)
}

function trocarFrase(){
    $("#btnTrocar").click(function(){
        var campo = $("#frases").text()
        var numeroAleatorio = Math.floor(Math.random() * 4);

        $("#frases").text(Frases[numeroAleatorio].texto);
        $("#tempo").text(Frases[numeroAleatorio].tempo);
        inciador()


    })
}

var Frases = [
  {
    "_id": 0,
    "texto": "O sol brilha no céu azul, iluminando o mundo com sua luz radiante.",
    "tempo": 15
  },
  {
    "_id": 1,
    "texto": "As flores coloridas enfeitam o jardim, trazendo beleza e perfume ao ambiente.",
    "tempo": 8
  },
  {
    "_id": 2,
    "texto": "O vento sopra suavemente, trazendo consigo o frescor da brisa e o som das folhas ao se moverem.",
    "tempo": 20
  },
  {
    "_id": 3,
    "texto": "O mar se estende até onde os olhos podem ver, suas ondas quebrando suavemente na praia.",
    "tempo": 15
  },
  {
    "_id": 4,
    "texto": "A vida é cheia de surpresas e desafios, mas é importante manter a esperança e seguir em frente.",
    "tempo": 15
  }
  
]
