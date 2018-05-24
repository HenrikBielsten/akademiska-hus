const questionMark = document.querySelector('.questionmark');
const closePopupX = document.querySelector('.xIcon');
const collapseIcon = document.querySelector('.collapseIcon');
const expandIcon = document.querySelector('.expandIcon');



$(questionMark).click(function(){
    $(".questionmark_popup").animate({right: '20px'});
});

$(closePopupX).click(function(){
    $(".questionmark_popup").animate({right: '375px'});
});


$(collapseIcon).click(function(){
    $(".describe-report-container").animate({bottom: '-440px'});
    $(".slick-dots").animate({top: '90%'});
    $(this).hide();
    $(expandIcon).show();
});

$(expandIcon).click(function(){
    $(".describe-report-container").animate({bottom: '0'});
    $(".slick-dots").animate({top: '25%'});
    // $(this).hide();
    $(collapseIcon).show();
});
