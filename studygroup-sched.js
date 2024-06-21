function studyGroupSchedule() {
    let name;
    let days;
   
    name = prompt("What is your name?");
    days = prompt("What days do you want to schedule for your study group sessions?");
    
  studyGroupScheduleHeader.innerHTML =(`Hi ${name}, your study group is meeting on!`);
  studyGroupScheduleParagraph.innerHTML =(`Your study group has selected ${days}!`);
  }
  
  studyGroupScheduleButton.onclick = studyGroupSchedule;