<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/css/chatbot.css">
</head>
<body>

<div class="chat-container">
    <!-- 메시지 영역 -->
    <div class="message bot">무엇이 궁금하신가요?</div>
    <div class="button-container">
        <button onclick="addUserMessage1('예약하기')">예약하기</button>
        <button onclick="addUserMessage2('가격문의')">가격문의</button>
        <button onclick="addUserMessage3('a/s 서비스 리뷰 작성하기')">a/s 서비스 리뷰 작성하기(이벤트)</button>
        <button onclick="addUserMessage4('상담사 연결하기')">상담사 연결하기</button>
    </div>
</div>

<script src="/resources/js/chatbot.js"></script>
</body>
</html>