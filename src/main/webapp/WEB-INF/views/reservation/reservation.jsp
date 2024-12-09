<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>냉/난방 AS 실시간 예약 기능</title>
<link rel="stylesheet" href="/resources/css/reservation.css">
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="/resources/js/reservation.js"></script>
<script src="/resources/js/address.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.13/flatpickr.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.13/flatpickr.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
<form method="post" action="/reservation/reservation_check" class="reservation-form" id="reservationForm">
     <div class="form-group">
        <label for="name">성함</label>
        <input type="text" name="customer_name" id="name" placeholder="이름을 입력하세요">
    </div>
     <div class="form-group">
        <label for="phone">연락처</label>
        <input type="text" name="customer_phone" id="phone" placeholder="'-' 빼고 입력해주세요.">
    </div>
    <div class="form-group">
        <label for="address_postcode">주 소</label>
        <button type="button" class="address_search">주소검색</button>
        <input type="text" id="address_postcode" class="address_postcode" name="address_postcode" placeholder="우편번호"><br />
        <input type="text" id="address_road" class="address_road" name="address_road" placeholder="도로명 주소"><br />
        <input type="text" id="address_bname" class="address_bname" name="address_bname" placeholder="동주소"><br />
        <input type="text" id="address_detail" class="address_detail" name="address_detail" placeholder="상세주소"><br />
    </div>
    <div class="form-group">
        <label for="problem">A/S 사유를 선택해주세요.</label><br />
       <select name="problem" id="problem">
            <option value="냉난방 불량">냉난방 불량</option>
            <option value="소음 및 진동">소음 및 진동</option>
            <option value="누수">누수</option>
            <option value="부품 파손">부품 파손</option>
            <option value="악취 발생">악취 발생</option>
            <option value="기타">기타</option>
        </select>
    </div>
         <div class="form-group">
        <label for="mechanic">더 빠른 방문을 위해 사유에 맞게 기사님을 선택해주세요.</label>
        <select id="mechanic" name="mechanic">
            <option value="">더 빠른 방문을 위해 사유에 맞게 기사님을 선택해주세요.</option>
	        <option value="김자바 수리기사 / 냉난방 불량 전문">김자바 수리기사 / 냉난방 불량 전문</option>
	        <option value="오드릴 수리기사 / 냉난방 불량 전문">오드릴 수리기사 / 냉난방 불량 전문</option>
	        <option value="정코딩 수리기사 / 소음 및 진동 전문">정코딩 수리기사 / 소음 및 진동 전문</option>
	        <option value="한조희 수리기사 / 소음 및 진동 전문">한조희 수리기사 / 소음 및 진동 전문</option>
	        <option value="박수리 수리기사 / 누수 전문">박수리 수리기사 / 누수 전문</option>
	        <option value="정리왕 수리기사 / 누수 전문">정리왕 수리기사 / 누수 전문</option>
	        <option value="박커피 수리기사 / 누수 전문">박커피 수리기사 / 누수 전문</option>
	        <option value="이냉방 수리기사 / 부품 파손 전문">이냉방 수리기사 / 부품 파손 전문</option>
	        <option value="김처리 수리기사 / 부품 파손 전문">김처리 수리기사 / 부품 파손 전문</option>
	        <option value="안스프링 수리기사 / 악취 발생 전문">안스프링 수리기사 / 악취 발생 전문</option>
	        <option value="최코딩 수리기사 / 악취 발생 전문">최코딩 수리기사 / 악취 발생 전문</option>
	        <option value="최고다 수리기사 / 악취 발생 전문">최고다 수리기사 / 악취 발생 전문</option>
	        <option value="황빠름 수리기사 / 기타">황빠름 수리기사 / 기타</option>
	        <option value="최파이썬 수리기사 / 기타">최파이썬 수리기사 / 기타</option>
	        <option value="김난방 수리기사 / 기타">김난방 수리기사 / 기타</option>
    	</select>
    </div>
    <div class="form-group">
            <label for="calendar">예약 날짜</label>
            <input type="text" id="calendar" name="reservation_date" placeholder="날짜를 선택하세요">
        </div>
        <div id="time-selection" class="time-selection" style="display: none;">
            <h3>예약 가능한 시간</h3>
            <table id="time-table" border="1" class="time-table">
                <thead>
                    <tr>
                        <th>시간</th>
                        <th>선택</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <input type="hidden" id="selected-time" name="reservation_time">
      <div class="form-group">
        <input type="submit" value="예약 신청하기" id=submitBtn>
    </div>
</form>
</body>
</html>



