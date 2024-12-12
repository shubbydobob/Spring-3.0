<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
    <meta charset="UTF-8">
    <title>수리기사 로그인</title>
    <link rel="stylesheet" href="/resources/css/mechaniclogin.css">
</head>
<body>
<div class = "container mt-5">
    <h2>수리기사 로그인</h2>
    <form action="/mechaniclogin" method="post">
        <table>
            <tr>
                <th>아이디</th>
                <td><input class="form-control" type="text" name="username" required></td>
            </tr>
            <tr>
                <th>비밀번호</th>
                <td><input class="form-control" type="password" name="password" required></td>
            </tr>
        </table>
        <button class="btn btn-primary" type="submit">로그인</button>
    </form>

    <!-- 에러 메시지 출력 -->
    <c:if test="${not empty error}">
        <p style="color: red;">${error}</p>
    </c:if>
    
    </div>
</body>
</html>
