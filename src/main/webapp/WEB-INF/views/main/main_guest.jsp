<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/css/main_guest.css">
</head>
<body>
<body>
        <!-- 헤더 섹션 -->
        <header class="header-nav">
          <nav class="nav-bar">
            <ul class="nav-menu">
              <li class="nav-item">
                <a href="/reservation/reservation" class="nav-link">예약하기</a>
              </li>
              <li class="nav-item">
                  <a href="/reservation/reservation_info_check" class="nav-link">예약조회</a>
                </li>
              <li class="nav-item">
                <a href="/chatbot/chatbot" class="nav-link">챗봇</a>
              </li>
            </ul>
          </nav>
        </header>
      
        <!-- 물결 배경 -->
        <div class="background">
          <div class="header">
            <div class="waves-container">
              <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                  <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                  <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                  <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                  <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                  <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
              </svg>
            </div>
          </div>
        </div>
    
        <div class="content-layer">
        <div class="layer1">
            <h1>.Real Time - Book</h1>
            <h3>냉/난방 AS 예약</h3>
            <p>예약, 실시간을 더하다</p>
            
            <div class="layer2">
            <h2>예약자 [고객전용 페이지]</h2>
        </div>
        </div>
    </body>
</body>
</html>