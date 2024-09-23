const questions = [
    {
        question: "Which type of activity do you enjoy the most?",
        answers: [
            { text: "Analyzing data and solving puzzles", value: 4 },
            { text: "Designing and creating new things", value: 3 },
            { text: "Helping people and providing support", value: 2 },
            { text: "Organizing and managing projects", value: 1 }
        ]
    },
    {
        question: "What kind of work environment do you prefer?",
        answers: [
            { text: "Fast-paced and dynamic", value: 4 },
            { text: "Collaborative and supportive", value: 2 },
            { text: "Creative and flexible", value: 3 },
            { text: "Structured and predictable", value: 1 }
        ]
    },
    {
        question: "Which subject did you enjoy most in school?",
        answers: [
            { text: "Business and Management", value: 1 },
            { text: "Social Studies and Psychology", value: 2 },
            { text: "Arts and Literature", value: 3 },
            { text: " Mathematics and Science", value: 4 }
        ]
    },
    {
        question: "How do you prefer to spend your free time?",
        answers: [
            { text: "Engaging in intellectual activities", value: 4 },
            { text: "Volunteering or helping others", value: 2 },
            { text: "Working on creative projects", value: 3 },
            { text: "Planning and organizing events", value: 1 }
        ]
    },
    {
        question: "What motivates you most in a job?",
        answers: [
            { text: "Achieving set goals and managing tasks", value: 1 },
            { text: "Making a positive impact on others", value: 2 },
            { text: "Creativity and self-expression", value: 3 },
            { text: "Challenging problems and new learning opportunities", value: 4 }
        ]
    },
    {
        question: "Which type of project do you find most engaging?",
        answers: [
            { text: "Analytical and research-based projects", value: 4 },
            { text: "Community service and support projects", value: 2 },
            { text: "Artistic and innovative projects", value: 3 },
            { text: "Project management and administrative tasks", value: 1 }
        ]
    },
    {
        question: "What kind of tasks do you prefer?",
        answers: [
            { text: "Organizational and logistical", value: 1 },
            { text: "Interpersonal and service-oriented", value: 2 },
            { text: "Creative and hands-on", value: 3 },
            { text: "Complex and thought-provoking", value: 4 }
        ]
    },
    {
        question: "What type of career role appeals to you the most?",
        answers: [
            { text: "Manager or Coordinator", value: 1 },
            { text: "Counselor or Educator", value: 2 },
            { text: "Designer or Artist", value: 3 },
            { text: "Researcher or Analyst", value: 4 }
        ]
    },
    {
        question: "How do you approach a new challenge?",
        answers: [
            { text: "Analyze and research thoroughly before acting", value: 4 },
            { text: "Seek advice and collaborate with others", value: 2 },
            { text: "Approach it with creative solutions", value: 3 },
            { text: "Plan and organize a structured approach ", value: 1 }
        ]
    },
    {
        question: "Which of these activities do you find most rewarding?",
        answers: [
            { text: "Solving complex problems", value: 4 },
            { text: "Helping someone improve their skills", value: 2 },
            { text: "Creating something new", value: 3 },
            { text: "Leading a successful project", value: 1 }
        ]
    },
    {
        question: "What kind of work tasks do you enjoy the most?",
        answers: [
            { text: "Critical thinking and problem-solving", value: 4 },
            { text: "Assisting and mentoring", value: 2 },
            { text: "Designing and creating", value: 3 },
            { text: "Organizing and managing", value: 1 }
        ]
    },
    {
        question: "How do you prefer to interact with others in a professional setting?",
        answers: [
            { text: "In a setting where analytical thinking is valued", value: 4 },
            { text: "In a supportive and nurturing role", value: 2 },
            { text: "In a creative and collaborative environment", value: 3 },
            { text: "In a structured and managerial capacity", value: 1 }
        ]
    },
    {
        question: "Which job aspect do you find most appealing?",
        answers: [
            { text: "Administration and coordination", value: 1 },
            { text: "Teaching and advising", value: 2 },
            { text: "Art and design", value: 3 },
            { text: "Research and development", value: 4 }
        ]
    },
    {
        question: "What type of problem-solving approach do you prefer?",
        answers: [
            { text: "Systematic and analytical", value: 4 },
            { text: "Empathetic and collaborative", value: 2 },
            { text: "Innovative and creative", value: 3 },
            { text: "Organized and methodical", value: 1 }
        ]
    },
    {
        question: "Which of these career paths interests you the most?",
        answers: [
            { text: "Data Scientist or Statistician", value: 4 },
            { text: "Social Worker or HR Specialist", value: 2 },
            { text: "Graphic Designer or Writer", value: 3 },
            { text: "Project Manager or Operations Specialist", value: 1 }
        ]
    }
];


const results = [
    { min: 31, max: 45, description: "You have a natural talent for analytical thinking and problem-solving, making you ideal for careers that require deep intellectual engagement and critical analysis. Roles such as Data Scientist, Researcher, or Analyst will allow you to leverage your ability to dissect complex data, identify patterns, and generate insights. Your preference for intellectual challenges means you thrive in environments where logical reasoning and systematic approaches are valued. You are motivated by solving intricate problems and discovering innovative solutions, making analytical and research-focused careers highly satisfying for you." },
    { min: 21, max: 30, description: "You possess a strong creative streak and a passion for innovative thinking, making you well-suited for careers that emphasize artistic expression and original design. Whether it's as a Graphic Designer, Writer, or Artist, you excel in roles where creativity and imagination are key. Your ability to think outside the box and develop unique ideas allows you to bring fresh perspectives to your work. You are driven by opportunities to create and experiment, and you find fulfillment in roles that let you transform abstract concepts into tangible, visually or textually engaging outputs." },
    { min: 11, max: 20, description: "You excel in roles where empathy and interpersonal skills are central. Careers such as Counselor, Educator, or Social Worker are well-suited to your strengths and interests. You find satisfaction in helping others achieve their goals, providing guidance, and offering support. Your natural inclination towards nurturing and assisting makes you effective in environments that prioritize personal connections and community impact. You are motivated by the opportunity to make a meaningful difference in people’s lives, and you thrive in roles where your ability to empathize and collaborate is essential." },
    { min: 1, max: 10, description: "You are adept at managing, organizing, and leading, making you a strong candidate for roles that involve project management and coordination. Positions such as Project Manager, Operations Specialist, or Coordinator align with your skills in planning, executing, and overseeing tasks. Your preference for structure and organization means you excel in environments where efficiency and goal-setting are crucial. You are driven by achieving tangible results and leading teams to success. Your ability to keep projects on track and ensure smooth operations makes you well-suited for leadership and administrative roles." }
];

let currentQuestionIndex = 0;
let totalScore = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    if (!question) return; // Safety check

    document.getElementById('question-container').innerHTML = `<h2>${question.question}</h2>`;
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = "";
    
    question.answers.forEach(answer => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" value="${answer.value}"> ${answer.text}`;
        answersContainer.appendChild(label);
    });
}

function showResult() {
    let personalityType = "Result not found";
    results.forEach(result => {
        if (totalScore >= result.min && totalScore <= result.max) {
            personalityType = result.description;
        }
    });

    document.getElementById('result-text').innerText = personalityType;
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
}

document.getElementById('next-button').addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        totalScore += parseInt(selectedAnswer.value);
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Please select an answer!");
    }
});

// Initialize the quiz
loadQuestion();

