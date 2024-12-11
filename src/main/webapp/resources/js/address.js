 function initialize() {
    eventHandler();
}

function eventHandler() {
    addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('address_search')) {
            callPostCodeAPI(target, event);
        }
    })
}
function callPostCodeAPI(target, event) {
    let targetParent = target.parentElement;
    let address_postcode = targetParent.querySelector('#address_postcode');
    let address_road = targetParent.querySelector('#address_road');
    let address_bname = targetParent.querySelector('#address_bname');

    new daum.Postcode({
        oncomplete: function (data) {
            let roadAddr = data.roadAddress;
            let extraRoadAddr = '';

            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== '' && data.apartment === 'Y') {
                extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (extraRoadAddr !== '') {
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            address_postcode.value = data.zonecode;
            address_road.value = roadAddr;

            // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
            if (roadAddr !== '') {
                address_bname.value = extraRoadAddr;
            } else {
                address_bname.value = '';
            }
        }
    }).open();
}

initialize();
 