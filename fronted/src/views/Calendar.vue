<template>
  <div class="Calendar">
    <Dashboard>  </Dashboard>
  <h1>Calendar</h1>
    <div id="calendar" style="height: 400px; width:600px ">{{calendar}}</div>
  </div>
</template>
<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'
import Calendar from 'tui-calendar'; /* ES6 */
import "tui-calendar/dist/tui-calendar.css";

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
    var calendar = new Calendar('#calendar', {
  defaultView: 'month',
  taskView: true,
  template: {
    monthDayname: function(dayname) {
      return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
    }

  }
});
//document.getElementById('calendar').innerHTML = calendar;
export default {
  name: 'Calendar',
  data() {
    return {
      calendar,
    };
  },
  components: {
    Dashboard
  }
}
</script> 
