//// Function that generates the akan names according to days of the week

const akanNameGenerator = function () {

// Male Akan Names

 const mandumeAkans = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];

// Female akan Names

 const slayQueenAkans = [
    "Akosua", 
    "Adwoa", 
    "Abenaa", 
    "Akua", 
    "Yaa", 
    "Afua", 
    "Ama"];

     //days of the week

 const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

 // date value variable

 const dayDate = parseInt(
    document.getElementById("Form").elements.namedItem("date").value
  );

  // month value variable

 const birtmonth = parseInt(
    document.getElementById("Form").elements.namedItem("month").value
  );

  // year value variable

 const yearborn = parseInt(
    document.getElementById("Form").elements.namedItem("year").value
  );

  // gender value variable
 const gender = document.getElementById("Form").elements.namedItem("gender").value;

 
 const dateOfBirth = new Date(yearborn + "/" + birtmonth + "/" + dayDate);


 const weekDay = dateOfBirth.getDay();

// form validation for the form inputs.

    if (yearborn === NaN || yearborn < 1900 || yearborn > 2021)
            {
              return swal ( "WRONG YEAR INPUT !" ,  "PLEASE ENTER VALID NUMBER OF THE YEAR" ,  "error" );
            }


   else if (birtmonth < 1 || birtmonth > 12 )
             {
                return swal ( "WRONG MONTH INPUT !" ,  "ENTER VALID MONTH" ,  "error" );
             } 

   else if  (birtmonth == 2 && dayDate > 29) 
        {
          return swal ( "WRONG MONTH INPUT !" ,  "FEBRUARY SHOULD NOT BE MORE THAN 29 DAYS" ,  "error" );
        } 

      else if (dayDate < 1 || dayDate > 31)  
        {
          return swal ( "WRONG DATE INPUT !" ,  "PLEASE ENTER VALID NUMBER OF DAYS" ,  "error" );
         }

       if (year === NaN || year < 1900 || year > 2021)
           {
            return swal ( "WRONG YEAR INPUT !" ,  "PLEASE ENTER VALID NUMBER OF THE YEAR" ,  "error" );
          }

          //// CALCULATING THE AKAN NAMES USING if .....else  if
 
  if (weekDay === 0 && gender === "male") 
  {
    return swal({title:`YOU WERE BORN ON :${daysOfTheWeek[weekDay]} 
                       YOUR AKAN NAME IS....
                        : ${mandumeAkans[weekDay]}`});
  } 
  else if (weekDay === 1 && gender === "male") 
  {
    return swal({title:`YOU WERE BORN ON :${daysOfTheWeek[weekDay]} 
                        YOUR AKAN NAME IS....
                            : ${mandumeAkans[weekDay]}`});
  } 
  else if (weekDay === 2 && gender === "male")
   {
    return swal({title:`YOU WERE BORN ON :${daysOfTheWeek[weekDay]} 
                       YOUR AKAN NAME IS....
                                            : ${mandumeAkans[weekDay]}`});
  } 
  else if (weekDay === 3 && gender === "male") 
  {
    return swal({title:`YOU WERE BORN ON :${daysOfTheWeek[weekDay]} 
                        YOUR AKAN NAME IS....
                        : ${mandumeAkans[weekDay]}`});
    
  } 
  else if (weekDay === 4 && gender === "male")
   {
    return swal({title:`YOU WERE BORN ON :${daysOfTheWeek[weekDay]} 
                        YOUR AKAN NAME IS....
                                         : ${mandumeAkans[weekDay]}`});
  } 
  else if (weekDay === 5 && gender === "male")
   {
  return swal({title:`YOU WERE BORN ON :${daysOfTheWeek[weekDay]} 
  Y                  OUR AKAN NAME IS....
                                         : ${mandumeAkans[weekDay]}`});
  } 
  else if (weekDay === 6 && gender === "male") 
  {
    return swal({title:`YOU WERE BORN ON :${daysOfTheWeek[weekDay]} 
                        YOUR AKAN NAME IS....
                                            : ${mandumeAkans[weekDay]}`});
  }

  if (weekDay === 0 && gender === "female") 
  {
    return swal({title:`YOU WERE BORN ON :${daysOfTheWeek[weekDay]} 
                       YOUR AKAN NAME IS....
                                            : ${slayQueenAkans[weekDay]}`});
  } 
  else if (weekDay === 1 && gender === "female")
   {
    return swal({title:`YOU WERE BORN ON :${daysOfTheWeek[weekDay]} 
                       YOUR AKAN NAME IS....
                                            : ${slayQueenAkans[weekDay]}`});
  } 
  else if (weekDay === 2 && gender === "female") 
  {
    return swal({title:`YOU WERE BORN ON :${daysOfTheWeek[weekDay]} 
    Y                   YOUR AKAN NAME IS....
                                           : ${slayQueenAkans[weekDay]}`});
  } 
  else if (weekDay === 3 && gender === "female") 
  {
    return swal({title:`YOU WERE BORN ON :${daysOfTheWeek[weekDay]} 
                       YOUR AKAN NAME IS....
                                            : ${slayQueenAkans[weekDay]}`});
  } 
  else if (weekDay === 4 && gender === "female")
   {
    return swal({title:`YOU WERE BORN ON :${daysOfTheWeek[weekDay]} 
                       YOUR AKAN NAME IS....
                                            : ${slayQueenAkans[weekDay]}`});
  } 
  else if (weekDay === 5 && gender === "female")
   {
    return swal({title:`YOU WERE BORN ON :${daysOfTheWeek[weekDay]} 
                       YOUR AKAN NAME IS....
                                            : ${slayQueenAkans[weekDay]}`});
  } 
  else if (weekDay === 6 && gender === "female") 
  {
    return swal({title:`YOU WERE BORN ON :${daysOfTheWeek[weekDay]} 
                       YOUR AKAN NAME IS....
                                            : ${slayQueenAkans[weekDay]}`});
  }

};






