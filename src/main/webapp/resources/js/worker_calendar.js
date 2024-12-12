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

            scheduleDiv.appendChild(newSchedule);

            // 로컬 저장소에 데이터 저장
            saveSchedule(date, inputValue);

            document.body.removeChild(inputBox); // 입력 박스 제거
        }
    });

    // 취소 버튼 클릭 이벤트
    document.getElementById('cancel-input').addEventListener('click', function () {
        document.body.removeChild(inputBox); // 입력 박스 제거
    });
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

// 일정에 삭제 버튼 추가
function addScheduleElement(scheduleDiv, date, scheduleText) {
    // 일정 내용은 입력값 그대로 표시
    scheduleDiv.textContent = scheduleText;
    scheduleDiv.setAttribute('data-schedule', scheduleText);
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

                // 삭제 버튼 포함한 일정 추가
                addScheduleElement(newSchedule, date, scheduleText);
                scheduleDiv.appendChild(newSchedule);
            });
        }
    }
}

// 로컬 저장소에 데이터 저장
function saveSchedule(date, schedule) {
    let schedules = JSON.parse(localStorage.getItem('schedules')) || {};
    if (!schedules[date]) {
        schedules[date] = [];
    }
    schedules[date].push(schedule);
    localStorage.setItem('schedules', JSON.stringify(schedules));
}
