   document.addEventListener("DOMContentLoaded", function () {
   const mechanicSelectButton = document.getElementById("mechanic-select-button");
    const mechanicModal = document.getElementById("mechanic-modal");
    const mechanicSelect = document.getElementById("mechanic");
    const timeList = $("#available-times");
    
    // Open modal when the button is clicked
    mechanicSelectButton.addEventListener("click", function () {
        mechanicModal.style.display = "flex";
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target === mechanicModal) {
            mechanicModal.style.display = "none";
        }
    });

    const cards = document.querySelectorAll(".card");

    // Select mechanic card and update dropdown and button text
    cards.forEach(card => {
        card.addEventListener("click", function () {
            const mechanicName = card.getAttribute("data-name");
            const optionExists = Array.from(mechanicSelect.options).some(option => option.value === mechanicName);
            
            if (optionExists) {
            mechanicSelect.value = mechanicName; // Update <select> value
        } else {
            alert("기사를 선택하는 데 문제가 발생했습니다. 다시 시도해주세요.");
            return;
        }
            
            cards.forEach(c => c.classList.remove("selected")); // Remove previous selection
            card.classList.add("selected"); // Add selection to the clicked card


        // Update the hidden <select> value
            mechanicSelect.value = mechanicName;
            
     

            document.getElementById("selected-mechanic").value = mechanicName; // Store selected mechanic in hidden input
            mechanicModal.style.display = "none"; // Close modal
            mechanicSelectButton.style.backgroundColor = "#95f02d"; // Green button color
            mechanicSelectButton.textContent = "기사 선택 완료"; // Button text update
            
            alert(`${mechanicName}님을 선택하셨습니다.`);
            console.log(mechanicName, optionExists);
        });
    });
   
   
   // Initialize Flatpickr for the calendar
     flatpickr("#calendar", {
            onChange: function(selectedDates, dateStr) {
                if (dateStr) {
                const mechanic = getSelectedMechanic();
                if (!mechanic) {
                 alert("정비사를 선택해주세요.");
            return; // Stop further execution if mechanic is not selected
        }
                    fetchAvailableTimes(mechanic, dateStr);
                }
            }
        });
 // Handle mechanic card click to update select input
    $('.card').on('click', function() {
        const mechanicName = $(this).data('name');
        $('#mechanic').val(mechanicName); // Updates the select input value
        $('#mechanic-modal').hide(); // Optionally, close the modal after selection
    });

    // Show the modal when the mechanic select button is clicked
    $('#mechanic-select-button').on('click', function() {
        $('#mechanic-modal').show();
    });



        // Fetch available times via AJAX
        function fetchAvailableTimes(mechanic, date) {
            $.ajax({
                url: "/reservation/available-times",
                type: "GET",
                data: { mechanic: mechanic, date: date  },
                success: function(times) {
                console.log("Available times from server:", times);
                    populateTimesTable(times);
                     $(".flatpickr-calendar").hide(); 
                     console.log(calendar);
                     console.log(times)
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
           
        
        
        
        
const timePicker = $("#time-picker");
    timePicker.empty(); // Clear existing options
   if (Array.isArray(times) && times.length > 0) { // Ensure times is an array and has values
    times.forEach(function(time) {
        timePicker.append(`<option value="${time}">${time}</option>`);
    });
} else {
    timePicker.append('<option value="">선택할 수 있는 시간이 없습니다</option>');
}
};

        // Populate the table with available times
        function populateTimesTable(times) {
            const timeSelect = $("#available-times");
            timeSelect.empty();

       times.forEach(function(time) {
        timeSelect.append(new Option(time, time)); // Append new options
    });

        alert("예약 가능한 시간이 업데이트되었습니다.");
    }

        // Update the selected time display when a time is picked
  $("#time-picker").on("input", function () {
        const selectedTime = $(this).val();
        $("#selected-time").text(selectedTime || "없음");
    });

    // Function to get selected mechanic
    function getSelectedMechanic() {
        // 선택된 기사 정보 (필요에 따라 수정)
        const mechanic = $("#mechanic").val(); // #mechanic은 선택된 기사 값이 들어있는 요소
        if (!mechanic) {
     
        return null; // null 반환
    }
    return mechanic; // 선택된 값 반환
    }
          // Handle form submission
    
     
    
          
    $("form").on("submit", function (e) {
        e.preventDefault();
        const selectedTime = $("#selected-time").val();
       

        if (!selectedTime) {
            alert("예약 시간을 선택하세요.");
            return false ; // Prevent form submission
        }

        const userConfirmed = confirm("선택된 시간은 " + selectedTime + "입니다. 예약 신청을 진행하시겠습니까?");
        if (!userConfirmed) {
            return false; // Prevent form submission if the user cancels
        }

      // Allow form submission if confirmed
        return true;
    });
     // Disable already selected times and show an alert if the user picks an unavailable time
   $("#time-picker").on("change", function () {
        const selectedTime = $(this).val();
       

        console.log("Selected time:", selectedTime);
        
        
        // Check if the selected time is in the available times list
    if (selectedTime && !availableTimes.includes(selectedTime)) {
        alert("선택한 시간은 이미 예약이 되어있습니다.");
        $(this).val(""); // Clear the selection if time is unavailable
        $("#selected-time").text("없음"); // Reset the selected time display
    } else {
        // Display selected time
        $("#selected-time").text(selectedTime);
    }
});
});  

    