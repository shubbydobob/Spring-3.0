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

    <form action="/reservation/reservation_info_check" id="reservationForm" method="post">
     <div class="segment">
      <h1>예약 조회</h1>
    </div>
    
	        <label for="name">성함</label><br>
	        <input type="text" name="customer_name" id="customer_name" placeholder="이름을 입력하세요" required>
	    </div>
		<div class="form-group">
		    <label for="phone">전화번호</label><br>
		    <input type="text" name="customer_phone" id="customer_phone" placeholder="'-' 빼고 입력해주세요." required>
		</div>
		<button type="submit" class="red">예약 조회</button>
    </form>
 </div>

    
		<!-- 예약 이력 표시 -->
   <div class="form-group">

   
   
    
    <c:if test="${not empty successMessage}">
        <div>${successMessage}</div>
    </c:if> -
    
    <h3>예약 이력</h3>
    
     <c:forEach var="reservation" items="${reservations}"> 
        <div>
            <label>예약 번호</label>
             <a href="/reservation/reservation_info?reservation_no=${reservation.reservation_no}">
           <c:out value="${reservation.reservation_no}" />
            </a>
        </div>
        <!--  
        <div>
            <label>이름</label>
            <div>${reservation.customer_name}</div>
        </div>
        
        <div>
            <label>전화번호</label>
            <div>${reservation.customer_phone}</div>
        </div>
        
        <div>
            <label>우편번호</label>
            <div>${reservation.address_postcode}</div>
        </div>
        
        <div>
            <label>도로명 주소</label>
            <div>${reservation.address_road}</div>
        </div>
        
        <div>
            <label>동주소</label>
            <div>${reservation.address_bname}</div>
        </div>
        
        <div>
            <label>상세주소</label>
            <div>${reservation.address_detail}</div>
        </div>
        
        <div>
            <label>A/S 사유</label>
            <div>${reservation.problem}</div>
        </div>
        
        <div>
            <label>배정된 A/S 기사</label>
            <div>${reservation.mechanic}</div>
        </div>
        -->
        <div>
            <label>방문 예정 날짜</label>
            <div><fmt:formatDate pattern="yyy-MM-dd" value="${reservation.reservation_date}" /></div>
        </div>
        
        <div>
            <label>방문 예정 시간</label>
            <div><c:out value="${reservation.reservation_time}" /></div>
        </div>
           
    </c:forEach>   

    </div>
</body>
</html>