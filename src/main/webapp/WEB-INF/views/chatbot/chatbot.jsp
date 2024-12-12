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
    <div class="message bot">안녕하세요, 고객님! 무엇을 도와드릴까요?</div>
    <div class="button-container">
        <button onclick="addUserMessage1('예약하기')">예약하기</button>
        <button onclick="addUserMessage2('가격문의')">가격문의</button>
        <button onclick="addUserMessage3('**이벤트**')">**이벤트**</button>
        <button onclick="addUserMessage4('상담사 연결하기')">상담사 연결하기</button>
        <button onclick="addUserMessage5('문의 내역 조회')">문의 내역 조회</button>
        <button onclick="addUserMessage6('수리기사 추천받기')">수리기사 추천받기</button>
    </div>
</div>


</body>
</html>