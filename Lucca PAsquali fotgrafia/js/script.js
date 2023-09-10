$(function(){

    let indiceAtual = 0
    let indiceMaximo = $('#header-slider img').length
    let delay = 5000

    initSlider()
    function initSlider(){  
        $('#header-slider img').eq(0).fadeIn(1000)
        setInterval(function(){
            alternarSlider()
        },delay,)
    }  

    function alternarSlider(){
        $('#header-slider img').eq(indiceAtual).stop().fadeOut(1000)
        indiceAtual+=1
        if (indiceAtual == indiceMaximo)
            indiceAtual = 0
            $('#header-slider img').eq(indiceAtual).stop().fadeIn(1000)
            alterarCor()
            function alterarCor(){
                if(indiceAtual == 0){
                    $('section.sobre-mim').css("background-color","#09453C")
                } else if (indiceAtual == 1){
                    $('section.sobre-mim').css("background-color","#323736")
                } else {
                    $('section.sobre-mim').css("background-color","#715937")
                }
            }
    }

   

    // JS SOCIALS
    $("#social-share").jsSocials({
        url: "http://www.google.com",
        text: "Google Search Page",
        showLabel: false,
        showCount: "inside",
        shares: ["facebook", "linkedin", "whatsapp"]

    });

})