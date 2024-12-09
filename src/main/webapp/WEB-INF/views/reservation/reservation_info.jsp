<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<div class="layer">
    <h2>예약 확인</h2>

    <c:if test="${not empty successMessage}">
        <div>${successMessage}</div>
    </c:if>

    <div class="reservations">
        <c:forEach var="reservation" items="${reservations}">
            <div class="reservation-item">
                <div class="title">예약 번호</div>
                <div class="content">${reservation.reservation_no}</div>
            </div>
            <div class="reservation-item">
                <div class="title">고객 이름</div>
                <div class="content">${reservation.customer_name}</div>
            </div>
            <div class="reservation-item">
                <div class="title">고객 전화번호</div>
                <div class="content">${reservation.customer_phone}</div>
            </div>
            <div class="reservation-item">
                <div class="title">우편번호</div>
                <div class="content">${reservation.address_postcode}</div>
            </div>
            <div class="reservation-item">
                <div class="title">주소 (도로명)</div>
                <div class="content">${reservation.address_road}</div>
            </div>
            <div class="reservation-item">
                <div class="title">주소 (주소)</div>
                <div class="content">${reservation.address_bname}</div>
            </div>
            <div class="reservation-item">
                <div class="title">상세주소</div>
                <div class="content">${reservation.address_detail}</div>
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
<a href="/reservation/">홈</a>
</body>
</html>