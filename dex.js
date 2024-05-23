//틀 인클루드
$(document).ready( function() {
$("#atencm").load("./atencm.html"); //아텐 행정구역 목록

$("#belgcm").load("./belgcm.html"); //헌법기관 목록
$("#darcm").load("./darcm.html"); //다트라이렌 관련 문서

$("#dibcm").load("./dibcm.html"); //국가행정조직

$("#dnpcm").load("./dnpcm.html"); //국회 원내 구성

$("#dpmcm").load("./dpmcm.html"); //총리 목록
$("#dpmcmjg").load("./dpmcmjg.html");// 총리 직속 기관

$("#dpscm").load("./dpscm.html"); //대통령 목록

$("#haengcm").load("./haengcm.html"); //행정구역 목록

$("#prlcm").load("./prlcm.html"); //1부 리그 참가 구단

$("#seocm").load("./seocm.html"); //주요 선거 목록
});

//jQuery tbody 접기 펼치기
$(document).ready(function() {
  $('#hsbutton').click(function() {
      $(this).closest('tbody').next('#hidden-row').toggle();
  });
});

$(document).ready(function() {
  $('#toggle-btn').click(function() {
      var group = $(this).data('group');
      $('#hidden-rkow.' + group).toggle();
  });
});

$(document).ready(function(){
  $('a').each(function(){
      var text = $(this).text(); // 링크 텍스트를 가져옴
      $(this).attr('title', text); // title 속성에 텍스트를 할당
  });
});