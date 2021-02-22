//variables used to store the responses. Here we ensure the list is filled with NA such that a required 
//unanswered question will be flagged when the user tries to submit an empty form
var responses = [];
var numberOfQuestions = 5;
for(i = 0; i < numberOfQuestions; i ++){
  responses[i] = 'na';
}


//Set slide to the first one when you first render the website.
var slideIndex = 1;
showSlides(slideIndex);

//function called when you press the arrow button at the side of the screen.
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//function called when you press the buttons at the bottom of the screen.
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//this function is the core of how the transitions work
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myQuestions");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
        if(slideIndex != 1){
            document.getElementById("prev").style.display = "block";
        }else{
            document.getElementById("prev").style.display = "none";
        }
        if(slideIndex != numberOfQuestions+1){
            document.getElementById("next").style.display = "block";
        }else{
            document.getElementById("next").style.display = "none";
        }
}



//function used to get the option selected. Remember that you must put the option chosen and the question number.
//Remember that qn 1 is 0, qn 2 is 1, etc.
//You must also ensure that the name and the id of the option is appropriately set. 
//name -> question(insert qn number), i.e for question 1 all options will have name = 'question1'
//id -> just make the id the name of the options. i.e for that data analyst option, id = 'Data Analyst'
function makeSelection(optionChosen, qnNumber){
  responses[qnNumber] = optionChosen;
  optionsOfQuestion = document.getElementsByName(document.getElementById(optionChosen).name);
  for(i= 0; i < optionsOfQuestion.length;i++){
    optionsOfQuestion[i].style.background = "#C38D9E";
  }
  document.getElementById(optionChosen).style.background = "#e8a87c";
}

function preferenceCalculator(){
  ans1 = responses[0];
  ans2 = responses[1];
  ans3 = responses[2];
  ans4 = responses[3];
  ans5 = responses[4];
  ansValues = [0,0,0,0,0]; 
  //these configs assign different weightage to each question
  //These are changed, whereas the values associated with each answer
  //will remain constant
  configA = [0.3,0.3,0.1,0.2,0.1];
  configB = [0.2,0.3,0.1,0.3,0.1];
  configC = [0.15,0.35,0.2,0.3,0.1];
  configs = [[],configA,configB,configC];
  //Here we use a random number generator get select a config to use
  selectedConfig = Math.floor(Math.random() * 3) + 1;
 // alert(selectedConfig);
  if(ans1 == "Cooking"){
    ansValues[0] = 1;
  }    
  if(ans1 == "Eating out"){
    ansValues[0] = 2;
  }
  if(ans2 == "$$$"){
    ansValues[1] = 3;
  }
  if(ans2 == "$$"){
    ansValues[1] = 2;
  }
  if(ans2 == "$"){
    ansValues[1] = 1;
  }
  if(ans3 == "Chinese Food"){
    ansValues[2] = 2
  }
  if(ans3 == "Indian Food"){
    ansValues[2] = 2
  }
  if(ans3 == "Western Food"){
    ansValues[2] = 2
  }
  if(ans3 == "Thai Food"){
    ansValues[2] = 2
  }
  if(ans3 == "Viet Food"){
    ansValues[2] = 2
  }
  if(ans4 == "Expert"){
    ansValues[3] = 1
  }
  if(ans4 == "Intermediate"){
    ansValues[3] = 1
  }
  if(ans4 == "Beginner"){
    ansValues[3] = 1
  }
  if(ans5 == "2km"){
    ansValues[4] = 1
  }
  if(ans5 == "5km"){
    ansValues[4] = 1
  }
  if(ans5 == "10km"){
    ansValues[4] = 1
  }
  outputValue = 0;
  for(i = 0; i < ansValues.length;i++){
    //alert(ansValues[i] + " " + configs[selectedConfig][i]);
    outputValue += ansValues[i]*configs[selectedConfig][i];
  }
  //*0.5 since we are doing normalization on the dataset and expected value of any individual is 0.5 
  alert(outputValue*0.5);
}

//Submits to questionaire at the submit button, will not allow a submission if there is a question that is not done.
function submitQuestionaire(){
  var checker = true;
  for(i = 0; i < responses.length;i++){
    if(responses[i] == 'na'){
      checker = false;
    }
  }
  if(!checker){
    alert('Please answer all required questions!')
  }else{
    //preferenceCalculator();
    location.href='./SearchPage.html';
  }
}



// to do:
// use r to simulate then find the value that can differentiate 70/30.
// write documentation