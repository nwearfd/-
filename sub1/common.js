$(document).ready(function(){
    let Lpos = 0;
    setInterval(left, 3000);

    function left(){
        let len = $(".slide li").length-1;
        $(".slide li").eq(Lpos).animate({
            "left" : "-100%"
        },1000).siblings().css({left : "100%"});
        Lpos++;
        if(Lpos > len) Lpos = 0;
        $(".slide li").eq(Lpos).animate({
            "left" : "0"
        },1000)
    }


    $(".banner img").click(function(){
        $(".popup1 img").fadeIn(500,function(){
            $(this).css("display", "block");
        })
    })
    $(".popup1 img").click(function(){
        $(".popup1 img").fadeOut(function(){
            $(this).css("display", "none")
        })
    })
    $(".quick img").click(function(){
        $(".popup2 img").fadeIn(500,function(){
            $(this).css("display", "block");
        })
    })
    $(".popup2 img").click(function(){
        $(".popup2 img").fadeOut(function(){
            $(this).css("display", "none")
        })
    })

    $("#notice li:first-child").click(function(){
        $(".content-text").fadeIn(function(){
            $(this).css("display", "block")
        })
    })
    $(".content-text").click(function(){
        $(".content-text").fadeOut(function(){
            $(this).css("display", "none")
        })
    })
    $(".no1").click(function(){
        $(".popup3 img").fadeIn(500,function(){
            $(this).css("display", "block")
        })
    })
    $(".popup3 img").click(function(){
        $(".popup3 img").fadeOut(function(){
            $(this).css("display", "none")
        })
    })
    $(".no2").click(function(){
        $(".popup4 img").fadeIn(500,function(){
            $(this).css("display", "block")
        })
    })
    $(".popup4 img").click(function(){
        $(".popup4 img").fadeOut(function(){
            $(this).css("display", "none")
        })
    })
    $(".no3").click(function(){
        $(".popup5 img").fadeIn(500,function(){
            $(this).css("display", "block")
        })
    })
    $(".popup5 img").click(function(){
        $(".popup5 img").fadeOut(function(){
            $(this).css("display", "none")
        })
    })


    function toggleTab(){
        //클릭한 a tag(탭 메뉴)의 href 속성을 가져온다.
        const target = $(this).attr('href')
        $('.tab .active').removeClass('active')
        //tab의 자손 중 .active를 선택한 후, active를 제거
        $(this).addClass('active')
        $(target).addClass('active')
        //
        return false
    }
    $(document).on('click', '.tab header a', toggleTab)
})