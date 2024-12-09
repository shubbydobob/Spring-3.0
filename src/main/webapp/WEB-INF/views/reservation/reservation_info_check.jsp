<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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

   
  
    <form action="/reservation/reservation_info" method="post">
    <h2>예약 정보를 입력해주세요</h2>
      <div class="form-group">
        <label for="name">성함</label>
        <input type="text" name="customer_name" id="customer_name" placeholder="이름을 입력하세요" required>
    </div>
     <div class="form-group">
        <label for="phone">연락처</label>
        <input type="text" name="customer_phone" id="phone" placeholder="'-' 빼고 입력해주세요." required>
    </div>
         <div class="form-group">
        <label for="address_postcode">주 소</label>
        <button type="button" class="address_search">주소검색</button>
        <input type="text" id="address_postcode" class="address_postcode" name="address_postcode" placeholder="우편번호" required><br />
        <input type="text" id="address_road" class="address_road" name="address_road" placeholder="도로명 주소" required><br />
        <input type="text" id="address_bname" class="address_bname" name="address_bname" placeholder="동주소" required><br />
        <input type="text" id="address_detail" class="address_detail" name="address_detail" placeholder="상세주소" required><br />
        <input type="text" id="reservation_date" class="reservation_date" name="reservation_date" placeholder="예약하신 날짜" required><br />
    </div>

        <button type="submit">제출</button>
    </form>
  
</body>
</html>