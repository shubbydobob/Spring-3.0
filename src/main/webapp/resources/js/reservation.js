   document.addEventListener("DOMContentLoaded", function () {
   // Initialize Flatpickr for the calendar
        flatpickr("#calendar", {
            onChange: function(selectedDates, dateStr) {
                if (dateStr) {
                const mechanic = getSelectedMechanic();
                if (!mechanic) {
            alert("먼저 수리기사를 선택해주세요.");
            return; // Stop further execution if mechanic is not selected
        }
                    fetchAvailableTimes(mechanic, dateStr);
                }
            }
        });

        // Fetch available times via AJAX
        function fetchAvailableTimes(mechanic, date) {
            $.ajax({
                url: "/reservation/available-times",
                type: "GET",
                data: { mechanic: mechanic, date: date  },
                success: function(times) {
                    populateTimesTable(times);
                },
                error: function() {
                    alert("시간 정보를 불러오는 데 실패했습니다.");
                }
            });
        }

        // Populate the table with available times
        function populateTimesTable(times) {
            const tableBody = $("#time-table tbody");
            tableBody.empty();

            times.forEach(time => {
                const row = `<tr>
                    <td><input type="text" value="${time}" redaonly></td>
                    <td><button type="button" onclick="selectTime('${time}')">선택</button></td>
                </tr>`;
                tableBody.append(row);
            });

            $("#time-selection").show();
        }

        // Select a time
      
       window.selectTime = function selectTime(time) {
            $("#selected-time").val(time);
           
        }
        function getSelectedMechanic() {
    // This should return the mechanicId based on the selection or your logic
    const mechanic = document.getElementById("mechanic").value; // mechanic-select is the id of the select element
    return mechanic; // mechanicId is a string
console.log("Selected mechanic: " + mechanic);
}
          // Handle form submission
          
    $("form").on("submit", function (event) {
        const selectedTime = $("#selected-time").val();

        if (!selectedTime) {
            alert("예약 시간을 선택하세요.");
            return false; // Prevent form submission
        }

        const userConfirmed = confirm("선택된 시간은 " + selectedTime + "입니다. 예약 신청을 진행하시겠습니까?");
        if (!userConfirmed) {
            return false; // Prevent form submission if the user cancels
        }

        // Allow form submission if confirmed
        return true;
    });
    });
    