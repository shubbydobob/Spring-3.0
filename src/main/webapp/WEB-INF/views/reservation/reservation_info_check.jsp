<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>   
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/css/reservation_info_check.css">
</head>
<body>
<!-- Hover-to-pop Bubbles -->
  <div class="bubble b1"></div>
  <div class="bubble b2"></div>
  <div class="bubble b3"></div>
  <div class="bubble b4"></div>
  <div class="bubble b5"></div>
  <div class="bubble b6"></div>
  <div class="bubble b7"></div>

<div class="container">
    <!-- 예약 조회 폼 -->
    <div class="reservation-form">
    <form action="/reservation/reservation_info_check" id="reservationForm" method="post" onsubmit="showReservationHistory()">
     <div class="segment">
      <h1>예약 조회</h1>
    </div>
    
	        <label for="name">성함</label><br>
	        <input type="text" name="customer_name" id="customer_name" placeholder="이름을 입력하세요" required>
	   
		<div class="form-group">
		    <label for="phone">전화번호</label><br>
		    <input type="text" name="customer_phone" id="customer_phone" placeholder="'-' 빼고 입력해주세요." required>
		</div>
		<button type="submit" class="red">예약 조회</button>
    </form>
 </div>

    
	 <!-- 예약 이력 표시 (Initially hidden) -->
<div id="reservationHistory" class="reservation-history">
    <c:if test="${not empty successMessage}">
        <div>${successMessage}</div>
    </c:if> 
     <c:forEach var="reservation" items="${reservations}"> 
     <div class="reservation-item">
     <h3>예약 이력</h3>
        <div>
            <label>예약 번호</label>
             <a href="/reservation/reservation_info?reservation_no=${reservation.reservation_no}">
           <c:out value="${reservation.reservation_no}" />
            </a>
        </div>
    
        <div>
            <label>방문 예정 날짜</label>
            <div><fmt:formatDate pattern="yyy-MM-dd" value="${reservation.reservation_date}" /></div>
        </div>
        
        <div>
            <label>방문 예정 시간</label>
            <div><c:out value="${reservation.reservation_time}" /></div>
        </div>
       </div>    
    </c:forEach>   
    </div>
     </div>
</body>

</html>