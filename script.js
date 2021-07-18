


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


 
         // VALIDATION OF THE FORM INPUT VALUES BY  if...else...statements.

 
         if (monthOfBirth < 1 || monthOfBirth > 12 ) // THIS CONDITION VALIDATES MONTH INPUT VALUES
             {
            swal(`WRONG MONTH INPUT : PLEASE ENTER VALID
                Your input value exceeded the total number of months in a year`);
           } 

      else if (dateOfBirth < 1 || dateOfBirth > 31  && monthOfBirth < 1 || monthOfBirth > 12 ) // THIS CONDITION VALIDATES DATES AND MONTHS THAT EXCEED 31 AND 12 RESPECTIVELY
          {
            swal(`WRONG DATE ENTERED : PLEASE ENTER VALID DATE
                 WRONG MONTH ENTERED : PLEASE ENTER VALID MONTH `)
          }
              
       else if ((monthOfBirth == 2 && dateOfBirth > 29)) // THIS CONDITION VALIDATES FEB DAYS THAT EXCEED 29 DAYS
       
           {
               swal(`THE DATE "FEBRUARY" NUMBER OF DAYS`)
           }

      else  if (dateOfBirth < 1 || dateOfBirth > 31  )// THIS CONDITION VALIDATES DATES INPUT VALUES
           {   
              swal(`WRONG DATE ENTERED : PLEASE ENTER VALID DATE`)
          } 
     
       else if (yearOfBirth = NaN || yearOfBirth < 1900)   // THIS CONDITION VALIDATES YEAR INPUT VALUES
            {
              swal(`WRONG YEAR ENTERED : PLEASE ENTER VALID YEAR `)
            }   
     









  
};
