document.addEventListener("DOMContentLoaded", function () {
    const mechanicSelectButton = document.getElementById("mechanic-select-button");
    const mechanicModal = document.getElementById("mechanic-modal");
    const mechanicSelect = document.getElementById("mechanic");
    const selectedMechanicInput = document.getElementById("selected-mechanic");
    const timePicker = $("#time-picker");
    const selectedTimeDisplay = $("#selected-time");
    const problemSelect = document.getElementById("problem");

    let availableTimes = []; // 전역 변수로 예약 가능한 시간 저장
    let reservedTimes = [];

    // 기사와 A/S 사유 매핑
    const mechanicData = [
        { mechanic: "김자바", problem: "냉난방 불량" },
        { mechanic: "오드릴", problem: "냉난방 불량" },
        { mechanic: "정코딩", problem: "소음 및 진동" },
        { mechanic: "한조희", problem: "소음 및 진동" },
        { mechanic: "박수리", problem: "누수" },
        { mechanic: "정리왕", problem: "누수" },
        { mechanic: "박커피", problem: "누수" },
        { mechanic: "이냉방", problem: "부품 파손" },
        { mechanic: "김처리", problem: "부품 파손" },
        { mechanic: "안스프링", problem: "악취 발생" },
        { mechanic: "최코딩", problem: "악취 발생" },
        { mechanic: "최고다", problem: "악취 발생" },
        { mechanic: "황빠름", problem: "기타" },
        { mechanic: "최파이썬", problem: "기타" },
        { mechanic: "김난방", problem: "기타" },
    ];

    // **1. Modal Control**
    mechanicSelectButton.addEventListener("click", function () {
        const problem = problemSelect.value;
        if (!problem) {
            alert("A/S 사유를 선택해주세요.");
            return;
        }
        // A/S 사유에 맞는 기사 필터링
        filterMechanicsByProblem(problem);
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
            mechanicSelectButton.textContent = `${mechanicName}기사님 선택 완료`;
            mechanicSelectButton.style.backgroundColor = "#95f02d";
            mechanicModal.style.display = "none";
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
                availableTimes = response.availableTimes.filter(time => !reservedTimes.includes(time));
                reservedTimes = response.reservedTimes;
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

    // **4. Update Time Picker with Available Times**
    function updateAvailableTimes(times, reservedTimes) {
        timePicker.empty();
        timePicker.append('<option value="" disabled selected>시간을 선택하세요</option>');

        const availableTimes = times.filter(time => !reservedTimes.includes(time));

        availableTimes.forEach(time => {
            timePicker.append(`<option value="${time}">${time}</option>`);
        });

        if (availableTimes.length > 0) {
            alert("예약 가능한 시간이 업데이트되었습니다.");
        } else {
            alert("예약 가능한 시간이 없습니다.");
        }
    }

    // **5. Time Picker Change Event**
    timePicker.on("change", function () {
        const selectedTime = $(this).val();
        if (selectedTime && !availableTimes.includes(selectedTime)) {
            alert("선택한 시간은 이미 예약되었습니다.");
            $(this).val("");
            selectedTimeDisplay.text("없음");
        } else {
            selectedTimeDisplay.text(selectedTime || "없음");
        }
    });

    // **6. Filter Mechanics by Problem**
    function filterMechanicsByProblem(problem) {
        document.querySelectorAll(".card").forEach(card => {
            const mechanicName = card.getAttribute("data-name");
            const isVisible = mechanicData.some(data => data.mechanic === mechanicName && data.problem === problem);
            card.style.display = isVisible ? "block" : "none";
        });
    }

    // **7. Get Selected Mechanic**
    function getSelectedMechanic() {
        return mechanicSelect.value || null;
    }

    // **8. Form Submission Validation**
    $("#reservation-form").on("submit", function (e) {
        e.preventDefault();

        const customer_name = $("input[name='customer_name']").val();
        const customer_phone = $("input[name='customer_phone']").val();
        const address_postcode = $("input[name='address_postcode']").val();
        const address_road = $("input[name='address_road']").val();
        const address_bname = $("input[name='address_bname']").val();
        const address_detail = $("input[name='address_detail']").val();
        const problem = $("select[name='problem']").val();
        const mechanic = $("select[name='mechanic']").val();
        const reservation_date = $("input[name='reservation_date']").val();
        const reservation_time = $("select[name='reservation_time']").val();

        const nameRegex = /^[가-힣]{2,20}$/;
        const phoneRegex = /^01[0-9]\d{3,4}\d{4}$/;
        const postcodeRegex = /^\d{5}$|^\d{3}-\d{2}$/;
        const roadRegex = /^[가-힣0-9\s]+(로|길)\s[0-9]+(\s[0-9]+)?$/;
        const detailRegex = /^[가-힣0-9\s\-#]+$/;

        let errorMessage = "";

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

        if (errorMessage) {
            alert("올바른 정보를 입력해주세요:\n\n" + errorMessage);
            return false;
        }

        if (!problem) {
            alert("A/S 사유를 선택해주세요.");
            return false;
        }

        if (!reservation_time) {
            alert("예약 시간을 선택하세요.");
            return false;
        }

        const userConfirmed = confirm(`선택된 시간은 ${reservation_time}입니다. 예약 신청을 진행하시겠습니까?`);
        if (userConfirmed) {
            reservedTimes.push(reservation_time);
            this.submit();
        }

        return false;
    });
});
