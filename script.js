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

};
