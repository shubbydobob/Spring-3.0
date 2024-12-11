<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/css/reservation_check.css">
</head>
<body>
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

<div class="layer">
    <h2>예약 확인</h2>

    <c:if test="${not empty successMessage}">
        <div>${successMessage}</div>
    </c:if>

    <div class="reservations">
        <c:forEach var="reservation" items="${reservations}">
        <!--  
            <div class="reservation-item">
                <div class="title">예약 번호</div>
                <div class="content">${reservation.reservation_no}</div>
            </div>
            -->
            <div class="reservation-item">
                <div class="title">고객 이름</div>
                <div class="content">${reservation.customer_name}</div>
            </div>
            <div class="reservation-item">
                <div class="title">고객 전화번호</div>
                <div class="content">${reservation.customer_phone}</div>
            </div>
            <div class="reservation-item">
                <div class="title">전체 주소</div>
                <div class="content">${reservation.address_postcode}
                ${reservation.address_road}
                ${reservation.address_bname}
                ${reservation.address_detail}
            </div>
            <div class="reservation-item">
                <div class="title">A/S 사유</div>
                <div class="content">${reservation.problem}</div>
            </div>
            <div class="reservation-item">
                <div class="title">A/S 배정 기사</div>
                <div class="content">${reservation.mechanic}</div>
            </div>
            <div class="reservation-item">
                <div class="title">예약 날짜</div>
                <div class="content">${reservation.reservation_date}</div>
            </div>
            <div class="reservation-item">
                <div class="title">예약 시간</div>
                <div class="content">${reservation.reservation_time}</div>
            </div>
            
        </c:forEach>
    </div>
</div>
<div class="form-group">
<button type="button" id="moveToHome-button" class="moveToHome-button" onclick="location.href='/reservation/'">메인으로 가기</button>
            </div>
</body>
</html>