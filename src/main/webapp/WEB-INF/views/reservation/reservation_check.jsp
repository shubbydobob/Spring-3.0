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
