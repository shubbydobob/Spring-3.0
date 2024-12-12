<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/css/reservation_info.css">
</head>
<body>

    <div class="container">
  
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
        <br>
        <div>
            <label>이름</label>
            <div>${reservation.customer_name}</div>
        </div>
        <br>
        <div>
            <label>전화번호</label>
            <div>${reservation.customer_phone}</div>
        </div>
        <br>
        <div>
            <label>방문할 고객 주소</label>
            <div>${reservation.address_postcode} ${reservation.address_road}<br>
            ${reservation.address_bname }
            ${reservation.address_detail}
            </div>
        </div>
        <br>
  
        
        <div>
            <label>A/S 사유</label>
            <div>${reservation.problem}</div>
        </div>
        <br>
        <div>
            <label>배정된 A/S 기사</label>
            <div>${reservation.mechanic}</div>
        </div>
        <br>
        <div>
            <label>방문 예정 날짜</label>
            <div>${reservation.reservation_date}</div>
        </div>
        <br>
        <div>
            <label>방문 예정 시간</label>
            <div>${reservation.reservation_time}</div>
        </div>
           
           <!-- 예약 취소 버튼 추가 -->
        <form action="/reservation/reservation_cancel" method="post" onsubmit="return confirmCancel();">
            <input type="hidden" name="reservation_no" value="${reservation.reservation_no}" />
            <button type="submit" id="cancelBtn">예약 취소</button>
        </form>
           
    </c:forEach>  
    </div>
    
    <button type="button" id="moveToHome-button" class="moveToHome-button" onclick="location.href='/reservation/'">메인으로 가기</button>
</div>
</body>
<script>
    function confirmCancel() {
        return confirm("예약을 취소하시겠습니까?");
    }
</script>
</html>