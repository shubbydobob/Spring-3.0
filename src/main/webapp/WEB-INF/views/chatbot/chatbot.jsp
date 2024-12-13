<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/css/chatbot.css">
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d7516addb75f832ba23c8f25090d449b"></script>
<script src="/resources/js/chatbot.js"></script>
</head>
<body>

<div class="chat-container">

    <!-- 메시지 영역 -->
    <div class="message bot">리얼타임북의 리봇입니다~!! <br>오늘 하루는 어떠신가요?^^</div>
    <div class="message bot">실시간 예약 상담은<br>24시간 채팅 문의 가능합니다. </div>
    <div class="message bot">안녕하세요??고객님!!<br>무엇을 도와드릴까요?</div>
    <div class="button-container">
    	<button onclick="addUserMessage3('☆☆리뷰 이벤트☆☆')">☆☆리뷰 이벤트☆☆</button>
        <button onclick="addUserMessage1('예약하는 방법 알고싶어!!')">예약하는 방법 알고싶어!!</button>
        <button onclick="addUserMessage2('가격문의 & 견적 작성 !!')">가격문의 & 견적 작성 !!</button>
        <button onclick="addUserMessage5('문의 내역 조회~~')">문의 내역 조회~~</button>
        <button onclick="addUserMessage4('상담사 연결하기')">상담사 연결 돼?</button>
        <button onclick="addUserMessage6('수리기사 리뷰 보기')">수리기사 >< 리뷰 보기</button>
    </div>
</div>


</body>
</html>