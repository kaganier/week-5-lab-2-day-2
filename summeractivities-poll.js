function summerActivitiesPoll() {
    let name;
    let activities;
    name = prompt("What is your name?");
    activities = prompt("What summer time activities do you enjoy?");
    summerActivitiesPollHeader.innerHTML =(`Hi ${name}, your poll results have been recorded!`);
    summerActivitiesPollParagraph.innerHTML =(`Your have selected ${activities} as your favorite summer time activities!`);
  }
  
  summerActivitiesPollButton.onclick = summerActivitiesPoll;