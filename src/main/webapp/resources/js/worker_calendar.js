// DOMContentLoaded 이벤트로 코드 실행
document.addEventListener('DOMContentLoaded', function () {
    const calendarBody = document.getElementById('calendar-body');

    if (!calendarBody) {
        console.error('calendar-body 요소를 찾을 수 없습니다.');
        return;
    }

    // 현재 날짜로 달력 생성
    const now = new Date();
    createCalendar(now.getFullYear(), now.getMonth());

    // 로컬 저장소에서 데이터 불러오기
    loadSchedules();

    // 달력 클릭 이벤트 추가
    document.querySelector('#calendar').addEventListener('click', handleCalendarClick);
});

// 달력 생성 함수
function createCalendar(year, month) {
    const calendarBody = document.getElementById('calendar-body');
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const firstDayOfWeek = firstDay.getDay();
    let calendarHTML = '';
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
        calendarHTML += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfWeek || dayCounter > daysInMonth) {
                calendarHTML += '<td></td>';
            } else {
                // 날짜와 일정을 표시할 컨테이너 포함
                calendarHTML += `
                    <td class="available" data-date="${year}-${month + 1}-${dayCounter}">
                        <div class="date">${dayCounter}</div>
                        <div class="schedule"></div>
                    </td>`;
                dayCounter++;
            }
        }
        calendarHTML += '</tr>';
        if (dayCounter > daysInMonth) break;
    }

    calendarBody.innerHTML = calendarHTML;
}

// 달력 클릭 이벤트 핸들러
function handleCalendarClick(event) {
    if (event.target.tagName === 'TD' && event.target.classList.contains('available')) {
        const cell = event.target;
        const date = cell.getAttribute('data-date');

        // 입력창 열기
        openInputBox(cell, date);
    } else if (event.target.tagName === 'DIV' && event.target.classList.contains('schedule-item')) {
        const cell = event.target.closest('td');
        const date = cell.getAttribute('data-date');
        const scheduleText = event.target.getAttribute('data-schedule');

        // 삭제 확인 알림 띄우기
        if (confirm('이 일정을 삭제하시겠습니까?')) {
            deleteSchedule(date, scheduleText, event.target);
        }
    }
}

// 입력창 생성 함수
function openInputBox(cell, date) {
    // 이미 입력창이 존재하는지 확인
    const existingInputBox = document.getElementById('input-box');
    if (existingInputBox) {
        existingInputBox.remove();
    }

    // 입력 박스 생성
    const inputBox = document.createElement('div');
    inputBox.id = 'input-box';
    inputBox.innerHTML = `
        <div>
            <label for="input-value">일정 입력:</label>
            <input type="text" id="input-value" placeholder="${date}">
            <br>
            <label for="schedule-type">일정 종류:</label>
            <select id="schedule-type">
                <option value="repair" style="background-color:#4CAF50;">냉난방 불량</option>
                <option value="inspection" style="background-color:#2196F3;">소음 및 진동</option>
                <option value="leak" style="background-color:#FF9800;">누수</option>
                <option value="breakage" style="background-color:#9C27B0;">부품 파손</option>
                <option value="stink" style="background-color:#FFC107;">악취 발생</option>
                <option value="etc" style="background-color:#03A9F4;">기타</option>
            </select>
            <br>
            <button id="submit-input">확인</button>
            <button id="cancel-input">취소</button>
        </div>
    `;
    inputBox.style.position = 'absolute';
    inputBox.style.top = `${cell.getBoundingClientRect().top + window.scrollY + 30}px`;
    inputBox.style.left = `${cell.getBoundingClientRect().left + window.scrollX}px`;
    inputBox.style.backgroundColor = '#fff';
    inputBox.style.border = '1px solid #ccc';
    inputBox.style.padding = '10px';
    inputBox.style.zIndex = '1000';

    document.body.appendChild(inputBox);

    // 확인 버튼 클릭 이벤트
    document.getElementById('submit-input').addEventListener('click', function () {
        const inputValue = document.getElementById('input-value').value;
        const selectedType = document.getElementById('schedule-type').value; // 선택된 일정 종류 가져오기
        const selectedColor = getColorForScheduleType(selectedType); // 일정 종류에 맞는 색상 가져오기

        if (inputValue) {
            const scheduleDiv = cell.querySelector('.schedule');

            if (!scheduleDiv) {
                console.error('scheduleDiv를 찾을 수 없습니다.');
                return;
            }

            const newSchedule = document.createElement('div');
            newSchedule.textContent = inputValue; // 입력값 그대로 표시
            newSchedule.classList.add('schedule-item');
            newSchedule.setAttribute('data-schedule', inputValue); // 실제 데이터를 속성으로 저장
            newSchedule.style.backgroundColor = selectedColor; // 일정에 선택된 색상 적용

            scheduleDiv.appendChild(newSchedule);

            // 로컬 저장소에 데이터 저장
            saveSchedule(date, inputValue, selectedType);

            document.body.removeChild(inputBox); // 입력 박스 제거
        }
    });

    // 취소 버튼 클릭 이벤트
    document.getElementById('cancel-input').addEventListener('click', function () {
        document.body.removeChild(inputBox); // 입력 박스 제거
    });
}

// 일정 종류에 맞는 색상을 반환하는 함수
function getColorForScheduleType(scheduleType) {
    switch (scheduleType) {
        case 'repair':
            return '#4CAF50'; // 
        case 'inspection':
            return '#2196F3'; // 
        case 'leak':
            return '#FF9800'; // 
        case 'breakage':
            return '#9C27B0'; // 
        case 'stink':
            return '#FFC107'; // 
        case 'etc':
            return '#03A9F4'; // 
        default:
            return '#FFFFFF'; // 기본 색상
    }
}

// 일정 삭제 함수
function deleteSchedule(date, scheduleText, scheduleDiv) {
    // 로컬 저장소에서 데이터 가져오기
    let schedules = JSON.parse(localStorage.getItem('schedules')) || {};

    // 해당 날짜의 일정 배열에서 삭제
    if (schedules[date]) {
        schedules[date] = schedules[date].filter(schedule => schedule !== scheduleText);

        // 로컬 저장소 업데이트
        if (schedules[date].length === 0) {
            delete schedules[date]; // 날짜에 일정이 없으면 해당 날짜 삭제
        }
        localStorage.setItem('schedules', JSON.stringify(schedules));
    }

    // 화면에서 일정 제거
    scheduleDiv.remove();
}

// 로컬 저장소에서 데이터 불러오기
function loadSchedules() {
    const schedules = JSON.parse(localStorage.getItem('schedules')) || {};
    for (const [date, scheduleList] of Object.entries(schedules)) {
        const cell = document.querySelector(`td[data-date="${date}"]`);
        if (cell) {
            const scheduleDiv = cell.querySelector('.schedule');
            scheduleList.forEach(scheduleText => {
                const newSchedule = document.createElement('div');
                newSchedule.classList.add('schedule-item');

                // 일정 색상 적용 (분야에 따른 색상 지정)
                if (scheduleText.includes('냉난방 불량')) {
                    newSchedule.style.backgroundColor = '#4CAF50'; // 초록색
                } else if (scheduleText.includes('소음 및 진동')) {
                    newSchedule.style.backgroundColor = '#2196F3'; // 파란색
                } else if (scheduleText.includes('누수')) {
                    newSchedule.style.backgroundColor = '#FF9800'; // 주황색
                } else if (scheduleText.includes('부품 파손')) {
                    newSchedule.style.backgroundColor = '#9C27B0'; // 보라색
                } else if (scheduleText.includes('악취 발생')) {
                    newSchedule.style.backgroundColor = '#FFC107'; // 노란색
                } else if (scheduleText.includes('기타')) {
                    newSchedule.style.backgroundColor = '#03A9F4'; // 하늘색
                }
                 else {
                    newSchedule.style.backgroundColor = '#FFFFFF'; // 흰색
                }

                // addScheduleElement 함수 정의 위치
                addScheduleElement(newSchedule, date, scheduleText); // 여기서 오류가 발생
                scheduleDiv.appendChild(newSchedule);
            });
        }
    }
}

// addScheduleElement 함수 정의
function addScheduleElement(scheduleDiv, date, scheduleText) {
    scheduleDiv.textContent = scheduleText;
    scheduleDiv.setAttribute('data-schedule', scheduleText);
}

// 로컬 저장소에 데이터 저장
function saveSchedule(date, schedule, type) {
    let schedules = JSON.parse(localStorage.getItem('schedules')) || {};
    if (!schedules[date]) {
        schedules[date] = [];
    }
    schedules[date].push(schedule);
    localStorage.setItem('schedules', JSON.stringify(schedules));
}