$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin: 10,
    // center:true,
    items:5,
    autoWidth:true,
    loop:true,
    navigation:true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });
  var feed=new ody({
    get:"user",
    limit:16,
    resolution:"standard_resolution",
    // template:'<div class="portfolio_item portfolio_item2"><img src={{image}} alt="" /><div class="portfolio_hover text-center"><h6 class="text-uppercase text-white">Instagram</h6><div class="portfolio_hover_icon"><a href="{{link}}" target="_blank"><i class="fa fa-search"></i></a></div></div></div>',
    template:'<li><a href="{{link}}" target="_blank" style="background-image:url({{image}});background-size: cover;"><img src="https://lh3.googleusercontent.com/-P-gOTAfNfZ4/V2RPSYvECxI/AAAAAAAABng/Efqy2Oxjqm4lrmDhT07PBtlgYRb_MlJ7QCCo/s576/questyerror.png"></img><div class="instagrid-z"><div class="instagrids"></div></div></a></li>',
    // template:'<div class="item"><a target="_blank" href="{{link}}"><img src="{{image}}"><div class="instagrid-z"><div class="instagrids"><span class="instagrid-outter">{{likes}} <i class="fa fa-heart"></i><br/>{{comments}} <i class="fa fa-comment"></i></span></div></div></a></div>',
    userId:1285466887,
    accessToken:"1285466887.bec266f.4b571a5416a742af9834493037c85958",
  });feed.run();
});
