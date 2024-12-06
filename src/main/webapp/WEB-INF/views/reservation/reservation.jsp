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
<form method="post" action="/reservation">
       <div>
        <label for="name">성 함</label>
        <input type="text" name="name"><br />
    </div>
    <div>
        <label for="phone">연락처</label>
        <input type="text" name="phone"><br />
    </div>
    <div>
        <label for="address_postcode">주 소</label><br />
        <button type="button" class="address_search">주소검색</button>
        <input type="text" id="address_postcode" class="address_postcode" name="address_postcode" placeholder="우편번호"><br />
        <input type="text" id="address_road" class="address_road" name="address_road" placeholder="도로명 주소"><br />
        <input type="text" id="address_bname" class="address_bname" name="address_bname" placeholder="동주소"><br />
        <input type="text" id="address_detail" class="address_detail" name="address_detail" placeholder="상세주소"><br />
    </div>
    <div>
        <label for="problem">A/S 사유를 선택해주세요.</label><br />
        <select name="problem">
            <option>전원 안켜짐</option>
            <option>온도 조절 불량</option>
            <option>누수</option>
            <option>부품 파손</option>
            <option>성에 제거</option>
        </select><br />
    </div>
  <div>
            <label for="date">예약 날짜:</label>
            <input type="text" id="calendar" name="date" placeholder="날짜를 선택하세요">
        </div>
        <div id="time-selection" style="display: none;">
            <h3>예약 가능한 시간</h3>
            <table id="time-table" border="1">
                <thead>
                    <tr>
                        <th>시간</th>
                        <th>선택</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Available times will be populated here -->
                </tbody>
            </table>
        </div>
        <div>
            <input type="hidden" id="selected-time" name="time">
            <input type="submit" value="예약 신청하기">
        </div>
</form>

</body>
</html>