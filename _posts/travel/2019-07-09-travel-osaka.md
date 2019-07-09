---
title: 여행계획 ( 오사카 )
layout: post
summary: 오사카 여행계획편
categories: 
    - travel
thumbnail: posts/icon-travel.png
---
#### 2019.07.13 - 16 오사카 여행 계획
<br/>
<p class="text-danger bold-text" style="font-size:20px">2019.07.13일 ( <span id="days"></span>일 <span id="hour"></span>시간 <span id="minute"></span>분 <span id="second"></span>초 )</p> 
<p>07:10 : 비행기 출발</p>
<p>09:00 : 오사카 공항 도착</p>
<p>09:30 : 출국심사 완료</p>
<p class="text-danger">오사카 간사이 공항 -> 교토 : 하루카(HARUKA) 특급 열차 한국에서 구매 <br/> ( 바우처 아닌 실물 티켓 택배로 받아 현지에서 시간 아끼기 )</p>
<p>10:16 : 2층 JR간사이 공항역 연결통로를 따라 이동 하루카(HARUKA) 열차를 탑승 - JR노선이라 왼쪽 파랑이라인 입장( 자유석 4-6번 차량 탑승구쪽 ) ( <a href="http://time.jr-odekake.net/cgi-bin/mydia.cgi?MODE=11&FUNC=0&EKI=Kansai-airport&SENK=&DIR=&DDIV=&CDAY=&DITD=&DATE=20190713&COMPANY_CODE=401&COUNTRY_CODE=en&INBOUND_CODE=7&yearmonth=201907&day=13&x=60&y=4" target="_blank">13일 시간표</a> )</p>
<p>11:30 :  <a href="https://goo.gl/maps/wEuNDVrJaJDevKS58" target="_blank">교토역</a> 도착</p>

<p class="bold-text">오사카 -> 교토가기</p>
<p>JR / 한큐 / 케이한 3개 노선  <a href="https://uh.dcmys.kr/701" target="_blank">https://uh.dcmys.kr/701</a> </p>
<p><img src="/assets/img/posts/travel/osaka-kyoto.png" class="ratio-100" style="max-width:500px"/></p>
<p>JR / 한큐 / 케이한 3사의 노선은 오사카 시내에서 교토 시내를 잇는다는 공통점을 모두 가지고 있습니다. 하지만 세 노선은 가격도, 소요 시간도, 그리고 교토의 도착역도 다릅니다. 그래서 자신의 여행 일정에 맞춰서 이동하는 것이 가장 좋습니다.</p>
<p>한큐 쿄토 본선 도착( 숙소랑 제일 가까움 ) : <a href="https://goo.gl/maps/UJha3YicRN1NT6AD6" target="_blank">카와라마치</a></p> 
<p>JR교토선 도착 : <a href="https://goo.gl/maps/wEuNDVrJaJDevKS58" target="_blank">교토역</a></p>
<p>케이한 본선 도착 : <a href="https://goo.gl/maps/4ytPXNmKvxVH7dej6" target="_blank">기온시조</a></p>
<p>교토 시내 버스가 엄청나게 느리다는 점, 관광객이 많이 들르는 여행지 근처는 일상적으로 정체가 이어지며 특히 주말엔 그냥 걸어가는 게 더 빠른 구간도 존재 > JR이나 한큐 전철을 이용하시는 게 좋습니다. 교토 버스 패스는 1일권이 600엔으로 무척 저렴해서 다들 많이 사용하는 패스인데, 이 패스의 경쟁력은 교토 시내 도로가 전부 갉아먹는다고 봐도 과언이 아닌 수준입니다.
 그래서 무작정 버스를 탈 게 아니라, 철도를 탈 수 있는 구간은 최대한 철도를 타야합니다. 하지만 일본의 철도와 버스는 환승할인 제도가 없죠. 돈이 많다면 막 타고 다녀도 되지만, 그렇지 않다면 아무래도 부담이 되기 마련입니다. 그렇기 때문에 처음부터 노선을 잘 골라서 출발해야합니다.</p>
<p class="bold-text">결론 : 한큐선 정규 운임 : 400엔, 한큐 패스 1일권: 800엔 ( 한큐는 특급 열차도 추가 요금이 없습니다. )</p>

<a href="https://maps.app.goo.gl/h8abA2UkoY3wonLR8" target="_blank">쿄우 노 야도 카기헤이 (Kyou no Yado Kagihei Hotel)</a> 
<p> 숙소주소 :481 Umeya-cho,Fuyacho Nishiki agaru Nakagyo-ku 교토 일본 604-8057 </p>
https://goo.gl/maps/UJha3YicRN1NT6AD6

교토 버스 패스권 : 1일치 3번 이상 탈 경우 이득  - 500엔


<script async type="text/javascript">
getTime();

function getTime(){
    var date        = new Date();
    var targetData  = new Date('2019-07-13T07:10:00');
    var interval    = targetData - date;
    var getDate     = changeDate( interval, [12,30.4375,24,60,60,1000] );
    $('#days').text(getDate[2])
    $('#hour').text(getDate[3])
    $('#minute').text(getDate[4])
    $('#second').text(getDate[5])
     
    setTimeout(getTime, 1000);
   
}
function changeDate ( interVal, changer ){
    var result = [];
    var multiful = 1;
    for( index = 0; index < changer.length; index++ ){
        multiful = multiful*changer[index];
    }
    for( index = 0; index < changer.length; index++ ){
      var input = 0;
        if(index == 0){
            var input = Math.floor(interVal / multiful);
        } else {
            var afterMultiful = multiful/changer[index-1];
            var input = Math.floor((interVal % multiful) / afterMultiful);
            multiful = afterMultiful;
        }
         
         result.push(input);
    }
    
    return result;
}

</script>