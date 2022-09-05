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
      console.log(aTop);
      if(aTop > 200){
        $('.gohome').addClass('display__block')
      }else{
        $('.gohome').removeClass("display__block");
      }
    });
    $('.gohome').click(function (event) {
        event.preventDefault();
        let autoBack = $("header").offset().top;
        $('html').animate({ scrollTop: autoBack },200);
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

    $(".hobbies__slide img").click(function () {
        const itemImg = $(this).attr("src");
        $(".hobbies__content img").attr("src", itemImg);
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
})