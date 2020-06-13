function timeConversion(s) {
  let beginning = s.substr(0, 2);
  /*
   * Write your code here.
   */
  //it's a string.
  //format "hh:mm:ssXM"
  //if the substring from 9 to 10 is AM
  //and substring 0-1 are not 1 and 2
  // just cut off the AM,
  //and the substring 0-1 are 1 and 2,
  //make them 0 and 0
  if (s.charAt(8) === "A") {
    if (beginning !== "12") {
      return s.substring(0, 8);
    } else {
      return "00" + s.substring(2, 8);
    }
  }

  //if the substring from 9 to 10 is PM
  //and the substring 0-1 are not 1 and 2,
  //cut off the PM and add 12 to substring 0-1 as numbers
  //and the substring 0-1 are 1 and 2
  //just cut off the PM

  if (s.charAt(8) === "P") {
    //something is off here for 11, 10. and 2
    if (beginning !== "12") {
      console.log("hi");
      let firstDigits = s.substring(0, 2);
      console.log(firstDigits);
      let newFirstDigits = parseInt(firstDigits, 10) + 12;
      return newFirstDigits.toString() + s.substring(2, 8);
    } else {
      return s.substring(0, 8);
    }
  }
}

console.log(timeConversion("12:01:01AM"));
console.log(timeConversion("01:00:00AM"));
console.log(timeConversion("02:00:00AM"));
console.log(timeConversion("10:00:00AM"));
