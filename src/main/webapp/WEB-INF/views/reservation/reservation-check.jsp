<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h2>예약 확인</h2>

<c:if test="${not empty successMessage}">
    <div>${successMessage}</div>
</c:if>

<table>
    <thead>
        <tr>
            <th>예약 번호</th>
            <th>고객 이름</th>
            <th>고객 전화번호</th>
            <th>주소</th>
            <th>기사 이름</th>
            <th>기사 전화번호</th>
            <th>전문 분야</th>
            <th>예약 일시</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach var="reservation" items="${reservations}">
            <tr>
                <td>${reservation.no}</td>
                <td>${reservation.customer_name}</td>
                <td>${reservation.customer_phone}</td>
                <td>${reservation.address_postcode} ${reservation.address_road} ${reservation.address_bname} ${reservation.address_detail}</td>
                <td>${reservation.mechanic.name}</td>
                <td>${reservation.mechanic.phone}</td>
                <td>${reservation.mechanic.expertise}</td>
                <td>${reservation.date} ${reservation.time}</td>
            </tr>
        </c:forEach>
    </tbody>
</table>
</body>
</html>