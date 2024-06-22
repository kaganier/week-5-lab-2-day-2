function vacationSpotSurvey() {
 

  let seasons;
  let spots;

   seasons = prompt("What is your favorite time to go on vacation?");
    spots = prompt("Where do you like to go for vacation?");
   
 vacationSpotSurveyHeader.innerHTML =(`Looks like you have selected ${seasons} as your favorite time to travel!`);
vacationSpotSurveyParagraph.innerHTML =(`Hope you have fun on your vaction in ${spots}!`);
  }
  
  vacationSpotSurveyButton.onclick = vacationSpotSurvey;