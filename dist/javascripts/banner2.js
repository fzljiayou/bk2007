window.onload = function(){
    new Swiper("#swiper1", {
        loop: true,
        effect : 'fade',
        autoplay:{
            delay: 2000,//1秒切换一次
      },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
        observerParents : true
    });
} 

// li列表二级菜单
$(function(){
    function List_menu(){
        this.lis = $(".ej li");
        this.li_menu = $(".ej div");
        this.ej = $(".ej");
        this.bindEvend();
    }
    List_menu.prototype.bindEvend = function(){
        var _this = this;
        $(this.lis).mouseover(function(){
            $(this).addClass("selected")
            .siblings().removeClass("selected");
    
            $(_this.li_menu).eq($(this).index(this.lis))
            .addClass("edj")
            .siblings().removeClass("edj");
        });
        $(this.ej).mouseleave(function(){
            $(_this.lis).removeClass("selected");
            $(_this.li_menu).removeClass("edj");
        })
    }
    new List_menu();
})


