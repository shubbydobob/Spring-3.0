<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

  
  <div class="form-group">
   
    <c:if test="${not empty successMessage}">
        <div>${successMessage}</div>
    </c:if>
    
    <h3>예약 이력</h3>
    
    <c:forEach var="reservation" items="${reservations}">
        <div>
            <label>예약 번호</label>
            <div>${reservation.reservation_no}</div>
        </div>
        
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
        
        <div>
            <label>방문 예정 날짜</label>
            <div>${reservation.reservation_date}</div>
        </div>
        
        <div>
            <label>방문 예정 시간</label>
            <div>${reservation.reservation_time}</div>
        </div>
           
    </c:forEach>  
</div>
</body>
</html>