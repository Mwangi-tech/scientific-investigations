const startingMinutes = 60; // Set the timer duration in minutes
let time = startingMinutes * 60;
let timer; // Declare the timer variable

const countdownEl = document.getElementById('countdown');
setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
        // If time is up, stop the timer and show the score
        clearInterval(timer);
        showScore();
    }
}

const questions = [
    {
        
        question: "The following are components of integrated science.",
        video: "video5.mp4",
        mainQuestion:"Which one is odd one out?",
        answers: [
            {text: "Biology", correct: false},
            {text: "History", correct: true},
            {text: "Chemistry", correct: false},
            {text: "Physics", correct: false},
            
        ]
    },
    {
        
        question: "Watch the following video and answer the questions that follow:",
        video: "video3.mp4",
        mainQuestion:"Magnification is the process of making small objects or organisms appear larger.True or False?",
        answers: [
            {text: "False", correct: false},
            {text: "True", correct: true},
            
            
        ]
    },

    {
        
        question: "Which part of the microscope is used for fine-tuning the focus to bring the specimen into sharp detail?",
        //image: "image1.jpg",
        //mainQuestion:"Which one is odd one out?",
        answers: [
            {text: "Coarse adjustment knob", correct: false},
            {text: " Diaphragm", correct: false},
            {text: " Stage clips", correct: false},
            {text: " Fine adjustment knob", correct: true},
            
        ]
    },

    {
        
        question: "What part of the microscope is responsible for regulating the amount of light that passes through the specimen?",
        //image: "image1.jpg",
        //mainQuestion:"Which one is odd one out?",
        answers: [
            {text: "Objective lenses", correct: false},
            {text: " Diaphragm", correct: true},
            {text: " Eyepiece", correct: false},
            {text: "Stage", correct: false},
            
        ]
    },

    {
        
        question: "What is the function of the objective lenses in a microscope?",
        //image: "image1.jpg",
        //mainQuestion:"Which one is odd one out?",
        answers: [
            {text: "To control the amount of light entering the microscope", correct: false},
            {text: "To provide a comfortable grip for the user", correct: false},
            {text: "To magnify the specimen", correct: true},
            {text: "To adjust the focus of the microscope", correct: false},
            
        ]
    },

    {
        
        question: "Which of the following parts of a microscope is wrongly Matched?",
        //image: "image1.jpg",
        //mainQuestion:"Which one is odd one out?",
        answers: [
            {text: "Clip - Holds the slide containing the specimen in position", correct: false},
            {text: "Condenser - Concentrates light onto the stage", correct: false},
            {text: "Arm - Supports the body tube and the stage", correct: false},
            {text: "Eyepiece - Provides a firm support which makes the microscope stable on the bench", correct: true},
            
        ]
    },

    
    {
        question: "Learners were taken through an educational tour in an instituition. During the tour they came across the symbol shown below.",
        //image: "image.jpg", 
        mainQuestion:"Which health hazard does the symbol represent? (KNEC 2023 No.2)",
        answers: [
            {text: "Flammable", correct: true},
            {text: "Carcinogenic", correct: false},
            {text: "Toxic", correct: false},
            {text: "Oxidising", correct: false},
            
        ]
    },
     {
        question: "Learners were involved in grouping plants into flowering and non-flowering plants as shown below.",
        video: "video2.mp4",
        mainQuestion:"Which component of integrated science was this lesson drawn from?(KNEC 2023 No.1)", 
        answers: [
            {text: "Biology", correct: true},
            {text: "History", correct: false},
            {text: "Chemistry", correct: false},
            {text: "Physics", correct: false},
           
        ]
    },
    {
        
        question: "The picture below shows an injury caused by a certain substance during science lesson.",
        image: "image2.jpg",
        mainQuestion:"Identify the likely substance that caused the injury (KNEC 2023 No.3)",
        answers: [
            {text: "Open flames or hot objects", correct: false},
            {text: "A spill of hot or corrosive liquid", correct: true},
            {text: "Inhaling poisonous fumes", correct: false},
            {text: "Open electrical sockets", correct: false},
            
        ]
    },
    {
        question: "Watch the video below and then answer the questions that follow:",
        video: "video4.mp4", 
        mainQuestion:"Which of the following apparatus is NOT used for measuring volume?",
        answers: [
            {text: "Volumetric flask", correct: false},
            {text: "Burette", correct: false},
            {text: "Filter funnel", correct: true},
            {text: "Pipette", correct: false},
            
        ]
    },
    
    {
        question: "Which of the apparatus is used for measuring fixed volumes?",
        //image: "flame.jpg", 
        //mainQuestion:"Which health hazard does the symbol represent? (KNEC 2023 No.2)",
        answers: [
            {text: "Graduated beaker", correct: false},
            {text: "Pipette", correct: true},
            {text: "Burette", correct: false},
            {text: "Syringe", correct: false},
            
        ]
    },
   
    {
        
        question: "Watch the video below",
        video: "video6.mp4",
        mainQuestion:"Which liquid is commonly used in laboratory thermometers due to its broad temperature range and stable thermal properties?(KNEC 2023 No.5a)",
        answers: [
            {text: "Water", correct: false},
            {text: " Mercury", correct: true},
            {text: "Cooking oil", correct: false},
            {text: " Ethanol", correct: false},
            
        ]
    }, 
    {
        
        question: "Grade 7 learners carried out an experiment using the instrument in the video above.",
        //image: "image3.jpg",
        mainQuestion:"What is the purpose of the bulb at the end of a laboratory thermometer? (KNEC 2023 No.5b)",
        answers: [
            {text: "To make the thermometer look more aesthetically pleasing", correct: false},
            {text: "To provide a comfortable grip for the user", correct: false},
            {text: "To measure atmospheric pressure", correct: false},
            {text: "To contain the temperature-sensitive liquid", correct: true},
            
        ]
    }, 
    {
        question: "Watch the video below and answer the following questions;",
        video: "video8.mp4",  
        mainQuestion:"What is the main characteristic that distinguishes a luminous flame from a non-luminous flame in a burner? (KNEC 2023 No.2)",
        answers: [
            {text: "Temperature", correct: false},
            {text: " Color", correct: true},
            {text: "Odor", correct: false},
            {text: "Stability", correct: false},
            
        ]
    },

    {
        question: "Which type of flame is more suitable for heating purposes in a laboratory setting due to its higher temperature and cleaner combustion?",
        //video: "video1.mp4",  
        //mainQuestion:"Which health hazard does the symbol represent? (KNEC 2023 No.2)",
        answers: [
            {text: "Luminous flame", correct: false},
            {text: "Yellow flame", correct: false},
            {text: " Blue flame", correct: true},
            {text: "Red flame", correct: false},
            
        ]
    },
    {
        question: "What is the primary reason that a non-luminous flame is preferred for certain chemical reactions in the laboratory?",
        //video: "video1.mp4",  
        //mainQuestion:"Which health hazard does the symbol represent? (KNEC 2023 No.2)",
        answers: [
            {text: "It is cooler than a luminous flame.", correct: false},
            {text: "  It provides a more visible light.", correct: false},
            {text: " It is easier to control the shape and size.", correct: false},
            {text: " It produces less smoke and soot.", correct: true},
            
        ]
    },
    {
        question: "Watch the video and answer the questions that follow",
        video: "video7.mp4",  
        mainQuestion:"Which part of the Bunsen burner controls the amount of air entering the burner, affecting the type of flame produced? (KNEC 2023 No.2)",
        answers: [
            {text: "Barrel", correct: false},
            {text: " Collar", correct: true},
            {text: " Air vent", correct: false},
            {text: "Gas tap", correct: false},
            
        ]
    },
    {
        question: "What is the purpose of the barrel on a Bunsen burner?",
        //video: "video1.mp4",  
        //mainQuestion:"Which health hazard does the symbol represent? (KNEC 2023 No.2)",
        answers: [
            {text: "To control the flow of gas to the burner", correct: true},
            {text: "  To adjust the height of the flame", correct: false},
            {text: " To provide a stable base for the burner", correct: false},
            {text: " To protect the user from heat", correct: false},
            
        ]
    },
    
    
];


let introSection; // Declare introSection variable outside of the if block
const quizContainer = document.getElementById('quiz-container');
const startButton = document.getElementById('start-btn');
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const videoContainer = document.getElementById("video-container");
let videoElement = document.createElement("video");

document.addEventListener('DOMContentLoaded', function () {
    // Check if the necessary elements exist
    introSection = document.querySelector('.intro'); // Assign introSection outside the if block
    if (introSection && quizContainer && startButton) {
        startButton.addEventListener('click', startQuiz);
    }

    let currentQuestionIndex = 0;
    let score = 0;
    // Other code for event listeners, functions, etc.
});

    function startQuiz() {
        console.log('startQuiz function is triggered');
        introSection.style.display = 'none'; // Hide the introduction section
        quizContainer.style.display = 'block'; // Display the quiz section
        loadQuestion();
        // quizContainer.style.display = 'block'; // Display the quiz section
        // document.getElementById('introduction-container').style.display = 'none';
        // document.getElementById('quiz-container').style.display = 'block';
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
        loadVideo();


        resetTimer();
        timer = setInterval(updateCountdown, 1000);
        time = startingMinutes * 60;
        clearInterval(timer);
        //timer = setInterval(updateCountdown, 1000);
    }
    function resetTimer() {
        time = startingMinutes * 60;
       // timer = setInterval(updateCountdown, 1000);
    }

    function loadQuestion() {
        // Display the "Next" button
        nextButton.style.display = 'block';
    }

    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;

        // Display both question and mainQuestion (if available)
        let fullQuestion = `${questionNo}. ${currentQuestion.question}`;
        if (currentQuestion.mainQuestion) {
            fullQuestion += `<br>${currentQuestion.mainQuestion}`;
        }

        questionElement.innerHTML = fullQuestion;

        if (currentQuestion.video) {
            const videoElement = document.createElement("video");
            videoElement.src = currentQuestion.video;
            videoElement.width = 640; // Set the width as needed
            videoElement.height = 360; // Set the height as needed
            videoElement.controls = true;
            videoElement.classList.add("question-video");
            answerButtons.appendChild(videoElement);

            videoElement.addEventListener("loadeddata", function () {
                displayQuestion();
            });
        } else {
            // If there's no video, display the question directly
            displayQuestion();
        }

        function displayQuestion() {
            // Display both question and mainQuestion (if available)
            let fullQuestion = `${questionNo}.<span class="regular-question">${currentQuestion.question}</span>`;
            if (currentQuestion.mainQuestion) {
                fullQuestion += `<br><span class="main-question">${currentQuestion.mainQuestion}</span>`;
            }
            questionElement.innerHTML = fullQuestion;
        }

        if (currentQuestion.image) {
            const imageElement = document.createElement("img");
            imageElement.src = currentQuestion.image;
            imageElement.alt = "Question Image";
            imageElement.classList.add("question-image", "img-fluid");
            answerButtons.appendChild(imageElement);
        }

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }

    function resetState() {
        nextButton.style.display = "none";
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }
    videoElement.play();

    function showScore() {
        clearInterval(timer); // Clear the timer interval
        resetState();
        // Display different messages based on the score
        if (score === questions.length) {
            alert('Wow! You answered all the questions correctly. You\'re a star! 🌟 Keep up the excellent work. Mr. Mwangi is incredibly proud of your perfect score!');
        } else {
            alert(`Great effort! You scored ${score} out of ${questions.length}. Every correct answer brings you one step closer to mastery. Keep practicing, and success will follow. Mr Mwangi believes in you!`);
        }
        startQuiz();
    
        // Reset the Next button and pause the video
        nextButton.style.display = "block";
        videoElement.pause(); // Use videoElement instead of video
    }
    
    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }
    
    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    });
    
    startQuiz();
