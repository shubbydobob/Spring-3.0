<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>A/S수리 기사 일정 캘린더</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="/resources/js/worker_calendar.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<link rel="stylesheet" href="/resources/css/worker_calendar.css">
</head>
<body>
   <div id="calendar-container" class="calendar-container container mt-5">
        <h2 class="calendar-header text-center mb-4">12월 A/S 수리 기사 일정 캘린더</h2>
        <table id="calendar" class="table calendar-table text-center align-middle">
            <thead class="table-light">
                <tr>
                    <th>일</th>
                    <th>월</th>
                    <th>화</th>
                    <th>수</th>
                    <th>목</th>
                    <th>금</th>
                    <th>토</th>
                </tr>
            </thead>
            <tbody id="calendar-body">
                <!-- 동적으로 날짜가 추가됩니다 -->
            </tbody>
        </table>
    </div>
</body>
</html>