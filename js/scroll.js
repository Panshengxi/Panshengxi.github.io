$(window).scroll(function(){$(".navbar").offset().top>100&&($(".box1").removeClass("fadeInUp"),$(".box2").removeClass("fadeInUp"),$(".box3").removeClass("fadeInUp"),$(".box4").removeClass("fadeInUp"))}),$(window).scroll(function(){$(".navbar").offset().top>150?($(".text-vcenter").addClass("disable"),$(".projetomenu").addClass("menuAtive")):($(".text-vcenter").removeClass("disable"),$(".projetomenu").removeClass("menuAtive"),$(".text-vcenter").addClass("disable2"))}),$(function(){$("a.page-scroll").bind("click",function(e){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top},1500,"easeInOutExpo"),e.preventDefault()})}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()});