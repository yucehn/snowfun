$(function() {
    $('#selectDaterange').daterangepicker({
      "locale": {
          "format": "YYYY-MM-DD",
          "separator": " ~ ",
          "applyLabel": "確認",
          "cancelLabel": "取消",
          "customRangeLabel": "自訂義範圍",
          "daysOfWeek": [
              "日",
              "一",
              "二",
              "三",
              "四",
              "五",
              "日"
          ],
          "monthNames": [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
          ],
          "firstDay": 1
      },
      "startDate": moment(),
      "endDate": moment()
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  }
);

