


// Function that generates the akan names according to days of the week

const akanNameGenerator = function () {
  //Saved days of the week in an Array.

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Male Akan Names

  const maleAkanNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];

  // Female akan Names

  const femaleAkanNames = [
    "akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  // Saving The inputs in variables
  
  const dateOfBirth = parseInt(
    document.getElementById('date').value
  );

  // variable for holding month of birth.

  const monthOfBirth = parseInt(
    document.getElementById('month').value
  );

  // Variable For holding Year of Birth.

  const yearOfBirth = parseInt(
    document.getElementById('year').value
  );

  //Varriable for holding  gender selection.

  const gender = document.getElementById('gender').value;

  // variable to hold the dateOfBirt :aquired through new Date() method and the values of the form inputs.

  const birthDate = new Date(`${yearOfBirth}/${monthOfBirth}/${dateOfBirth}`);

  // variable For holding dayOfWeek of date Of Birth :aquired through subjecting the birthdate variable to a getDay() method. 

  const dayOfWeek = birthDate.getDay();


 


  // Validating the form inputs using control structure if...else...statements.



  // if (month < 1 || month > 12 || (month == 2 && date > 29)) {
  //   return (document.getElementById("alert2").innerHTML =
  //     "Invalid  Month ,Please Try Again");
  // } else if (date < 1 || date > 31) {
  //   return (document.getElementById("alert2").innerHTML =
  //     "Invalid Date ,Please Try Again");
  // } else if (year === NaN || year < 1900 || year > 2019) {
  //   document.getElementById("alert2").innerHTML =
  //     "Invalid year please try Again";
  // }


    

     if (dateOfBirth < 1 || dateOfBirth > 31  ) {   //this condition validates date inputs only
          swal(`Wrong date entered : please enter valid date`)
          return;
     } 
     else if (monthOfBirth < 1 || monthOfBirth > 12 || (monthOfBirth == 2 && dateOfBirth > 29) ) {
        swal("wrong month input : please enter valid month");
        return;
     } 
     else if (dateOfBirth < 1 || dateOfBirth > 31  && monthOfBirth < 1 || monthOfBirth > 12 ) {
        swal(`Wrong date entered : please enter valid date
        wrong month entered : please enter valid month`)
     };









  
};
