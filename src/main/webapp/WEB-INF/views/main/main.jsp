<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/css/main.css">
 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> <!-- jQuery CDN -->
<script src="/resources/js/main.js"></script>
<script>
        /* Demo purposes only */
        $(".hover").mouseleave(
        function () {
        $(this).removeClass("hover");
        }
        );
     
        function openAdminAccess() {
            document.getElementById("adminModal").style.display = "flex";
        }

        function validateAdmin() {
            const adminPassword = document.getElementById("adminPassword").value;
            const correctPassword = "0000000000"; // 관리자 번호
            if (adminPassword === correctPassword) {
                alert("관리자 인증 완료! 페이지로 이동합니다.");
                window.location.href = "/main/main_worker";
            } else {
                alert("잘못된 관리자 번호입니다.");
            }
            document.getElementById("adminPassword").value = ""; // 입력 값 초기화
            document.getElementById("adminModal").style.display = "none"; // 모달 닫기
        }

        function closeModal() {
            document.getElementById("adminModal").style.display = "none";
        }
    </script>
    <style>
    /* 모달 스타일 */
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
    }
    .modal-content {
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        width: 300px;
        text-align: center;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
    .modal-content input {
        width: 80%;
        padding: 10px;
        margin-top: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .modal-content button {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: white;
    }
    .modal-content button:hover {
        background-color: #0056b3;
    }
</style>
</head>
<body>
   <div>
    <h1>Real Time-Book</h1>
    <h2>냉/난방 AS 예약</h2>
    <h3>예약, 실시간을 더하다</h3>
    </div>
    <!-- 예약자용 카드 -->
    <figure class="snip1563">
        <img src="/resources/img/p3.jpg" alt="Sample Image">
        <figcaption>
          <h3>예약자용</h3>
          <p>"Real Time-Book, this is the reservation page for Re-Book. If you are a customer, please visit using this button."</p>
        </figcaption>
        <a href="/main/main_guest"></a>
    </figure>

    <!-- 관리자용 카드 -->
    <figure class="snip1563">
        <img src="/resources/img/p4.jpg" alt="Sample Image">
        <figcaption>
          <h3>관리자용</h3>
          <p>"Real Time-Book, this is the administrator's page for Re-Book. If you are an administrator, please visit using this button."</p>
        </figcaption>
      
         <a href="#" onclick="openAdminAccess(); return false;"></a>
    </figure>
       <!-- 모달 창 -->
    <div id="adminModal" class="modal" display="none">
        <div class="modal-content">
            <h3>관리자 인증</h3>
            <input type="password" id="adminPassword" placeholder="관리자 번호 입력">
            <br>
            <button onclick="validateAdmin()">확인</button>
            <button onclick="closeModal()">취소</button>
        </div>
    </div>
      
</body>
</html>