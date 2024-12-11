
function addUserMessage1(text) {
    const chatContainer = document.querySelector('.chat-container');

    // 사용자 메시지 추가
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user');
    userMessage.textContent = text;
    chatContainer.appendChild(userMessage);

    // 봇의 응답 추가 (예시)
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');
    botMessage.innerHTML = `
    <a href = "/reservation/reservation"> 예약 페이지로 이동 </a>
    `;
    chatContainer.appendChild(botMessage);

    // 스크롤 자동 내려가기
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function addUserMessage2(text) {
    const chatContainer = document.querySelector('.chat-container');

    // 사용자 메시지 추가
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user');
    userMessage.textContent = text;
    chatContainer.appendChild(userMessage);

    // 봇의 응답 추가 (예시)
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');

    botMessage.innerHTML = `
        <div class="estimation">
            <h3>견적 작성</h3>
            <input type="text" id="name" placeholder="성함"><br>
            <input type="number" id="phone" placeholder="휴대폰번호"><br>
            <select id="model">
                <option value="" disabled selected>제품 회사</option>
                <option value="삼성전자">삼성전자</option>
                <option value="LG">LG</option>
                <option value="휘센">휘센</option>
                <option value="귀뚜라미">귀뚜라미</option>
                <option value="기타">기타</option>
            </select><br>
            <input type="text" id="modelName" placeholder="모델명"><br>
            <select id="usage">
                <option value="" disabled selected>사용 기간</option>
                <option value="1년 이하">1년 이하</option>
                <option value="2년 이하">2년 이하</option>
                <option value="3년 이하">3년 이하</option>
                <option value="4년 이상">4년 이상</option>
            </select><br>
            <button class="form-button" onclick="submitEstimate()">제출</button>
            <div id="estimate-result" class="hidden"></div>
        </div>
    `;
    chatContainer.appendChild(botMessage);

    // 스크롤 자동 내려가기
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function submitEstimate() {
    const model = document.getElementById('model').value; // 모델명 입력값
    const usage = document.getElementById('usage').value; // 사용 기간 선택값

    if (model && usage) {
        const chatContainer = document.querySelector('.chat-container');

        // 사용자 입력 내용을 채팅창에 추가
        const userResponse = document.createElement('div');
        userResponse.classList.add('message', 'user');
        userResponse.textContent = `모델명: ${model}, 사용 기간: ${usage}`;
        chatContainer.appendChild(userResponse);

        // 봇 응답: 견적 완료 메시지
        const botResponse = document.createElement('div');
        botResponse.classList.add('message', 'bot');
        botResponse.innerHTML = `
            <p>견적이 성공적으로 제출되었습니다.</p>
            <p>더 질문이 있으십니까?</p>
            <button onclick="askMoreQuestions()" class="answering">예</button>
            <button onclick="resetForm()" class="answering">아니오</button>
        `;
        chatContainer.appendChild(botResponse);

        // 스크롤 자동 내려가기
        chatContainer.scrollTop = chatContainer.scrollHeight;
    } else {
        // 필드가 비어 있을 경우 경고 메시지
        alert('모든 필드를 입력해주세요;');
    }
}

function askMoreQuestions() {
    const chatContainer = document.querySelector('.chat-container');

    // 봇 응답: 더 질문을 입력할 수 있는 폼 추가
    const botResponse = document.createElement('div');
    botResponse.classList.add('message', 'bot');
    botResponse.innerHTML = `
        <p>문의 내용</p>
        <textarea id="inquiry-text" rows="3"></textarea> <br>
        <button onclick="submitInquiry()" class="conductsubmit">문의 제출</button>
    `;
    chatContainer.appendChild(botResponse);

    // 스크롤 자동 내려가기
    chatContainer.scrollTop = chatContainer.scrollHeight;
} 

async function submitInquiry() {
    const inquiry = document.getElementById('inquiry-text').value;
    if (!inquiry) {
        alert('문의 내용을 입력해주세요;');
        return;
    }

    try {
        const response = await fetch('/api/submit-inquiry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({ inquiry })
        });
        console.log(response);
        const result = await response.text();

        if (response.ok) {
            alert('문의가 성공적으로 제출되었습니다');
        } else {
            alert('문의 제출에 실패했습니다. 다시 시도해주세요;');
            console.error(result.message);
        }
    } catch (error) {
        console.error('Error submitting inquiry:', error);
        alert('서버에 문제가 발생했습니다. 나중에 다시 시도해주세요;');
    }
}

function resetForm() {
    const chatContainer = document.querySelector('.chat-container');

    // 봇 응답: "감사합니다" 메시지 추가
    const botResponse = document.createElement('div');
    botResponse.classList.add('message', 'bot');
    botResponse.textContent = '감사합니다. 채팅이 종료되었습니다;';
    chatContainer.appendChild(botResponse);

    // 스크롤 자동 내려가기
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function addUserMessage3(text) {
        const chatContainer = document.querySelector('.chat-container');

        // 사용자 메시지 추가
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user');
        userMessage.textContent = text;
        chatContainer.appendChild(userMessage);

        // 봇의 응답 추가 (예시)
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot');
        botMessage.innerHTML = `
        <p>리뷰를 작성해주세요</p>
        <select id="engineer">
            <option value="" disabled selected>수리기사 이름</option>
            <option value="1년 이하">김자바</option>
            <option value="2년 이하">정자바</option>
            <option value="3년 이하">누구</option>
            <option value="4년 이상">누구누구</option>
            <option value="4년 이상">누구...</option>
        </select><br>
        <textarea id="review-text" rows="3"></textarea> <br>
        <button class="form-button" onclick="submitreview()">제출</button>
        <div id="review-result" class="hidden"></div>
            `;
        chatContainer.appendChild(botMessage);

        // 스크롤 자동 내려가기
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    function submitreview(){
        

    }

    function addUserMessage4(text) {
        const chatContainer = document.querySelector('.chat-container');

        // 사용자 메시지 추가
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user');
        userMessage.textContent = text;
        chatContainer.appendChild(userMessage);

        // 봇의 응답 추가 (예시)
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot');
        botMessage.textContent = '상담사 연결을 시작합니다.';
        chatContainer.appendChild(botMessage);

        // 스크롤 자동 내려가기
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }