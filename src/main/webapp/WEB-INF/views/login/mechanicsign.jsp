<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<html>
<head>
<meta charset="UTF-8">
<title>수리기사 사원등록</title>
<link rel="stylesheet" href="/resources/css/mechanicsign.css">
</head>
<body>
<div class= container>
<h2 class="text-center mt-4">사원 로그인</h2>
<form action="/login/mechanicsign" method="post">
    <table class="table table-bordered mt-4">
        <tbody>
      
            <tr>
                <th>사원 번호</th>
                <td>
                    <input type="text" class="form-control" id="name" name="name" placeholder="사원번호를 입력하세요" required>
                </td>
            </tr>
            <tr>
                <th>비밀 번호</th>
                <td>
                    <input type="password" class="form-control" id="phone_number" name="phoneNumber" placeholder="비밀번호를 입력하세요" required>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="text-center mt-3">
        <button type="submit" class="btn btn-primary">사원 로그인</button>
    </div>
</form>
</div>
</body>
</html>
