// HTML 구조 파악이 끝난 후 실행
$(function () {
  // 대상을 변수에 저장
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;

  console.log($menu);

  // 메뉴 영역에 마우스가 들어왔을 때
  $menu.on('mouseenter', function () {
    // 해당 메뉴의 서브메뉴를 slide down
    // $submenu.stop().slideDown(duration);
    /* .stop()을 안넣어주면 올린횟수만큼 왔다갔다 하기 때문에 .stop()넣어줌 */
    $(this).find($submenu).stop().slideDown(duration);
    /* this : 마우스가 들어오는 공간기준 자손 잡기 -> 자손: find() */

    // 해당 메뉴에 on 클래스 부여
    $(this).addClass('on');
  });

  // 메뉴 영역에 마우스가 나갈 때
  /* 여기서 on은 addEventListener 이벤트를 걸어준다는 뜻의 on임 */
  $menu.on('mouseleave', function () {
    //서브메뉴를 slide up
    $submenu.stop().slideUp(duration);

    // 모든 메뉴에서 on 클래스 빼기
    $menu.removeClass('on');
  });
});
