document.addEventListener("DOMContentLoaded", function () {
    const mechanicSelectButton = document.getElementById("mechanic-select-button");
    const mechanicModal = document.getElementById("mechanic-modal");
    const mechanicSelect = document.getElementById("mechanic");
    const selectedMechanicInput = document.getElementById("selected-mechanic");
    const timePicker = $("#time-picker");
    const selectedTimeDisplay = $("#selected-time");
    const problemSelect = document.getElementById("problem"); // A/S 사유 선택
    
    let availableTimes = []; // 전역 변수로 예약 가능한 시간 저장
    let reservedTimes = [];
    
    
    
    

    // **1. Modal Control**
    mechanicSelectButton.addEventListener("click", function () {
        
        const problem = problemSelect.value;
        if (!problem) {
            alert("A/S 사유를 선택해주세요.");
            return;
        }
        
        mechanicModal.style.display = "flex";
    });

    window.addEventListener("click", function (event) {
        if (event.target === mechanicModal) {
            mechanicModal.style.display = "none";
        }
    });

    // **2. Mechanic Card Selection**
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", function () {
            const mechanicName = card.getAttribute("data-name");
            mechanicSelect.value = mechanicName;
            selectedMechanicInput.value = mechanicName;
            mechanicSelectButton.textContent = `${mechanicName}님 선택 완료`;
            mechanicSelectButton.style.backgroundColor = "#95f02d";
            mechanicModal.style.display = "none";
            //alert(`${mechanicName}님을 선택하셨습니다.`);
        });
    });

    // **3. Flatpickr Initialization**
    flatpickr("#calendar", {
        onChange: function (selectedDates, dateStr) {
            const mechanic = getSelectedMechanic();
            if (!mechanic) {
                alert("정비사를 선택해주세요.");
                return;
            }
            fetchAvailableTimes(mechanic, dateStr);
        }
        
    });

   function fetchAvailableTimes(mechanic, date) {
    $.ajax({
        url: "/reservation/available-times",
        type: "GET",
        data: { mechanic: mechanic, date: date },
        success: function (response) {
            console.log("Available times from server:", response);
            availableTimes = response.availableTimes.filter(time => !reservedTimes.includes(time)); // Filter available times
            reservedTimes = response.reservedTimes; // Update reserved times
              // 예약된 시간을 제외한 시간만 필터링하여 업데이트
            updateAvailableTimes(availableTimes, reservedTimes);
        },
        error: function () {
            alert("예약 가능한 시간 정보를 가져오는 데 실패했습니다.");
            availableTimes = [];
            reservedTimes = [];
           updateAvailableTimes([], []);
        }
    });
}

   // **5. Update Time Picker with Available Times**
function updateAvailableTimes(times, reservedTimes) {
    timePicker.empty(); // 기존 옵션 제거
    timePicker.append('<option value="" disabled selected>시간을 선택하세요</option>');

    // 예약된 시간을 제외한 배열 생성
    const availableTimes = times.filter(time => !reservedTimes.includes(time));

    // 예약 가능한 시간 리스트를 timePicker에 추가
    availableTimes.forEach(time => {
        timePicker.append(`<option value="${time}">${time}</option>`);
    });

    // 예약 가능한 시간이 있을 경우 알림
    if (availableTimes.length > 0) {
        alert("예약 가능한 시간이 업데이트되었습니다.");
    } else {
        alert("예약 가능한 시간이 없습니다.");
    }
}

    // **6. Time Picker Change Event**
    timePicker.on("change", function () {
        const selectedTime = $(this).val();
        if (selectedTime && !availableTimes.includes(selectedTime)) {
            alert("선택한 시간은 이미 예약되었습니다.");
            $(this).val(""); // 초기화
            selectedTimeDisplay.text("없음");
        } else {
            selectedTimeDisplay.text(selectedTime || "없음");
        }
    });

    // **7. Get Selected Mechanic**
    function getSelectedMechanic() {
        const mechanic = mechanicSelect.value;
        return mechanic || null;
    }
    
   
    
    

    // **8. Form Submission Validation**
   $("#reservation-form").on("submit", function (e) {
    e.preventDefault();  // 폼 기본 제출 동작을 막음

    // 입력 값 가져오기
    const customer_name = $("input[name='customer_name']").val();
    const customer_phone = $("input[name='customer_phone']").val();
    const address_postcode = $("input[name='address_postcode']").val();
    const address_road = $("input[name='address_road']").val();
    const address_bname = $("input[name='address_bname']").val();
    const address_detail = $("input[name='address_detail']").val();
    const problem = $("select[name='problem']").val();  // A/S 사유
    const mechanic = $("select[name='mechanic']").val();  // 정비사 선택
    const reservation_date = $("input[name='reservation_date']").val();
    const reservation_time = $("select[name='reservation_time']").val();

    // 유효성 검사 정규식
    const nameRegex = /^[가-힣]{2,20}$/;  // 이름 (한글 2~20자)
    const phoneRegex = /^01[0-9]\d{3,4}\d{4}$/;  // 전화번호 (예: 010-1234-5678)
    const postcodeRegex = /^\d{5}$|^\d{3}-\d{2}$/;  // 우편번호 (예: 12345 또는 123-45)
    const roadRegex = /^[가-힣0-9\s]+(로|길)\s[0-9]+(\s[0-9]+)?$/;  // 도로명 주소
    const detailRegex = /^[가-힣0-9\s\-#]+$/;  // 상세주소 (공백, 숫자, - 가능)

    // 오류 메시지를 담을 변수
    let errorMessage = "";

    // 유효성 검사
    if (!nameRegex.test(customer_name)) {
        errorMessage += "이름은 한글로 2~20자만 가능합니다.\n";
    }

    if (!phoneRegex.test(customer_phone)) {
        errorMessage += "전화번호 형식이 올바르지 않습니다. (예: 010-1234-5678)\n";
    }

    if (!postcodeRegex.test(address_postcode)) {
        errorMessage += "우편번호 형식이 올바르지 않습니다. (예: 12345 또는 123-45)\n";
    }

    if (!roadRegex.test(address_road)) {
        errorMessage += "도로명 주소 형식이 올바르지 않습니다. (예: 서울특별시 강남구 삼성로 85길)\n";
    }

    if (!detailRegex.test(address_detail)) {
        errorMessage += "상세주소 형식이 올바르지 않습니다. (예: 101호 또는 1층 102호)\n";
    }

    // 오류 메시지 출력
    if (errorMessage) {
        alert("올바른 정보를 입력해주세요:\n\n" + errorMessage);
        // 폼 초기화
        document.getElementById('reservation-form').reset();
        return false;  // 유효성 검사 실패 시 폼 제출 막기
    }

    // A/S 사유와 예약 시간 선택 여부 확인
    if (!problem) {
        alert("A/S 사유를 선택해주세요.");
        return false;
    }

    if (!reservation_time) {
        alert("예약 시간을 선택하세요.");
        return false;
    }
 

    // 예약 시간 확인
    const userConfirmed = confirm(`선택된 시간은 ${reservation_time}입니다. 예약 신청을 진행하시겠습니까?`);
    if (userConfirmed) {
        // 3. 예약이 완료되면 해당 시간을 reservedTimes 배열에 추가
        console.log("예약 확정:", reservation_time);  // 디버깅용
        reservedTimes.push(reservation_time);

        this.submit();
        
            }
      
  
    return false;  // 예약 확정하지 않으면 폼 제출 중단
});
});