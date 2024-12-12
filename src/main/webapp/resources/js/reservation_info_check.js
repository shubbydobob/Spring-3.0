document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservationForm');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // 입력 값 가져오기
      const customer_name = document.getElementById('customer_name').value;
      const customer_phone = document.getElementById('customer_phone').value;
  
      if (!customer_name || !customer_phone) {
        alert('이름과 전화번호를 모두 입력해주세요.');
        return;
      }
  
      // 새 창에서 예약 이력 표시
      const newWindow = window.open('', '_blank', 'width=600,height=700');
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>예약 이력</title>
          <style>
            body, html {
              background-color: #EBECF0;
              font-family: 'Montserrat', sans-serif;
              margin: 0;
              padding: 20px;
            }
            .form-group {
              background: #FFF;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
              margin-bottom: 20px;
            }
            label {
              font-weight: bold;
              display: block;
              margin-bottom: 5px;
            }
            div {
              margin-bottom: 15px;
            }
          </style>
        </head>
        <body>
          <div class="form-group">
            <h3>예약 이력</h3>

            <div>
              <label>예약 번호</label>
              <div>123456</div>
            </div>
            <div>
              <label>이름</label>
              <div>${customer_name}</div>
            </div>
            <div>
              <label>전화번호</label>
              <div>${customer_phone}</div>
            </div>
            <div>
              <label>우편번호</label>
              <div>${address_postcode}</div>
            </div>
            <div>
              <label>도로명 주소</label>
              <div>${address_road}</div>
            </div>
            <div>
              <label>동주소</label>
              <div>${address_bname}</div>
            </div>
            <div>
              <label>상세주소</label>
              <div>${address_detail}</div>
            </div>
            <div>
              <label>A/S 사유</label>
              <div>${problem}</div>
            </div>
            <div>
              <label>A/S 배정된 기사</label>
              <div>${mechanic}</div>
            </div>
            <div>
              <label>방문 예정 날짜</label>
              <div>${reservation_time}</div>
            </div>
            <div>
              <label>방문 예정 시간</label>
              <div>${reservation_time}</div>
            </div>
            
          </div>
        </body>
        </html>
      `);
    });
  });
  