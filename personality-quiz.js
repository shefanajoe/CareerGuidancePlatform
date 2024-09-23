const questions = [
    {
        question: "How do you usually spend your weekends?",
        answers: [
            { text: "Relaxing at home", value: 1 },
            { text: "Going out with friends", value: 2 },
            { text: "Pursuing a hobby", value: 3 },
            { text: "Working on personal projects", value: 4 }
        ]
    },
    {
        question: "What’s your approach to solving problems?",
        answers: [
            { text: "Follow a structured plan", value: 4 },
            { text: "Seek advice from others", value: 2 },
            { text: "Think creatively and try new solutions", value: 3 },
            { text: "Tackle them as they come", value: 1 }
        ]
    },
    {
        question: "How do you feel about taking risks?",
        answers: [
            { text: "I prefer to play it safe", value: 1 },
            { text: "I’m cautious but open to opportunities", value: 2 },
            { text: "I enjoy calculated risks", value: 3 },
            { text: "I love spontaneous adventures", value: 4 }
        ]
    },
    {
        question: "Which of these best describes your work style?",
        answers: [
            { text: "Methodical and organized", value: 4 },
            { text: "Collaborative and flexible", value: 2 },
            { text: "Independent and innovative", value: 3 },
            { text: "Spontaneous and adaptable", value: 1 }
        ]
    },
    {
        question: "What type of environment do you thrive in?",
        answers: [
            { text: "Quiet and calm", value: 1 },
            { text: "Social and bustling", value: 2 },
            { text: "Creative and dynamic", value: 3 },
            { text: "Challenging and fast-paced", value: 4 }
        ]
    },
    {
        question: "How do you typically make decisions?",
        answers: [
            { text: "Based on logic and evidence", value: 4 },
            { text: "By consulting with others", value: 2 },
            { text: "Following my intuition", value: 3 },
            { text: "Going with the flow", value: 1 }
        ]
    },
    {
        question: "How do you react to unexpected changes?",
        answers: [
            { text: "I find them stressful", value: 1 },
            { text: "I try to adjust gradually", value: 2 },
            { text: "I embrace them as opportunities", value: 3 },
            { text: "I enjoy the thrill of the unknown", value: 4 }
        ]
    },
    {
        question: "What is your ideal vacation like?",
        answers: [
            { text: "A peaceful retreat", value: 1 },
            { text: "A fun adventure with friends", value: 2 },
            { text: "An exploration of new cultures", value: 3 },
            { text: "An action-packed itinerary", value: 4 }
        ]
    },
    {
        question: "How would your friends describe you?",
        answers: [
            { text: "Reliable and dependable", value: 4 },
            { text: "Friendly and approachable", value: 2 },
            { text: "Creative and inspiring", value: 3 },
            { text: "Spontaneous and energetic", value: 1 }
        ]
    },
    {
        question: "When faced with a new challenge, you...",
        answers: [
            { text: "Research thoroughly before acting", value: 4 },
            { text: "Seek guidance from others", value: 2 },
            { text: "Dive in and figure it out as you go", value: 3 },
            { text: "Take a step back and see how you feel about it", value: 1 }
        ]
    },
    {
        question: "What’s your favorite type of book or movie?",
        answers: [
            { text: "Non-fiction or documentaries", value: 4 },
            { text: "Comedies or dramas", value: 2 },
            { text: "Fantasy or sci-fi", value: 3 },
            { text: "Action or thrillers", value: 1 }
        ]
    },
    {
        question: "How do you handle stress?",
        answers: [
            { text: "By sticking to a routine", value: 4 },
            { text: "By talking it out with friends", value: 2 },
            { text: "By engaging in a creative activity", value: 3 },
            { text: "By finding a new adventure", value: 1 }
        ]
    },
    {
        question: "What’s your preferred type of social activity?",
        answers: [
            { text: "Intimate gatherings", value: 1 },
            { text: "Group activities", value: 2 },
            { text: "Creative workshops or events", value: 3 },
            { text: "High-energy social events", value: 4 }
        ]
    },
    {
        question: "How do you approach learning new skills?",
        answers: [
            { text: "Through structured classes or courses", value: 4 },
            { text: "By practicing with friends or peers", value: 2 },
            { text: "By experimenting on your own", value: 3 },
            { text: "By jumping into real-world applications", value: 1 }
        ]
    },
    {
        question: "What motivates you the most?",
        answers: [
            { text: "Achieving personal goals", value: 4 },
            { text: "Helping others succeed", value: 2 },
            { text: "Exploring new ideas", value: 3 },
            { text: "Seeking new experiences", value: 1 }
        ]
    }
];


const results = [
    { min: 15, max: 25, description: "You prefer quiet, low-key activities and value personal space. You find comfort in routine and tend to be more reflective and reserved. Social interactions are enjoyable but not necessary for your happiness." },
    { min: 26, max: 35, description: "You thrive in social settings and enjoy engaging with others. You are flexible and open to new experiences, often seeking opportunities to connect and collaborate. You balance social activities with personal time." },
    { min: 36, max: 45, description: "You have a dynamic and inventive approach to life. Creativity and new ideas drive you, and you prefer exploring unconventional solutions and adventures. You are comfortable with change and embrace challenges." },
    { min: 46, max: 60, description: "You are energetic and thrive in fast-paced, high-stimulation environments. You seek out new experiences and enjoy taking risks. You are adaptable, spontaneous, and always looking for the next exciting challenge." }
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

