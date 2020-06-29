﻿function consultaCep() {
    $(".barra_progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + cep);
            $(".cep").show();
            $(".barra_progresso").hide();
        }
    })
}
$(function(){
    $(".cep").hide();
    $(".barra_progresso").hide();
});
