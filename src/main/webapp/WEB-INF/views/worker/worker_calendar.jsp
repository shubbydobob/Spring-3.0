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
  <style>
        /* 캘린더 테이블의 전체 너비를 확장 */
        #calendar {
            width: 100%; /* 테이블 너비를 100%로 설정하여 화면에 맞게 확장 */
        }

        /* 각 테이블 셀(요일 및 날짜)의 너비 조정 */
        #calendar td {
            width: 14%; /* 각 셀의 너비를 14%로 설정하여 가로로 확장 */
        }

        /* 테이블의 날짜 텍스트 및 일정 내용이 가운데 오도록 설정 */
        #calendar td .date,
        #calendar td .schedule {
            text-align: center;
        }

        /* 일정 내용이 길면 줄바꿈 처리 */
        #calendar td .schedule {
            word-wrap: break-word; /* 일정 내용이 셀을 넘어가지 않도록 줄바꿈 처리 */
        }

        /* 선택된 날짜 셀 스타일 */
        #calendar td.selected {
            background-color: #f0f0f0;
        }
    </style>
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