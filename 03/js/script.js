$(function () {
  const $window = $(window);
  const $header = $('#header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;

  $menu.on('mouseenter', function () {
    $(this).addClass('on');
    $header.addClass('active');
    $submenu.stop().fadeIn(duration);
  });

  $menu.on('mouseleave', function () {
    $menu.removeClass('on');
    $header.removeClass('active');
    $submenu.stop().fadeOut(duration);
  });

  // 마우스 휠을 조작했을 때 : wheel
  $window.on('wheel', function (e) {
    // console.log(e);
    // 함수가 이벤트 핸들러로 호출될때, 이벤트에 대한 정보를 객체로 받아올 수 있다
    // 이벤트 핸들러로 호출된다 = function (e)
    /* console.log(e.originalEvent.wheelDelta); */

    // 콘솔에서 위 아래로 스크롤 해보면 originalEvent의 wheelDelta값이
    // 스크롤 아래로 내리면 -음수가나오고 위로 올리면 +양수가 나오는 것을 볼 수 있음

    if (e.originalEvent.wheelDelta > 0) {
      // 휠을 올린 상태 --> header를 다시 보이게 --> hide 클래스 제거
      $header.removeClass('hide');
    } else {
      // 휠을 내린 상태 --> header를 숨기자 --> hide 클래스 부여
      $header.addClass('hide');
    }
  });
});
