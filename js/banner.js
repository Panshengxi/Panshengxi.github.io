$(document).ready(function(){
    tx1();
});


var bannerTimeout;

function tx1(){

    if(bannerTimeout !== null) {
        clearTimeout(bannerTimeout);
    }

    $("#banner1").show();
    $("#banner2").hide();
    $("#banner3").hide();
    $("#banner4").hide();
    $("#banner5").hide();
    $("#banner6").hide();
    $('#txs1').addClass('ativo');
    $('#txs2').removeClass ('ativo');
    $('#txs3').removeClass ('ativo');
    $('#txs4').removeClass ('ativo');
    $('#txs5').removeClass ('ativo');
    $('#txs6').removeClass ('ativo');
    bannerTimeout = setTimeout(function () {
        tx2()
    }, 12000);
}

function tx2(){

    if(bannerTimeout !== null) {
        clearTimeout(bannerTimeout);
    }

    $("#banner2").show();
    $("#banner1").hide();
    $("#banner3").hide();
    $("#banner4").hide();
    $("#banner5").hide();
    $("#banner6").hide();
    $('#txs2').addClass('ativo');
    $('#txs1').removeClass ('ativo');
    $('#txs3').removeClass ('ativo');
    $('#txs4').removeClass ('ativo');
    $('#txs5').removeClass ('ativo');
    $('#txs6').removeClass ('ativo');
    bannerTimeout = setTimeout(function () {
        tx3()
    }, 12000);
}

function tx3(){

    if(bannerTimeout !== null) {
        clearTimeout(bannerTimeout);
    }

    $("#banner3").show();
    $("#banner1").hide();
    $("#banner2").hide();
    $("#banner4").hide();
    $("#banner5").hide();
    $("#banner6").hide();
    $('#txs3').addClass('ativo');
    $('#txs1').removeClass ('ativo');
    $('#txs2').removeClass ('ativo');
    $('#txs4').removeClass ('ativo');
    $('#txs5').removeClass ('ativo');
    $('#txs6').removeClass ('ativo');
    bannerTimeout = setTimeout(function () {
        tx4()
    }, 12000);
}

function tx4(){

    if(bannerTimeout !== null) {
        clearTimeout(bannerTimeout);
    }

    $("#banner4").show();
    $("#banner1").hide();
    $("#banner2").hide();
    $("#banner3").hide();
    $("#banner5").hide();
    $("#banner6").hide();
    $('#txs4').addClass('ativo');
    $('#txs1').removeClass ('ativo');
    $('#txs2').removeClass ('ativo');
    $('#txs3').removeClass ('ativo');
    $('#txs5').removeClass ('ativo');
    $('#txs6').removeClass ('ativo');
    bannerTimeout = setTimeout(function () {
        tx1()
    }, 12000);
}

function tx5(){

    if(bannerTimeout !== null) {
        clearTimeout(bannerTimeout);
    }

    $("#banner5").show();
    $("#banner1").hide();
    $("#banner2").hide();
    $("#banner3").hide();
    $("#banner4").hide();
    $("#banner6").hide();
    $('#txs5').addClass('ativo');
    $('#txs1').removeClass ('ativo');
    $('#txs2').removeClass ('ativo');
    $('#txs3').removeClass ('ativo');
    $('#txs4').removeClass ('ativo');
    $('#txs6').removeClass ('ativo');
    bannerTimeout = setTimeout(function () {
        tx6()
    }, 12000);
}

function tx6(){

    if(bannerTimeout !== null) {
        clearTimeout(bannerTimeout);
    }

    $("#banner6").show();
    $("#banner1").hide();
    $("#banner2").hide();
    $("#banner3").hide();
    $("#banner4").hide();
    $("#banner5").hide();
    $('#txs6').addClass('ativo');
    $('#txs1').removeClass ('ativo');
    $('#txs2').removeClass ('ativo');
    $('#txs3').removeClass ('ativo');
    $('#txs4').removeClass ('ativo');
    $('#txs5').removeClass ('ativo');
    bannerTimeout = setTimeout(function () {
        tx1()
    }, 12000);
}





$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});