<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/css/main.css">
<script src="/resources/js/main.js"></script>
<script>
        /* Demo purposes only */
        $(".hover").mouseleave(
        function () {
        $(this).removeClass("hover");
        }
        );
    </script>
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
        <a href="/main/main_worker"></a>
    </figure>
      
</body>
</html>