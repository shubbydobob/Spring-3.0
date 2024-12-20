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

 <form method="post" id="reservation-form" name="reservation-form" action="/reservation/reservation_check" class="reservation-form">

            <h2>예약하기</h2>
            <!-- 1. 성함과 연락처 -->
            <div class="form-row">
                <div class="form-group">
                    <label for="name">이름</label>
                    <input type="text" name="customer_name" id="customer_name" placeholder="이름을 입력하세요" required oninput="removeDash()">
                    <small id="nameHelp" style="color:red; display:none;">올바르게 입력해주세요.</small>
                </div>
                <div class="form-group">
                    <label for="phone">연락처</label>
                    <input type="text" name="customer_phone" id="customer_phone" placeholder="'-' 빼고 입력해주세요." required oninput="removeDash()">
                    <small id="phoneHelp" style="color:red; display:none;">전화번호에서 '-'를 빼주세요.</small>
                </div>
            </div>
        
            <!-- 2. 주소와 예약 날짜 -->
            <div class="form-row">
                <!-- 주소 폼 -->
                <div class="form-group address-group">
                    <label for="address_postcode">주소</label>
                    <button type="button" class="address_search">주소검색</button>
                    <input type="text" id="address_postcode" name="address_postcode" placeholder="우편번호">
                    <input type="text" id="address_road" name="address_road" placeholder="도로명 주소">
                    <input type="text" id="address_bname" name="address_bname" placeholder="동주소">
                    <input type="text" id="address_detail" name="address_detail" placeholder="상세주소">
                                    <!-- 기사 선택 모달 -->                  
                 <div class="form-group">
                    <label for="mechanic"></label>
                    <button type="button" id="mechanic-select-button">기사 선택</button>
                </div>
                </div>
        
                <!-- 예약 날짜 폼 -->
                <div class="form-group date-group">
                    <!-- 3. A/S 사유와 예약날짜/시간 선택 -->
                    <label for="problem">A/S 사유를 선택해주세요.</label>
                    <select name="problem" id="problem">
                        <option value="">A/S 사유</option>
                        <option value="냉난방 불량">냉난방 불량</option>
                        <option value="소음 및 진동">소음 및 진동</option>
                        <option value="누수">누수</option>
                        <option value="부품 파손">부품 파손</option>
                        <option value="악취 발생">악취 발생</option>
                        <option value="기타">기타</option>
                    </select>
                    <label for="calendar">예약 날짜</label>
                    <input type="text" id="calendar" name="reservation_date" placeholder="날짜를 선택하세요">
                    <label for="time-picker">예약 시간</label>
                    <select id="time-picker" name="reservation_time">
                    <option value="" disabled selected>시간을 선택하세요</option>
                    </select>
                    <div class="selected-time-display">
                        선택된 시간: <span id="selected-time" name="reservation_time"></span>
                    </div>

            <select id="mechanic" name="mechanic" style="display:none;">
            <option value="">기사 선택</option>
	        <option value="김자바" >김자바 수리기사 / 냉난방 불량 전문</option>
	        <option value="오드릴">오드릴 수리기사 / 냉난방 불량 전문</option>
	        <option value="정코딩">정코딩 수리기사 / 소음 및 진동 전문</option>
	        <option value="한조희">한조희 수리기사 / 소음 및 진동 전문</option>
	        <option value="박수리">박수리 수리기사 / 누수 전문</option>
	        <option value="정리왕">정리왕 수리기사 / 누수 전문</option>
	        <option value="박커피">박커피 수리기사 / 누수 전문</option>
	        <option value="이냉방">이냉방 수리기사 / 부품 파손 전문</option>
	        <option value="김처리">김처리 수리기사 / 부품 파손 전문</option>
	        <option value="안스프링">안스프링 수리기사 / 악취 발생 전문</option>
	        <option value="최코딩">최코딩 수리기사 / 악취 발생 전문</option>
	        <option value="최고다">최고다 수리기사 / 악취 발생 전문</option>
	        <option value="황빠름">황빠름 수리기사 / 기타</option>
	        <option value="최파이썬">최파이썬 수리기사 / 기타</option>
	        <option value="김난방">김난방 수리기사 / 기타</option>
</select>

                </div>
                
            </div>     
            <div id="mechanic-modal" class="modal">
                <div class="modal-content">
                    <span id="close-modal" class="close-button">&times;</span>
                    <h2>기사님을 선택해주세요</h2>
                    <div class="mechanic-cards">
                        <!-- 기존 카드 -->
                        <div class="card" data-name="김자바">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src="/resources/img/1.jpg" alt="김자바 수리기사">
                                </div>
                                <div class="card-back">
                                    <p>김자바 수리기사</p>
                                    <p>냉난방 불량 전문가</p>
                                    <p>경력: 12년</p>
                                </div>
                            </div>
                        </div>
                        <div class="card" data-name="오드릴">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src="/resources/img/2.jpg" alt="오드릴 수리기사">
                                </div>
                                <div class="card-back">
                                    <p>오드릴 수리기사</p>
                                    <p>냉난방 불량 전문가</p>
                                    <p>경력: 16년</p>
                                </div>
                            </div>
                        </div>
                        <div class="card" data-name="정코딩">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src="/resources/img/3.jpg" alt="정코딩 수리기사">
                                </div>
                                <div class="card-back">
                                    <p>정코딩 수리기사</p>
                                    <p>소음 및 진동 전문가</p>
                                    <p>경력: 15년</p>
                                </div>
                            </div>
                        </div>
                        <div class="card" data-name="한조희">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src="/resources/img/4.jpg" alt="한조희 수리기사">
                                </div>
                                <div class="card-back">
                                    <p>한조희 수리기사</p>
                                    <p>소음 및 진동 전문가</p>
                                    <p>경력: 6년</p>
                                </div>
                            </div>
                        </div>
                        <div class="card" data-name="박수리">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src="/resources/img/5.jpg" alt="박수리 수리기사">
                                </div>
                                <div class="card-back">
                                    <p>박수리 수리기사</p>
                                    <p>누수 전문가</p>
                                    <p>경력: 13년</p>
                                </div>
                            </div>
                        </div>
                        <div class="card" data-name="박커피">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src="/resources/img/6.jpg" alt="박커피 수리기사">
                                </div>
                                <div class="card-back">
                                    <p>박커피 수리기사</p>
                                    <p>누수 전문가</p>
                                    <p>경력: 15년</p>
                                </div>
                            </div>
                        </div>
                        <div class="card" data-name="정리왕">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src="/resources/img/7.jpg" alt="정리왕 수리기사">
                                </div>
                                <div class="card-back">
                                    <p>정리왕 수리기사</p>
                                    <p>누수 전문가</p>
                                    <p>경력: 13년</p>
                                </div>
                            </div>
                        </div>
                        <div class="card" data-name="이냉방">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src="/resources/img/8.jpg" alt="이냉방 수리기사">
                                </div>
                                <div class="card-back">
                                    <p>이냉방 수리기사</p>
                                    <p>부품 파손 전문가</p>
                                    <p>경력: 17년</p>
                                </div>
                            </div>
                        </div>
                            <div class="card" data-name="김처리">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src="/resources/img/9.jpg" alt="김처리 수리기사">
                                </div>
                                <div class="card-back">
                                    <p>김처리 수리기사</p>
                                    <p>부품 파손 전문가</p>
                                    <p>경력: 12년</p>
                                </div>
                            </div>
                        </div> 
                             <div class="card" data-name="최고다">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src="/resources/img/10.jpg" alt="최고다 수리기사">
                                </div>
                                <div class="card-back">
                                    <p>최고다 수리기사</p>
                                    <p>악취 발생 전문가</p>
                                    <p>경력: 12년</p>
                                </div>
                            </div>
                        </div>
                         <div class="card" data-name="안스프링">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src="/resources/img/11.jpg" alt="안스프링 수리기사">
                                </div>
                                <div class="card-back">
                                    <p>안스프링 수리기사</p>
                                    <p>악취 발생 전문가</p>
                                    <p>경력: 12년</p>
                                </div>
                            </div>
                        </div>
                         <div class="card" data-name="최코딩">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src="/resources/img/12.jpg" alt="최코딩 수리기사">
                                </div>
                                <div class="card-back">
                                    <p>최코딩 수리기사</p>
                                    <p>악취 발생 전문가</p>
                                    <p>경력: 12년</p>
                                </div>
                            </div>
                        </div>
                         <div class="card" data-name="최파이썬">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src="/resources/img/13.jpg" alt="최파이썬 수리기사">
                                </div>
                                <div class="card-back">
                                    <p>최파이썬 수리기사</p>
                                    <p>기타</p>
                                    <p>경력: 12년</p>
                                </div>
                            </div>
                        </div>
                         <div class="card" data-name="황빠름">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src="/resources/img/14.jpg" alt="황빠름 수리기사">
                                </div>
                                <div class="card-back">
                                    <p>황빠름 수리기사</p>
                                    <p>기타</p>
                                    <p>경력: 12년</p>
                                </div>
                            </div>
                        </div>
                         <div class="card" data-name="김난방">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src="/resources/img/15.jpg" alt="김난방 수리기사">
                                </div>
                                <div class="card-back">
                                    <p>김난방 수리기사</p>
                                    <p>기타</p>
                                    <p>경력: 12년</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <input type="hidden" id="selected-mechanic" name="selected-mechanic">
                <!-- 제출 버튼 -->
            <div class="form-group">
            
                <input type="submit" value="예약 신청하기">
                <button type="button" id="moveToHome-button" class="moveToHome-button" onclick="location.href='/reservation/'">메인으로 가기</button>
            </div>
        </form>
        
</body>
<script type="text/javascript">
function removeDash() {
	var nameInput = document.getElementById("customer_name");
	var nameValue = nameInput.value;
    var phoneInput = document.getElementById("customer_phone");
    var phoneValue = phoneInput.value;

    // 자음만 포함된 이름을 찾는 정규식
    const consonantOnlyRegex = /^[ㄱ-ㅎ]{2,20}$/; // 자음만 입력된 경우
    // '-' 제거
    phoneInput.value = phoneValue.replace(/-/g, '');

 // '-'를 입력하면 경고 메시지를 표시
    if (consonantOnlyRegex.test(nameValue)) {
        document.getElementById("nameHelp").style.display = "block";
    } else {
        document.getElementById("nameHelp").style.display = "none";
    }
    
    // '-'를 입력하면 경고 메시지를 표시
    if (phoneValue.includes('-')) {
        document.getElementById("phoneHelp").style.display = "block";
    } else {
        document.getElementById("phoneHelp").style.display = "none";
    }
}

// 기사 목록을 A/S 사유별로 정의
const mechanicOptions = {
    "냉난방 불량": [
        "김자바",
        "오드릴",
        
    ],
    "소음 및 진동": [
        "정코딩",
        "한조희"
    ],
    "누수": [
        "박수리",
        "정리왕",
        "박커피"
    ],
    "부품 파손": [
        "이냉방",
        "김처리"
    ],
    "악취 발생": [
        "안스프링",
        "최코딩",
        "최고다"
    ],
    "기타": [
        "황빠름",
        "최파이썬",
        "김난방"
    ]
};

// A/S 사유가 선택될 때마다 기사를 필터링하여 모달에 표시
function filterMechanics() {
    const problemSelect = document.getElementById("problem");
    const mechanicSelect = document.getElementById("mechanic");
    const selectedProblem = problemSelect.value;

    // 기사 select 박스를 비우기
    mechanicSelect.innerHTML = "<option value=''>기사 선택</option>";

    // 선택된 A/S 사유에 맞는 기사들만 추가
    if (selectedProblem && mechanicOptions[selectedProblem]) {
        mechanicOptions[selectedProblem].forEach(mechanic => {
            const option = document.createElement("option");
            option.value = mechanic;
            option.textContent = mechanic;
            mechanicSelect.appendChild(option);
        });
    }

    // 기사 선택 모달 보이기
    mechanicSelect.style.display = selectedProblem ? "block" : "none";
}
</script>
</html>



