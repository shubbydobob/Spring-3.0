<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> <!-- JSTL 라이브러리 추가 -->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>예약 확인</title>
  <link rel="stylesheet" href="/resources/css/main_worker.css">
</head>
<body>
  <!-- 헤더 섹션 -->
  <header class="header-nav">
    <nav class="nav-bar">
      <ul class="nav-menu">
        <!-- 세션 상태에 따라 로그인/로그아웃 및 환영 메시지 표시 -->
        <c:choose>
          <c:when test="${not empty sessionScope.loggedInMechanic}">
            <li class="nav-item">
              <a href="/logout" class="nav-link">로그아웃</a>
            </li>
            <li class="nav-item">
              <span class="welcome-message">${sessionScope.loggedInMechanic.name}님 환영합니다!</span>
            </li>
          </c:when>
          <c:otherwise>
            <li class="nav-item">
              <a href="/login/mechaniclogin" class="nav-link">로그인</a>
            </li>
            <li class="nav-item">
              <a href="/login/mechanicsign" class="nav-link">회원등록</a>
            </li>
          </c:otherwise>
        </c:choose>
        <li class="nav-item">
          <a href="/worker/worker_calendar" class="nav-link">기사일정</a>
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

  <!-- 내용 -->
  <div class="content-layer">
    <div class="layer1">
      <h1>.Real Time - Book</h1>
      <h3>냉/난방 AS 예약</h3>
      <p>예약, 실시간을 더하다</p>
      <div class="layer2">
        <h2>관리자 [수리기사 전용 페이지]</h2>
      </div>
    </div>
  </div>
  <script src="/resources/js/mechanicpage.js"></script>
</body>
</html>
