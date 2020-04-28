// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const num_to_str = (num) =>{
  return num.toString();
}



// Write a JavaScript program to convert a string to the number.
const str_to_num = (str) =>{
  return str.parseInt();
}
str_to_num();

const get_type = (data) =>{
  return typeof(data);
}
get_type();
  
const addTwo = (x, y) =>{
  return x + y;
}


const checkBool = (boolFirst, boolSecond) =>{
  if(boolFirst == true && boolSecond == true){
    return "Both values are true";
  }
  else if(boolFirst == false && boolSecond == true || boolFirst == true && boolSecond == false){
    return "Only one of these values are true"
  }
  else if(boolFirst == false && boolSecond == false){
    return "Both values are false"
  }
  else{
    return "You did not put a bool in the box! Please only put in either true or false in the input!"
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
