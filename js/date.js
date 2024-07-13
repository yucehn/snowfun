$(document).ready(function () {
    let currentDate = new Date();
    let selectedDate = formatDate(currentDate);
    let todayDate = formatDate(currentDate);

    function renderCalendar(monthOffset, calendarId) {
      let date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + monthOffset,
        1
      );
      let year = date.getFullYear();
      let month = date.getMonth();
      let monthName = date.toLocaleString("default", { month: "long" });

      let firstDay = new Date(year, month, 1).getDay();
      let lastDate = new Date(year, month + 1, 0).getDate();

      let calendar = `<table>
        <thead>
            <tr>
                <th class="data-title" colspan="7"> ${year}年 ${monthName}</th>
            </tr>
            <tr class="date-weekName">
                <th>日</th>
                <th>一</th>
                <th>二</th>
                <th>三</th>
                <th>四</th>
                <th>五</th>
                <th>六</th>
            </tr>
        </thead>
        <tbody>`;

      let day = 1;
      for (let i = 0; i < 6; i++) {
        calendar += "<tr>";
        for (let j = 0; j < 7; j++) {
          if ((i === 0 && j < firstDay) || day > lastDate) {
            calendar += "<td></td>";
          } else {
            let fullDate = `${year}-${String(month + 1).padStart(
              2,
              "0"
            )}-${String(day).padStart(2, "0")}`;
            let todayClass = fullDate === todayDate ? "today" : "";
            calendar += `<td data-date="${fullDate}" class="${todayClass}">${day}</td>`;
            day++;
          }
        }
        calendar += "</tr>";
      }
      calendar += "</tbody></table>";

      $(`#${calendarId}`).html(calendar);
    }

    function updateCalendars() {
      renderCalendar(0, "calendar-left");
      renderCalendar(1, "calendar-right");
    }

    $("#prev-month").click(function () {
      currentDate.setMonth(currentDate.getMonth() - 1);
      updateCalendars();
    });

    $("#next-month").click(function () {
      currentDate.setMonth(currentDate.getMonth() + 1);
      updateCalendars();
    });

    $(".calendar-container").on("click", "td[data-date]", function () {
      $("td").removeClass("active start-date end-date in-range");
      $(this).addClass("active");
      selectedDate = $(this).data("date");
    });

    $("#highlight-range").click(function () {
      if (selectedDate) {
        $(".selected").removeClass("selected");
        $("#highlight-range").addClass("selected");
        highlightRange();
      }
    });

    $("#week-range").click(function () {
      if (selectedDate) {
        $(".selected").removeClass("selected");
        $("#week-range").addClass("selected");
        weekRange();
      }
    });

    $("#date-submit").click(function () {
      if (selectedDate) {
        let date = new Date(selectedDate);
        console.log("selectedDate", date);
      }
    });

    $('#clear-button').click(function() {
        clearHighlights();
    });
    $('#single-date').click(function() {
        if (selectedDate) {
            highlightSingleDate();
            $("#single-date").addClass("selected");
            $("#highlight-range").removeClass("selected");
            $("#week-range").removeClass("selected");
        }
    });

    function highlightSingleDate() {
        $('td').removeClass('start-date end-date in-range');
        $(`td[data-date="${selectedDate}"]`).addClass('active');
    }

    function clearHighlights() {
        $('td').removeClass('active start-date end-date in-range');
        selectedDate = '';
    }

    function highlightRange() {
      $("td").removeClass("start-date end-date in-range");
      let date = new Date(selectedDate);
      let startDate = new Date(date);
      let endDate = new Date(date);

      startDate.setDate(date.getDate() - 1);
      endDate.setDate(date.getDate() + 1);

      $(`td[data-date="${formatDate(startDate)}"]`).addClass("start-date");
      $(`td[data-date="${selectedDate}"]`).addClass("in-range");
      $(`td[data-date="${formatDate(endDate)}"]`).addClass("end-date");
    }

    function weekRange() {
      $("td").removeClass("active start-date end-date in-range");
      let date = new Date(selectedDate);
      let startDate = new Date(date);
      let endDate = new Date(date);

      startDate.setDate(date.getDate() - 7);
      endDate.setDate(date.getDate() + 7);

      $(`td[data-date="${formatDate(startDate)}"]`).addClass("start-date");
      for (
        let d = new Date(startDate);
        d <= endDate;
        d.setDate(d.getDate() + 1)
      ) {
        let formattedDate = formatDate(d);
        $(`td[data-date="${formattedDate}"]`).addClass(
          d.getTime() === date.getTime() ? "active in-range" : "in-range"
        );
      }
      $(`td[data-date="${formatDate(endDate)}"]`).addClass("end-date");
    }

    function formatDate(date) {
      let year = date.getFullYear();
      let month = String(date.getMonth() + 1).padStart(2, "0");
      let day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    updateCalendars();
  });
