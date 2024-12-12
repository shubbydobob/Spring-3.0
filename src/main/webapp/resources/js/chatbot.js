/**
 * 
 */
function addUserMessage1(text) {
   const chatContainer = document.querySelector('.chat-container');//채팅 컨테이너 선택

    // 사용자 메시지 추가
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user');//사용자 메시지 css 클래스 추가
    userMessage.textContent = text; //사용자 입력 텍스트 설정
    chatContainer.appendChild(userMessage);//메시지를 채팅 컨테이너에 추가

    // 봇의 응답 추가 (예시)
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');//봇 메시지 css 클래스 추가
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
// 견적 작성 폼의 데이터를 처리하고 결과를 채팅창에 표시
function submitEstimate() {
    const model = document.getElementById('model').value; // 모델명 입력값
    const usage = document.getElementById('usage').value; // 사용 기간 선택값

    if (model && usage) {//모든 필드가 입력되었는지 확인
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
// 추가 질문 입력 폼을 봇 응답으로 표시
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
//추가 질문 제출 요청을 서버에 전송
async function submitInquiry() {
    const inquiry = document.getElementById('inquiry-text').value;
    if (!inquiry) {
        alert('문의 내용을 입력해주세요;');
        return;
    }

    try {
        const response = await fetch('/api/submit/submit-inquiry', {
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
            location.reload();
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
        
         // 봇의 첫 응답: 이벤트 메시지 표시
    const eventMessage = document.createElement('div');
    eventMessage.classList.add('message', 'bot');
    eventMessage.innerHTML = `
        <p>기사님에 대한 리뷰를 작성해주세요!</p>
        <p>리뷰를 작성해주신 분들 중 추첨을 통해 소정의 기프티콘을 보내드립니다.</p>
    `;
    chatContainer.appendChild(eventMessage);

        // 봇의 응답 추가 (예시)
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot');
        botMessage.innerHTML = `
        <p>리뷰를 작성해주세요</p>
        <select id="engineer">
            <option value="" disabled selected>수리기사 이름</option>
            <option value="김자바 수리기사 / 냉난방 불량 전문">김자바 수리기사 / 냉난방 불량 전문</option>
            <option value="정코딩 수리기사 / 소음 및 진동 전문">정코딩 수리기사 / 소음 및 진동 전문</option>
            <option value="박수리 수리기사 / 누수 전문">박수리 수리기사 / 누수 전문</option>
            <option value="이냉방 수리기사 / 부품 파손 전문">이냉방 수리기사 / 부품 파손 전문</option>
            <option value="안스프링 수리기사 / 악취 발생 전문">안스프링 수리기사 / 악취 발생 전문</option>
            <option value="최파이썬 수리기사 / 기타">최파이썬 수리기사 / 기타</option>
            <option value="김난방 수리기사 / 기타">김난방 수리기사 / 기타</option>
            <option value="최코딩 수리기사 / 악취 발생 전문">최코딩 수리기사 / 악취 발생 전문</option>
            <option value="한조회 수리기사 / 소음 및 진동 전문">한조회 수리기사 / 소음 및 진동 전문</option>
            <option value="오드릴 수리기사 / 냉난방 불량 전문">오드릴 수리기사 / 냉난방 불량 전문</option>
            <option value="박커피 수리기사 / 누수 전문">박커피 수리기사 / 누수 전문</option>
            <option value="김처리 수리기사 / 부품 파손 전문">김처리 수리기사 / 부품 파손 전문</option>
            <option value="황빠름 수리기사 / 기타">황빠름 수리기사 / 기타</option>
            <option value="정리왕 수리기사 / 누수 전문">정리왕 수리기사 / 누수 전문</option>
            <option value="최고다 수리기사 / 악취 발생 전문">최고다 수리기사 / 악취 발생 전문</option>
            
        </select><br>
        <textarea id="review-text" rows="3" placeholder="리뷰를 입력해주세요."></textarea> <br>
        <button class="form-button" onclick="submitreview()">제출</button>
        <div id="review-result" class="hidden"></div>
            `;
        chatContainer.appendChild(botMessage);

        // 스크롤 자동 내려가기
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
    async function submitreview() {
    // HTML 입력 필드에서 리뷰와 수리기사 이름 가져오기
    const engineerName = document.getElementById('engineer').value;
    const review = document.getElementById('review-text').value;

    if (!review) {
        alert('리뷰를 입력해주세요.');
        return;
    }

    if (!engineerName) {
        alert('수리기사 이름을 선택해주세요.');
        return;
    }

    try {
        const response = await fetch('/api/reviews/submit-review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ engineerName, review })
        });

        const result = await response.text();

        if (response.ok) {
            alert('리뷰가 성공적으로 제출되었습니다.');
            location.reload(); // 페이지 새로고침
        } else {
            alert('리뷰 제출에 실패했습니다. 다시 시도해주세요.');
            console.error(result.message);
            console.log(engineerName, review);
        }
    } catch (error) {
        console.error('Error submitting review:', error);
        alert('서버에 문제가 발생했습니다. 나중에 다시 시도해주세요.');
    }
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
    
    async function addUserMessage5(text) {
    const chatContainer = document.querySelector('.chat-container');

    // 사용자 메시지 추가
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user');
    userMessage.textContent = text;
    chatContainer.appendChild(userMessage);

    // 서버에서 문의 내역 가져오기
    try {
        const response = await fetch('/api/submit/inquiries'); // 서버의 문의 내역 API 호출
        if (!response.ok) throw new Error('문의 내역 조회 실패');

        const inquiries = await response.json(); // 서버 응답을 JSON으로 파싱

        // 봇의 응답 추가
        inquiries.forEach(inquiry => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('message', 'bot');
            botMessage.innerHTML = `
                <p class="frame">**답변은 최대 3일이 소요될 수 있습니다.**</p>
                <p>${inquiry.inquiry}</p>
            `; // 문의 내용을 추가
            chatContainer.appendChild(botMessage);
        });

        // 스크롤 자동 내려가기
        chatContainer.scrollTop = chatContainer.scrollHeight;
    } catch (error) {
        console.error('Error fetching inquiries:', error);

        // 오류 메시지를 봇 응답으로 표시
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('message', 'bot');
        errorMessage.textContent = '문의 내역을 가져오는 데 실패했습니다.';
        chatContainer.appendChild(errorMessage);
    }
}




 async function addUserMessage6(text) {
    const chatContainer = document.querySelector('.chat-container');

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user');
    userMessage.textContent = text;
    chatContainer.appendChild(userMessage);

    // Create article selection dropdown
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');
    botMessage.innerHTML = `
        <p>기사님을 선택해주세요:</p>
        <select id="article-select">
            <option value="" disabled selected>기사님 이름을 선택하세요</option>
            <option value="김자바 수리기사 / 냉난방 불량 전문">김자바 수리기사 / 냉난방 불량 전문</option>
            <option value="정코딩 수리기사 / 소음 및 진동 전문">정코딩 수리기사 / 소음 및 진동 전문</option>
            <option value="박수리 수리기사 / 누수 전문">박수리 수리기사 / 누수 전문</option>
            <option value="이냉방 수리기사 / 부품 파손 전문">이냉방 수리기사 / 부품 파손 전문</option>
            <option value="안스프링 수리기사 / 악취 발생 전문">안스프링 수리기사 / 악취 발생 전문</option>
            <option value="최파이썬 수리기사 / 기타">최파이썬 수리기사 / 기타</option>
            <option value="김난방 수리기사 / 기타">김난방 수리기사 / 기타</option>
            <option value="최코딩 수리기사 / 악취 발생 전문">최코딩 수리기사 / 악취 발생 전문</option>
            <option value="한조회 수리기사 / 소음 및 진동 전문">한조회 수리기사 / 소음 및 진동 전문</option>
            <option value="오드릴 수리기사 / 냉난방 불량 전문">오드릴 수리기사 / 냉난방 불량 전문</option>
            <option value="박커피 수리기사 / 누수 전문">박커피 수리기사 / 누수 전문</option>
            <option value="김처리 수리기사 / 부품 파손 전문">김처리 수리기사 / 부품 파손 전문</option>
            <option value="황빠름 수리기사 / 기타">황빠름 수리기사 / 기타</option>
            <option value="정리왕 수리기사 / 누수 전문">정리왕 수리기사 / 누수 전문</option>
            <option value="최고다 수리기사 / 악취 발생 전문">최고다 수리기사 / 악취 발생 전문</option>
        </select>
        <button onclick="fetchReviews()">리뷰 보기</button>
    `;
    chatContainer.appendChild(botMessage);

    // Scroll to bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Function to fetch reviews for the selected article
async function fetchReviews() {
    const selectedArticle = document.getElementById('article-select').value;

    if (!selectedArticle) {
        alert('기사님을 선택해주세요.');
        return;
    }

    const chatContainer = document.querySelector('.chat-container');

    try {
        // Fetch reviews from the server
        const response = await fetch(`/api/reviews/reviews?engineer_name=${encodeURIComponent(selectedArticle)}`);
        if (!response.ok) throw new Error('리뷰를 가져오는 데 실패했습니다.');

        const reviews = await response.json();

        // Display reviews
        if (reviews.length > 0) {
            reviews.forEach(review => {
                const reviewMessage = document.createElement('div');
                reviewMessage.classList.add('message', 'bot');
                reviewMessage.innerHTML = `
                    <p><strong>${selectedArticle} 기사님에 대한 리뷰:</strong></p>
                    <p>${review.review}</p>
                `;
                chatContainer.appendChild(reviewMessage);
            });
        } else {
            const noReviewsMessage = document.createElement('div');
            noReviewsMessage.classList.add('message', 'bot');
            noReviewsMessage.textContent = `${selectedArticle} 기사님에 대한 리뷰가 없습니다.`;
            chatContainer.appendChild(noReviewsMessage);
        }
    } catch (error) {
        console.error('Error fetching reviews:', error);

        // Display error message
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('message', 'bot');
        errorMessage.textContent = '리뷰를 가져오는 데 실패했습니다. 다시 시도해주세요.';
        chatContainer.appendChild(errorMessage);
    }

    // Scroll to bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
}




