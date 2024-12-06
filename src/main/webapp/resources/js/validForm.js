function validateForm() {
    const nameField = document.querySelector('input[name="name"]');
    const phoneField = document.querySelector('input[name="phone"]');
    const postcodeField = document.querySelector('input[name="address_postcode"]');
    const roadField = document.querySelector('input[name="address_road"]');
    const bnameField = document.querySelector('input[name="address_bname"]');
    const detailField = document.querySelector('input[name="address_detail"]');

    const nameMessage = document.getElementById('name-message');
    const phoneMessage = document.getElementById('phone-message');
    const postcodeMessage = document.getElementById('postcode-message');
    const roadMessage = document.getElementById('road-message');
    const bnameMessage = document.getElementById('bname-message');
    const detailMessage = document.getElementById('detail-message');

    // 정규식 패턴
    const namePattern = /^[가-힣]{2,4}$/;
    const phonePattern = /^\d{3}-\d{4}-\d{4}$/;
    const postcodePattern = /^\d{5}$/;
    const roadPattern = /^[가-힣0-9\s]+$/;
    const bnamePattern = /^[가-힣0-9\s]+$/;
    const detailPattern = /^[가-힣0-9\s\.\-\,]+$/;

    // 유효성 검사 함수
    function validateField(inputField, pattern, messageElement) {
        if (!pattern.test(inputField.value)) {
            messageElement.textContent = '정확하게 입력해주세요.';
            messageElement.classList.remove('valid');
            messageElement.classList.add('invalid');
            return false; // Invalid input
        } else {
            messageElement.textContent = '적절합니다';
            messageElement.classList.remove('invalid');
            messageElement.classList.add('valid');
            return true; // Valid input
        }
    }

    // Validate all fields
    const isNameValid = validateField(nameField, namePattern, nameMessage);
    const isPhoneValid = validateField(phoneField, phonePattern, phoneMessage);
    const isPostcodeValid = validateField(postcodeField, postcodePattern, postcodeMessage);
    const isRoadValid = validateField(roadField, roadPattern, roadMessage);
    const isBnameValid = validateField(bnameField, bnamePattern, bnameMessage);
    const isDetailValid = validateField(detailField, detailPattern, detailMessage);

    // Return true only if all fields are valid
    return isNameValid && isPhoneValid && isPostcodeValid && isRoadValid && isBnameValid && isDetailValid;
}

// 폼 제출 시 유효성 검사
document.querySelector('form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();  // Prevent form submission if validation fails
    }
});

// 각 필드에 이벤트 리스너 추가 (입력 시 실시간으로 검사)
document.querySelector('input[name="name"]').addEventListener('input', function() {
    validateField(this, /^[가-힣]{2,4}$/, document.getElementById('name-message'));
});
document.querySelector('input[name="phone"]').addEventListener('input', function() {
    validateField(this, /^\d{3}-\d{4}-\d{4}$/, document.getElementById('phone-message'));
});
document.querySelector('input[name="address_postcode"]').addEventListener('input', function() {
    validateField(this, /^\d{5}$/, document.getElementById('postcode-message'));
});
document.querySelector('input[name="address_road"]').addEventListener('input', function() {
    validateField(this, /^[가-힣0-9\s]+$/, document.getElementById('road-message'));
});
document.querySelector('input[name="address_bname"]').addEventListener('input', function() {
    validateField(this, /^[가-힣0-9\s]+$/, document.getElementById('bname-message'));
});
document.querySelector('input[name="address_detail"]').addEventListener('input', function() {
    validateField(this, /^[가-힣0-9\s\.\-\,]+$/, document.getElementById('detail-message'));
});