const questions = [
    {
        question : "Which player has the most centuries in the worldCup history?",
        answers : [
            { text: "Ricky Ponting", correct:false},
            { text: "Sachin Tendulkar", correct:true},
            { text: "Rohit Sharma", correct:false},
            { text: "David Warner", correct:false},
        ]
    },
    {
        
        question : "Who is the highest run-scorer in IPL history?",
        answers : [
            { text: "Suresh Raina", correct:false},
            { text: "David Warner", correct:false},
            { text: "Amit Mishra", correct:false},
            { text: "Virat Kohli", correct:true},
        ]
    },
    {
        
        question : "Which team hasa won the most IPL titles?",
        answers : [
            { text: "CSK", correct:false},
            { text: "KKR", correct:false},
            { text: "MI", correct:true},
            { text: "SH", correct:false},
        ]
    },
    {
        
        question : "who scored the first century in IPL history?",
        answers : [
            { text: "Chris Gayle", correct:false},
            { text: "Brendon McCullum", correct:true},
            { text: "Virendra Sehwag", correct:false},
            { text: "David Warner", correct:false},
        ]
    },
    {
        
        question : "Which player has the most catches in the IPL history?",
        answers : [
            { text: "Rohit Sharma", correct:false},
            { text: "Sachin Tendulkar", correct:false},
            { text: "Suresh Raina", correct:true},
            { text: "Kieron Pollard", correct:false},
        ]
    },
    {
        
        question : "Who was the MVP of IPL 2019?",
        answers : [
            { text: "AB De Villiers", correct:false},
            { text: "Hardik Pandya", correct:false},
            { text: "KL Rahul", correct:false},
            { text: "Andre Russell", correct:true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currQuestionIndex = 0;
  score=0;
  nextButton.innerHTML="Next";
  showQuestion();
 }
 function showQuestion(){
    resetState(); // to reset question and answer
    let currQuestion = questions[currQuestionIndex];
    let questionNo = currQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currQuestion.question;

    currQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
         }
         button.addEventListener("click",selectAnswer);
    });
 }

 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
     answerButtons.removeChild(answerButtons.firstChild);
    
    }
 }  // this will remove all previous answers
 
 function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
 }

 function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
 }
 function handleNextButton(){
    currQuestionIndex++;
    if(currQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
 }
 nextButton.addEventListener("click", ()=>{
    if(currQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
 });

 startQuiz();
