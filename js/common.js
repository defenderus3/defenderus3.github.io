$(document).ready(function(){
  //  toggleClass for Footer category
  $(".sbis_ru-Footer__category.sbis_ru-Grid-col").click(function(){
    $(this).toggleClass('sbis_ru-Footer__category-opened');
  });
  // when scrolling, change the class
  $(".bodyContent").scroll(function() {
    if ($(".bodyContent").scrollTop() > 10) {
      $(".sbis_ru-Header.sbis_ru-flex.sbis_ru-flex-align-center").addClass("sbis_ru-Header--scrolled sbis_ru-Header--menu-visible");
    } else {
      $(".sbis_ru-Header.sbis_ru-flex.sbis_ru-flex-align-center").removeClass("sbis_ru-Header--scrolled sbis_ru-Header--menu-visible");
    }
  });
});