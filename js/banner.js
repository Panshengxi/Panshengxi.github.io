function tx1(){null!==bannerTimeout&&clearTimeout(bannerTimeout),$("#banner1").show(),$("#banner2").hide(),$("#banner3").hide(),$("#banner4").hide(),$("#banner5").hide(),$("#banner6").hide(),$("#txs1").addClass("ativo"),$("#txs2").removeClass("ativo"),$("#txs3").removeClass("ativo"),$("#txs4").removeClass("ativo"),$("#txs5").removeClass("ativo"),$("#txs6").removeClass("ativo"),bannerTimeout=setTimeout(function(){tx2()},12e3)}function tx2(){null!==bannerTimeout&&clearTimeout(bannerTimeout),$("#banner2").show(),$("#banner1").hide(),$("#banner3").hide(),$("#banner4").hide(),$("#banner5").hide(),$("#banner6").hide(),$("#txs2").addClass("ativo"),$("#txs1").removeClass("ativo"),$("#txs3").removeClass("ativo"),$("#txs4").removeClass("ativo"),$("#txs5").removeClass("ativo"),$("#txs6").removeClass("ativo"),bannerTimeout=setTimeout(function(){tx3()},12e3)}function tx3(){null!==bannerTimeout&&clearTimeout(bannerTimeout),$("#banner3").show(),$("#banner1").hide(),$("#banner2").hide(),$("#banner4").hide(),$("#banner5").hide(),$("#banner6").hide(),$("#txs3").addClass("ativo"),$("#txs1").removeClass("ativo"),$("#txs2").removeClass("ativo"),$("#txs4").removeClass("ativo"),$("#txs5").removeClass("ativo"),$("#txs6").removeClass("ativo"),bannerTimeout=setTimeout(function(){tx4()},12e3)}function tx4(){null!==bannerTimeout&&clearTimeout(bannerTimeout),$("#banner4").show(),$("#banner1").hide(),$("#banner2").hide(),$("#banner3").hide(),$("#banner5").hide(),$("#banner6").hide(),$("#txs4").addClass("ativo"),$("#txs1").removeClass("ativo"),$("#txs2").removeClass("ativo"),$("#txs3").removeClass("ativo"),$("#txs5").removeClass("ativo"),$("#txs6").removeClass("ativo"),bannerTimeout=setTimeout(function(){tx1()},12e3)}function tx5(){null!==bannerTimeout&&clearTimeout(bannerTimeout),$("#banner5").show(),$("#banner1").hide(),$("#banner2").hide(),$("#banner3").hide(),$("#banner4").hide(),$("#banner6").hide(),$("#txs5").addClass("ativo"),$("#txs1").removeClass("ativo"),$("#txs2").removeClass("ativo"),$("#txs3").removeClass("ativo"),$("#txs4").removeClass("ativo"),$("#txs6").removeClass("ativo"),bannerTimeout=setTimeout(function(){tx6()},12e3)}function tx6(){null!==bannerTimeout&&clearTimeout(bannerTimeout),$("#banner6").show(),$("#banner1").hide(),$("#banner2").hide(),$("#banner3").hide(),$("#banner4").hide(),$("#banner5").hide(),$("#txs6").addClass("ativo"),$("#txs1").removeClass("ativo"),$("#txs2").removeClass("ativo"),$("#txs3").removeClass("ativo"),$("#txs4").removeClass("ativo"),$("#txs5").removeClass("ativo"),bannerTimeout=setTimeout(function(){tx1()},12e3)}$(document).ready(function(){tx1()});var bannerTimeout;$(document).ready(function(){$(".customer-logos").slick({slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,arrows:!1,dots:!1,pauseOnHover:!1,responsive:[{breakpoint:768,settings:{slidesToShow:3}},{breakpoint:520,settings:{slidesToShow:2}}]})});