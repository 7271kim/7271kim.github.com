---
title: 여행계획 ( 호치민 )
layout: post
summary: 호치민 여행계획편
categories: 
    - travel
thumbnail: posts/icon-travel.png
---


<p class="text-danger bold-text" style="font-size:20px">2019.10.10일 (목) ( <span id="days"></span>일 <span id="hour"></span>시간 <span id="minute"></span>분 <span id="second"></span>초 )</p>
<p><span class="bold-text">07:20</span> 비행기 탑승 OZ731, 예약번호 6720-1220/RBZKF4</p>
<p><span class="bold-text">11:05</span> 호치민 도착</p>
시티투어
<p class="text-danger bold-text" style="font-size:20px">2019.10.11일 (금) ( <span id="days2"></span>일 <span id="hour2"></span>시간 <span id="minute2"></span>분 <span id="second2"></span>초 )</p>
<p class="text-danger bold-text" style="font-size:20px">2019.10.12일 (토) ( <span id="days3"></span>일 <span id="hour3"></span>시간 <span id="minute3"></span>분 <span id="second3"></span>초 )</p>
붕따우 
<p class="text-danger bold-text" style="font-size:20px">2019.10.13일 (일) (  <span id="days4"></span>일 <span id="hour4"></span>시간 <span id="minute4"></span>분 <span id="second4"></span>초 )</p>
다시 호치민 마사지
<p class="text-danger bold-text" style="font-size:20px">2019.10.14일 (월) ( <span id="days5"></span>일 <span id="hour5"></span>시간 <span id="minute5"></span>분 <span id="second5"></span>초 )</p>
<p><span class="bold-text">12:05</span> 호치민 출발 OZ732, 예약번호 6720-1220/RBZKF4</p>
<p><span class="bold-text">19:25</span> 한국 도착</p>

<script async type="text/javascript">
getTime('2019-10-10T07:20:00',$('#month'),$('#days'),$('#hour'),$('#minute'),$('#second')  );
getTime('2019-10-11T00:00:00',$('#month2'),$('#days2'),$('#hour2'),$('#minute2'),$('#second2')  );
getTime('2019-10-12T00:00:00',$('#month3'),$('#days3'),$('#hour3'),$('#minute3'),$('#second3')  );
getTime('2019-10-13T00:00:00',$('#month4'),$('#days4'),$('#hour4'),$('#minute4'),$('#second4')  );
getTime('2019-10-14T00:00:00',$('#month5'),$('#days5'),$('#hour5'),$('#minute5'),$('#second5')  );


function getTime( inputData, month, day, hour, minute, second ){
    
    var date        = new Date();
    var targetData  = new Date(inputData);
    var interval    = targetData - date;
    //var getDate     = changeDate( interval, [12,30.4375,24,60,60,1000] );
    var getDate     = changeDate( interval, [24,60,60,1000] );
    //month.text(getDate[0])
    day.text(getDate[0])
    hour.text(getDate[1])
    minute.text(getDate[2])
    second.text(getDate[3])

    setTimeout(function(){
        getTime( inputData, month, day, hour, minute, second );
    }, 1000);
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