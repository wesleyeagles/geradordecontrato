$(document).ready(function(){
    $(".button12").click(function(){
        $("#printable").printThis({

        });

      });

    });

    function imprimir() {
  

        var element = document.getElementById('printable');
        element.classList.remove("printable");
        element.classList.add(".printable2")

    }

    function recall() {

        var recall = document.getElementById('printable');
        recall.classList.remove("printable2");
        recall.classList.add("printable")

    }









$(".button1").on('click',function(){
    $('#secondpart').toggle("slow"); // aparece o div
    $('#firstpart').hide();
    
  });

  $(".button2").on('click',function(){
    $('#thirdpart').toggle("slow"); // aparece o div
    $('#secondpart').hide();
    
  });

  $(".button3").on('click',function(){
    $('#fourthpart').toggle("slow"); // aparece o div
    $('#thirdpart').hide();
    
  });

  $(".button4").on('click',function(){
    $('#fifthpart').toggle("slow"); // aparece o div
    $('#fourthpart').hide();
    
  });

  $(".button5").on('click',function(){
    $('#sixthpart').toggle("slow"); // aparece o div
    $('#fifthpart').hide();
    
  });

  $(".button6").on('click',function(){
    $('#firstpart').toggle("slow"); // aparece o div
    $('#secondpart').hide();
    
  });

  $(".button7").on('click',function(){
    $('#secondpart').toggle("slow"); // aparece o div
    $('#thirdpart').hide();
    
  });

  $(".button8").on('click',function(){
    $('#thirdpart').toggle("slow"); // aparece o div
    $('#fourthpart').hide();
    
  });

  $(".button9").on('click',function(){
    $('#fourthpart').toggle("slow"); // aparece o div
    $('#fifthpart').hide();
    
  });

  $(".button10").on('click',function(){
    $('#fifthpart').toggle("slow"); // aparece o div
    $('#sixthpart').hide();
    
  });


$(document).ready(function(){
    $('#check-email').on('click',function() {
       $("#email-display").toggle(this.checked);
   });
});

$(document).ready(function(){
    $('#check-inbound').on('click',function() {
       $("#inbound-display").toggle(this.checked);
   });
});

$(document).ready(function(){
    $('#check-anuncios').on('click',function() {
       $("#anuncios-display").toggle(this.checked);
   });
});

$(document).ready(function(){
    $('#check-blog').on('click',function() {
       $("#blog-display").toggle(this.checked);
   });
});

$(document).ready(function(){
    $('#check-instagram').on('click',function() {
       $("#instagram-display").toggle(this.checked);
   });
});

$(document).ready(function(){
    $('#check-monitoramento').on('click',function() {
       $("#monitoramento-display").toggle(this.checked);
   });
});

$(document).ready(function(){
    $('#check-relatorio').on('click',function() {
       $("#relatorio-display").toggle(this.checked);
   });
});

$(document).ready(function(){
    $('#check-facebook').on('click',function() {
       $("#facebook-display").toggle(this.checked);
   });
});

$(document).ready(function(){
    $('#fornece-check').on('click',function() {
       $("#fornece-relatorios").toggle(this.checked);
   });
});

$(document).ready(function(){
    $('#sigilo-check').on('click',function() {
       $("#nao-divulgar").toggle(this.checked);
   });
});

$(document).ready(function(){
    $('#digital-check').on('click',function() {
       $("#div-digital").hide(this.checked);
   });
});

$(document).ready(function(){
    $('#digital-check').on('click',function() {
       $("#div-digital2").hide(this.checked);
   });
});

$(document).ready(function(){
    $('#digital-check2').on('click',function() {
       $("#div-digital").show(this.checked);
   });
});

$(document).ready(function(){
    $('#digital-check2').on('click',function() {
       $("#div-digital2").show(this.checked);
   });
});





// Começo Função de digitalização na etapa 1/5 (Informações do Cliente) //



function keypressed () {

    capturando = " CNPJ: " + document.getElementById('cpf').value;
    document.getElementById('clientcpf').innerHTML = capturando;

}

function keypressed2 () {

    capturando = document.getElementById('name').value + ",";
    document.getElementById('clientname').innerHTML = capturando;

}

function keypressed21 () {

    capturando = document.getElementById('name').value;
    document.getElementById('nameclient').innerHTML = capturando;

}

function keypressed3 () {

    capturando = ", com sede em " + document.getElementById('adress').value;
    document.getElementById('clientadress').innerHTML = capturando;

}

function keypressed4 () {

    capturando = ", " + document.getElementById('number').value;
    document.getElementById('clientnumber').innerHTML = capturando;

}

function keypressed5 () {

    capturando = ", " + document.getElementById('cep').value;
    document.getElementById('clientcep').innerHTML = capturando;

}

function keypressed6 () {

    capturando = ", " + document.getElementById('district').value;
    document.getElementById('clientdistrict').innerHTML = capturando;

}

function keypressed7 () {

    capturando = ", " + document.getElementById('city').value;
    document.getElementById('clientcity').innerHTML = capturando;

}

function keypressed8 () {

    capturando = " - " + document.getElementById('state').value;
    document.getElementById('clientstate').innerHTML = capturando;

}

// Fim Função de digitalização na etapa 1/5 (Informações do Cliente) //

// Começo Função de digitalização na etapa 2/5 (Minhas Informações) //

function keypressed9 () {

    capturando = " CNPJ: " + document.getElementById('my-cpf').value;
    document.getElementById('mycpf').innerHTML = capturando;

}

function keypressed10 () {

    capturando = document.getElementById('my-name').value + ",";
    document.getElementById('myname').innerHTML = capturando;

}

function keypressed22 () {

    capturando = document.getElementById('my-name').value;
    document.getElementById('namemy').innerHTML = capturando;

}

function keypressed11 () {

    capturando = ", com sede em " + document.getElementById('my-adress').value;
    document.getElementById('myadress').innerHTML = capturando;

}

function keypressed12 () {

    capturando = ", " + document.getElementById('my-number').value;
    document.getElementById('mynumber').innerHTML = capturando;

}

function keypressed13 () {

    capturando = ", " + document.getElementById('my-cep').value;
    document.getElementById('mycep').innerHTML = capturando;

}

function keypressed14 () {

    capturando = ", " + document.getElementById('my-district').value;
    document.getElementById('mydistrict').innerHTML = capturando;

}

function keypressed15 () {

    capturando = ", " + document.getElementById('my-city').value;
    document.getElementById('mycity').innerHTML = capturando;

}

function keypressed16 () {

    capturando = " - " + document.getElementById('my-state').value;
    document.getElementById('mystate').innerHTML = capturando;

}


// Fim Função de digitalização na etapa 2/5 (Minhas Informações) //

function keypressed17 () {

    capturando = document.getElementById('name').value;
    document.getElementById('clientname-contrato').innerHTML = capturando;

}

function keypressed18 () {

    capturando = "R$ " + document.getElementById('valuepress').value;
    document.getElementById('value').innerHTML = capturando;

}

function keypressed19 () {

    capturando = document.getElementById('city').value;
    document.getElementById('city2').innerHTML = capturando;

}

function keypressed20 () {

    capturando = document.getElementById('state').value;
    document.getElementById('state2').innerHTML = capturando;

}

function keypressed23 () {

    capturando = document.getElementById('city').value;
    document.getElementById('city3').innerHTML = capturando;

}

function keypressed24 () {

    capturando = document.getElementById('state').value;
    document.getElementById('state3').innerHTML = capturando;

}




function datainitial () {

    capturando = document.getElementById('initialdate').value;
    document.getElementById('dateinicio').innerHTML = capturando

}

function datainitial2 () {

    capturando = document.getElementById('initialdate').value;
    document.getElementById('dateinicio2').innerHTML = capturando

}

function datainitial3 () {

    capturando = document.getElementById('initialdate').value;
    document.getElementById('dateinicio3').innerHTML = capturando

}

function datevenc () {

    capturando = document.getElementById('datavenc').value;
    document.getElementById('datefim').innerHTML = capturando

}



let date = moment().format('LLL');
//parse date
document.getElementById("datahoje").innerHTML = date;

































function MascaraFloat(num) {
    var er = /[^0-9.,]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {///verifica se é string, caso seja então apaga
        var texto = $(campo).val();
        $(campo).val(texto.substring(0, texto.length - 1));
        return false;
    } else {
        return true;
    }
}
 //formata de forma generica os campos
function formataCampo(campo, Mascara) {
    var er = /[^0-9/ (),.-]/;
    er.lastIndex = 0;

    if (er.test(campo.value)) {///verifica se é string, caso seja então apaga
        var texto = $(campo).val();
        $(campo).val(texto.substring(0, texto.length - 1));
    }
    var boleanoMascara;
    var exp = /\-|\.|\/|\(|\)| /g
    var campoSoNumeros = campo.value.toString().replace(exp, "");
    var posicaoCampo = 0;
    var NovoValorCampo = "";
    var TamanhoMascara = campoSoNumeros.length;
    for (var i = 0; i <= TamanhoMascara; i++) {
        boleanoMascara = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == ".")
                || (Mascara.charAt(i) == "/"))
        boleanoMascara = boleanoMascara || ((Mascara.charAt(i) == "(")
                || (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " "))
        if (boleanoMascara) {
            NovoValorCampo += Mascara.charAt(i);
            TamanhoMascara++;
        } else {
            NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
            posicaoCampo++;
        }
    }
    campo.value = NovoValorCampo;
    ////LIMITAR TAMANHO DE CARACTERES NO CAMPO DE ACORDO COM A MASCARA//
    if (campo.value.length > Mascara.length) {
        var texto = $(campo).val();
        $(campo).val(texto.substring(0, texto.length - 1));
    }
    //////////////
    return true;
}

function MascaraMoeda(i) {
    var v = i.value.replace(/\D/g, '');
    v = (v / 100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    i.value = v;
}

function MascaraGenerica(seletor, tipoMascara) {
    setTimeout(function () {
        if (tipoMascara == 'CPFCNPJ') {
            if (seletor.value.length <= 14) { //cpf
                formataCampo(seletor, '000.000.000-00');
            } else { //cnpj
                formataCampo(seletor, '00.000.000/0000-00');
            }
        } else if (tipoMascara == 'DATA') {
            formataCampo(seletor, '00/00/0000');
        } else if (tipoMascara == 'CEP') {
            formataCampo(seletor, '00.000-000');
        } else if (tipoMascara == 'TELEFONE') {
            formataCampo(seletor, '(00) 000000000');
        } else if (tipoMascara == 'INTEIRO') {
            MascaraInteiro(seletor);
        } else if (tipoMascara == 'FLOAT') {
            MascaraFloat(seletor);
        } else if (tipoMascara == 'CPF') {
            formataCampo(seletor, '000.000.000-00');
        } else if (tipoMascara == 'CNPJ') {
            formataCampo(seletor, '00.000.000/0000-00');
        } else if (tipoMascara == 'MOEDA') {
            MascaraMoeda(seletor);
        }
    }, 200);


}
