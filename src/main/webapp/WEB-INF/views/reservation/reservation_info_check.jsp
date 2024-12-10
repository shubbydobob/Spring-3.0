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
<script src="/resources/js/address.js"></script>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</head>
<body>

   
  
    <form action="/reservation/reservation_info_check" method="post">
    <h2>예약 정보를 입력해주세요</h2>

	    <div class="form-group">
	        <label for="name">성함</label>
	        <input type="text" name="customer_name" id="customer_name" placeholder="이름을 입력하세요" required>
	    </div>
		<div class="form-group">
		    <label for="phone">전화번호</label>
		    <input type="text" name="customer_phone" id="phone" placeholder="'-' 빼고 입력해주세요." required>
		</div>
		<button type="submit">예약보기</button>
    </form>
		<!-- 예약 이력 표시 -->
    <div class="form-group">
        <h3>예약 이력</h3>
        <table border="1" style="border-collapse: collapse; width: 100%;">
            <thead>
                <tr>
                    <th>예약 번호</th>
                    <th>고객 이름</th>
                    <th>전화번호</th>
                    <th>주소</th>
                    <th>문제</th>
                    <th>수리기사</th>
                    <th>예약 날짜</th>
                    <th>예약 시간</th>
                </tr>
            </thead>
            <tbody>
                <!-- JSP로 예약 이력 데이터를 반복 출력 -->
                <c:forEach var="reservation" items="${reservations}">
                    <tr>
                        <td>
                            <!-- 예약 번호 클릭 시 다른 페이지로 이동 -->
                            <a href="/reservation/reservation_info.jsp?reservation_no=${reservation.reservation_no}">
                                <c:out value="${reservation.reservation_no}" />
                            </a>
                        </td>
                        <td><c:out value="${reservation.customer_name}" /></td>
                        <td><c:out value="${reservation.customer_phone}" /></td>
                        <td>
                            <c:out value="${reservation.address_road}" /> 
                            <c:out value="${reservation.address_bname}" />
                            <c:out value="${reservation.address_detail}" />
                        </td>
                        <td><c:out value="${reservation.problem}" /></td>
                        <td><c:out value="${reservation.mechanic}" /></td>
                        <td><fmt:formatDate pattern="yyy-MM-dd" value="${reservation.reservation_date}" /></td>
                        <td><c:out value="${reservation.reservation_time}" /></td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </div>
</body>
</html>