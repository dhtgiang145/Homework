function currentTime() {
  //Declare variables
  var d = new Date();
  var hr = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var ampm;
  var utchr = d.getUTCHours(); //Get current Greenwich Mean Time
  var timediff; //To store time difference between GMT hour and Local hour
  var adjTimeDiff; //To store time difference convert to positive number
  var timeZone; //to store the 4 time zones

  //Add 0 to single digits second
  if (sec < 10) {
    sec = "0" + sec;
  }

  //Add 0 to single digits minute
  if (min < 10) {
    min = "0" + min;
  }

  //Determine AM and PM
  if (hr == 12) {
    ampm = "PM";
  } else if (hr > 12) {
    hr -= 12; //deduct 12 from hours greater than 12
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  //Convert Greenwich Mean Time
  if (utchr > 12) {
    utchr -= 12;
  }
  //Calculate time difference
  timediff = utchr - hr;
  // convert time difference if negative
  if (timediff < 0) {
    adjTimeDiff = timediff * -1;
  } else {
    adjTimeDiff = timediff;
  }
  //Decide time zone
  if (adjTimeDiff == 8) {
    timeZone = "PT";
  } else if (adjTimeDiff == 7) {
    timeZone = "MT";
  } else if (adjTimeDiff == 6) {
    timeZone = "CT";
  } else if (adjTimeDiff == 5) {
    timeZone = "ET";
  } else {
    timeZone = "GMT";
  }

  //Assemble time format
  var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

  //display current local time on HTML elements
  document.getElementById("clock").innerText = time; //adding time
  setInterval(currentTime, 1000);
}

//Initial run of time data function
currentTime();
