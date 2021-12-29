
window.function = function (start,end,timezone,subject,description,organizer,location,attach,format) {

  start = start.value ?? "";
  end = end.value ?? "";
  timezone = timezone.value ?? "";  
  subject = subject.value ?? "";
  description = description.value ?? "";
  organizer = organizer.value ?? "";
  location = location.value ?? "";
  attach = attach.value ?? "";
  format = format.value ?? "";

  let description_final = "";

  if (description.length > 200) {
    description_final = description.substring(0,200) + "...";
  }

  if (description.length <= 200) {
    description_final = description;
  }

  if (start == "" | end == "") return ""

  else {
  start = start.replace("Z","");
  end = end.replace("Z","");

  let offset_final = "";
  let offset_raw = "";

  if (timezone == "UTC") {
    offset_final = "%2B00:00";
  }

  else if (timezone == "") {
    offset_final = "";
  }

  else {
  
  offset_raw = parseFloat(timezone.substring(3,timezone.length));
  
  var hours = (offset_raw - offset_raw%1)/1;  
  
  hours = hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  
  var minutes = Math.abs((hours - offset_raw) * 60);
  
  minutes = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

  if (offset_raw > 0) {
  offset_final = "%2B" + hours + ":" + minutes;   
  }
  else offset_final = hours + ":" + minutes;
  }

  //start = start + offset_final;
  //end = end + offset_final;

let agical = "https://ics.agical.io/?format="+format+"&dtstart="+encodeURIComponent(start)+offset_final+"&dtend="+encodeURIComponent(end)+offset_final+"&subject="+encodeURIComponent(subject)+"&description="+encodeURIComponent(description_final)+"&organizer="+encodeURIComponent(organizer)+"&location="+encodeURIComponent(location)+"&format="+encodeURIComponent(format)+"&attach="+encodeURIComponent(attach);

return agical;
  }
}
