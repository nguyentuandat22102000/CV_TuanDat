$(function () {
    const kn = [
      {
        tittle: "Kinh nghiệm",
        disc: "Đã từng làm đồ án tại trường",
      },
      {
        tittle: "Trình Độ",
        disc: "Sinh viên năm thứ 5 đại học sài gòn",
      },
      {
        tittle: "Bằng Cấp",
        disc: "12/12",
      },
      {
        tittle: "Ngoại ngữ",
        disc: "Mức độ đọc hiểu",
      },
    ];
    $(window).scroll(function () {
      var aTop = $(this).scrollTop();
      if(aTop > 200){
        $('.gohome').addClass('display__block')
      }else{
        $('.gohome').removeClass("display__block");
      }
    });
    $('.gohome').click(function (event) {
        $('html').animate({ scrollTop: 0 },200);
    })
    $(".header__bar .menu-toggle").click(function () {
      $(this).toggleClass("fa-times");
      $(".header__menu").toggleClass('display__block')
    });
    $(".header__menu ul li a").click(function (event) {
        event.preventDefault()
        let classMenu = $(this).text().toLowerCase();
        let heightClass = $(`.${classMenu}`).offset().top
        console.log(heightClass);
        $('html').animate({ scrollTop: heightClass }, 200);
    })


    const div = document.createElement("div");
    const listKN = kn.map((input, index) =>{
        return (
            `<div><h4>${input.tittle}</h4><span>${input.disc}</span></div>` 
        )
    });
    $(".knownledge__heading").append(listKN)
    $(".knownledge__heading div span").slideUp();
    $(".knownledge__heading div h4").click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('run')
    })
    const index = $(".hobbies__slide img").click(function () {
        let itemImg = $(this).attr("src");
        $(".hobbies__content img").attr("src", itemImg);
    });
    $(".hobbies__content img").click(function (e) {
      const itemImg = $(this).attr("src");
      $(".gallery_img img").attr("src", itemImg);
      $("#jquery__gallery").addClass("display__block");
    });
    $(".close").click(function (e) {
      $("#jquery__gallery").removeClass("display__block");
    });
    $(".right").click(function (e) {
      const listImg = $(".hobbies__slide img");
      const itemImg = $(".hobbies__content img");
      for (let i = 0; i < listImg.length; i++) {
        if(listImg[i].src === itemImg[0].src){
            let j = ++i;
            if(j < listImg.length){
                const srcImg = listImg[j].src;
                $(".hobbies__content img").attr("src", srcImg);
                $(".gallery_img img").attr("src", srcImg);
            }else{
                e.stopPropagation()
            }
        }
      }
    });
      $(".left").click(function (e) {
        const listImg = $(".hobbies__slide img");
        const itemImg = $(".hobbies__content img");
        for (let i = 0; i < listImg.length; i++) {
          if (listImg[i].src === itemImg[0].src) {   
            if(i > 0 && i < listImg.length){
                const srcImg = listImg[--i].src;
                $(".hobbies__content img").attr("src", srcImg);
                $(".gallery_img img").attr("src", srcImg);
            }
            if(i===0) {
                 e.stopPropagation()
            }
          }
        }
      });
    
    $(window).scroll(function () {
        var aTop1 = $(this).scrollTop();
        if(aTop1 < $('.banner').offset().top){
            $(".banner, .about, .project, .hobbies").css({
              opacity : "0"
            });
            $(
              ".banner__disc h2 , .banner__disc h4, .project__disc , .hobbies__slide"
            ).removeClass("righttoleft");
            $(".banner__disc i").removeClass("downtoup");
            $(".banner__disc p, .project__heading h4").removeClass("lefttoright");
            $(".about .about__image img ,.hobbies__content img").removeAttr(
              "style"
            );

        }
        if(aTop1 > $('.banner').offset().top){
            $('.banner').css({opacity : "1"})
            $(".banner .banner__image img").css({
              width: "100%",
              height: "100%",
              transition : "3s",
            });
            $(".banner__disc h2 , .banner__disc h4").addClass("righttoleft");
            $(".banner__disc i").addClass("downtoup");
            $(".banner__disc p").addClass("lefttoright");
        }
        if(aTop1 > $('.about').offset().top){
            $(".about").css({ opacity: 1 }, 2000);
            $(".about .about__image img").css({ "width": "300px", "height": "50%","transform" : "scale(2)","transition" : "3s" });
        }
        if(aTop1 > $('.project').offset().top){
            $('.project').animate({opacity:1},2000)
            $(".project__heading h4").addClass("lefttoright");
            $(".project__disc").addClass('righttoleft')
        }
        if (aTop1 > $(".hobbies").offset().top) {
            $('.hobbies').animate({opacity:1},2000)
            $(".hobbies__content img").css({ 
                "width": "100%",
                "height": "100%",
                "transform" : "scale(1)",
                "transition" : "3s" 
            });
            $(".hobbies__slide").addClass("righttoleft")

        }
        
    })
    
})