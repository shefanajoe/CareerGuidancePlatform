let questions = {
    "Personality": [
        { question: "How do you prefer to spend your free time?", options: ["Reading a book", "Socializing with friends", "Working on a hobby", "Relaxing alone"], points: [3, 5, 4, 2] },
        { question: "How do you handle stressful situations?", options: ["Seek support from others", "Work through it alone", "Take a break and come back later", "Ignore it and move on"], points: [4, 3, 5, 2] }, 
        { question: "Which best describes your approach to new tasks?", options: ["Plan everything carefully", "Jump right in and learn as you go", "Consult with others before starting", "Avoid new tasks if possible"], points: [5, 4, 3, 2] }, 
        { question: "How do you respond to criticism?", options: ["Take it constructively", "Defend your position", "Ignore it", "Reflect on it and make changes"], points: [5, 3, 2, 4] }, 
        { question: "What motivates you the most?", options: ["Achieving goals", "Recognition from others", "Personal growth", "Comfort and security"], points: [5, 4, 3, 2] }, 
        { question: "How would you describe your decision-making process?", options: ["Analytical and data-driven", "Intuitive and spontaneous", "Collaborative with input from others", "Avoidant and procrastinated"], points: [5, 4, 3, 2] }, 
        { question: "What type of work environment do you prefer?", options: ["Structured and organized", "Flexible and dynamic", "Creative and open", "Quiet and isolated"], points: [5, 4, 3, 2] }, 
        { question: "How do you typically react to change?", options: ["Embrace it enthusiastically", "Adapt with some resistance", "Struggle to adapt", "Avoid it whenever possible"], points: [5, 4, 3, 2] }, 
        { question: "Which statement best describes your leadership style?", options: ["Lead by example", "Inspire and motivate others", "Delegate tasks and oversee progress", "Avoid taking charge"], points: [5, 4, 3, 2] }, 
        { question: "How do you feel about working in a team?", options: ["Enjoy collaborating with others", "Prefer working independently", "Adapt based on the task", "Avoid teamwork if possible"], points: [5, 3, 4, 2] }


    ],
    "Aptitude": [
        { question: "You have a set of numbers: 2, 4, 8, 16. What comes next?", options: ["24", "32", "64", "48"], points: [2, 5, 4, 3] },
        { question: "Solve this: 7 x 9 – 5 = ?", options: ["58", "63", "59", "64"], points: [4, 2, 3, 5] }, 
        { question: "What is the missing number in this sequence? 3, 6, 12, ?, 48", options: ["18", "24", "36", "30"], points: [4, 5, 3, 2] }, { question: "Which shape continues the pattern?", options: ["Triangle", "Square", "Circle", "Hexagon"], points: [3, 2, 5, 4] }, 
        { question: "If a train travels at 60 km/h, how far will it travel in 2 hours?", options: ["100 km", "120 km", "150 km", "200 km"], points: [2, 5, 3, 4] }, 
        { question: "Solve for x: 3x + 7 = 22", options: ["5", "6", "7", "8"], points: [2, 4, 3, 5] }, 
        { question: "Which of the following is the odd one out? 11, 13, 15, 17", options: ["11", "13", "15", "17"], points: [3, 2, 5, 4] }, 
        { question: "Complete the pattern: 2, 4, 8, 16, ?", options: ["32", "24", "20", "40"], points: [5, 3, 2, 4] }, 
        { question: "If a book costs $15 and you buy 3 books, how much will it cost?", options: ["$40", "$45", "$50", "$60"], points: [3, 5, 2, 4] }, 
        { question: "What is the next number in the series: 1, 1, 2, 3, 5, ?", options: ["8", "6", "7", "9"], points: [5, 2, 3, 4] }

        
    ],
    "Interests": [
        { question: "Which type of activity do you enjoy the most?", options: ["Creative projects", "Analytical tasks", "Social activities", "Physical challenges"], points: [5, 4, 3, 2] },
        { question: "What type of books do you prefer reading?", options: ["Fiction and novels", "Non-fiction and biographies", "Technical and academic", "Self-help and motivational"], points: [5, 4, 3, 2] }, 
        { question: "In your free time, you are most likely to:", options: ["Experiment with new hobbies", "Learn something new", "Spend time with friends", "Watch TV or movies"], points: [5, 4, 3, 2] }, 
        { question: "What kind of music do you prefer?", options: ["Classical and instrumental", "Pop and contemporary", "Rock and alternative", "Jazz and blues"], points: [5, 4, 3, 2] }, 
        { question: "Which of the following activities sounds most appealing to you?", options: ["Traveling to new places", "Attending workshops and seminars", "Participating in sports", "Volunteering for a cause"], points: [5, 4, 3, 2] }, 
        { question: "What kind of movies do you enjoy?", options: ["Science fiction and fantasy", "Documentaries and educational", "Comedies and dramas", "Action and thrillers"], points: [5, 4, 3, 2] }, 
        { question: "Which career would you be most interested in?", options: ["Artist or designer", "Scientist or researcher", "Business or marketing", "Athlete or coach"], points: [5, 4, 3, 2] }, 
        { question: "How do you prefer to spend your weekends?", options: ["Exploring new places or activities", "Working on personal projects", "Socializing with friends and family", "Relaxing and unwinding at home"], points: [5, 4, 3, 2] }, 
        { question: "What type of podcasts or shows do you enjoy?", options: ["Creative and storytelling", "Educational and informative", "Talk shows and interviews", "Comedy and entertainment"], points: [5, 4, 3, 2] }, 
        { question: "What kind of volunteer work would you be most interested in?", options: ["Teaching or mentoring", "Environmental conservation", "Community service", "Event organizing"], points: [5, 4, 3, 2] }

        
        
    ],
    "Behavior": [
        { question: "When faced with a challenging problem, you usually:", options: ["Take time to analyze and solve it", "Ask for help from others", "Avoid it if possible", "Take a break and return later"], points: [5, 4, 2, 3] }, 
        { question: "In group projects, you often:", options: ["Take a leadership role", "Collaborate with team members", "Complete your assigned tasks independently", "Prefer not to participate"], points: [5, 4, 3, 2] }, 
        { question: "How do you react to sudden changes in plans?", options: ["Adjust quickly and continue", "Feel frustrated but adapt", "Resist the change", "Seek clarification before proceeding"], points: [5, 3, 2, 4] }, 
        { question: "When you make a mistake, you typically:", options: ["Admit it and correct it", "Try to fix it on your own", "Avoid discussing it with others", "Blame external factors"], points: [5, 4, 2, 3] }, 
        { question: "How do you handle disagreements with colleagues?", options: ["Discuss openly and find a compromise", "Agree to disagree", "Avoid confrontation", "Stand firm on your position"], points: [5, 4, 2, 3] }, 
        { question: "When you need to meet a deadline, you:", options: ["Plan and work ahead", "Work intensively as the deadline approaches", "Delegate tasks to others", "Procrastinate until the last moment"], points: [5, 4, 3, 2] }, 
        { question: "How do you prioritize tasks?", options: ["Based on deadlines and importance", "Based on what interests you most", "Based on what others ask you to do", "Based on convenience"], points: [5, 4, 3, 2] }, 
        { question: "How often do you seek feedback on your work?", options: ["Regularly", "Occasionally", "Rarely", "Never"], points: [5, 4, 3, 2] }, 
        { question: "When working on a long-term project, you:", options: ["Set milestones and track progress", "Work steadily without tracking", "Focus on the immediate tasks", "Get overwhelmed and lose focus"], points: [5, 4, 3, 2] }, 
        { question: "How do you approach solving interpersonal conflicts?", options: ["Address the issue directly and respectfully", "Try to mediate between parties", "Avoid confrontation and hope it resolves", "Seek external help or advice"], points: [5, 4, 2, 3] }

    ]
};
let categoryOrder = ["Personality", "Aptitude", "Interests", "Behavior"];
let currentCategoryIndex = 0;
let currentQuestionIndex = 0;
let timer;
let timeLeft = 3;
let totalPoints = 0; // Initialize totalPoints

document.getElementById('start-btn').addEventListener('click', startTest);
document.getElementById('restart-btn').addEventListener('click', restartTest);
document.getElementById('restart-btn-result').addEventListener('click', restartTest);

function startTest() {
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('test-page').classList.remove('hidden');
    totalPoints = 0; // Reset totalPoints
    showCategory();
}

function restartTest() {
    currentCategoryIndex = 0;
    currentQuestionIndex = 0;
    document.getElementById('result-page').classList.add('hidden');
    document.getElementById('start-page').classList.remove('hidden');
}

function showCategory() {
    if (currentCategoryIndex < categoryOrder.length) {
        let category = categoryOrder[currentCategoryIndex];
        document.getElementById('category-title').innerText = `${category} section starts in:`;
        document.getElementById('category-info').style.display = 'block';
        document.getElementById('question').style.display = 'none';
        document.getElementById('options-container').style.display = 'none';
        timeLeft = 3;
        document.getElementById('category-timer').innerText = timeLeft;
        timer = setInterval(updateTimer, 1000);
    } else {
        showResult();
    }
}

function updateTimer() {
    timeLeft--;
    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById('category-info').style.display = 'none';
        showQuestion();
    } else {
        document.getElementById('category-timer').innerText = timeLeft;
    }
}

function showQuestion() {
    let category = categoryOrder[currentCategoryIndex];
    let categoryQuestions = questions[category];
    
    if (currentQuestionIndex < categoryQuestions.length) {
        let question = categoryQuestions[currentQuestionIndex];
        document.getElementById('question').innerText = question.question;
        document.getElementById('options-container').innerHTML = question.options.map((option, index) =>
            `<div class="option" onclick="selectOption(${index}, ${question.points[index]})">${option}</div>`
        ).join('');
        document.getElementById('question').style.display = 'block';
        document.getElementById('options-container').style.display = 'block';
    } else {
        currentCategoryIndex++;
        currentQuestionIndex = 0;
        showCategory();
    }
}

function selectOption(index, points) {
    totalPoints += points; // Add points for the selected option
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    document.getElementById('test-page').classList.add('hidden');
    document.getElementById('result-page').classList.remove('hidden');

    let resultDescription = "";

    if (totalPoints <= 80) {
        resultDescription = "Your results indicate that there is significant room for growth in all areas: personality, aptitude, behavior, and interests. You might benefit from exploring different activities to better understand your strengths and preferences. Building your problem-solving skills, improving your behavioral management techniques, and discovering new interests can help you develop a more well-rounded profile. This is a great opportunity to work on self-awareness, focus on personal growth, and gradually improve in areas that may currently feel unfamiliar. With consistent effort and curiosity, you’ll likely find strengths that surprise you as you develop new skills and interests.";
    } else if (totalPoints <= 140) {
        resultDescription = "Your results show a well-rounded profile with balanced strengths in personality, aptitude, behavior, and interests. You exhibit good problem-solving abilities and an understanding of your interests, and your behavior reflects effective teamwork and adaptability. While you handle different situations well, there are still areas where you can further develop and fine-tune your abilities, such as honing decision-making skills or exploring new interests to broaden your horizons. Overall, you have a solid foundation for success in both personal and professional life, with the potential for continued growth as you build on your existing strengths.";
    } else if (totalPoints <= 200) {
        resultDescription = "Your results suggest a strong profile with clear strengths in personality, aptitude, behavior, and interests. You demonstrate excellent problem-solving abilities, strong leadership traits, and a well-defined set of interests that align with your goals. Your behavior is effective in both individual and group settings, and you excel in adapting to challenges. While you may find success in many areas, further exploration of niche interests or specific skills could take you to the next level. Overall, your well-developed profile suggests that you are on a clear path toward achieving your personal and professional ambitions.";
    } else if (totalPoints <= 260) {
        resultDescription = "Your results reveal an exceptionally well-developed profile with strengths in all areas: personality, aptitude, behavior, and interests. You possess excellent problem-solving skills, a deep understanding of your interests, and effective leadership and teamwork traits. You are highly adaptable, able to navigate challenges with ease, and your interests span diverse fields, indicating both intellectual curiosity and a drive to succeed. Your profile suggests that you are well-prepared for personal and professional success, with the ability to excel in your chosen field. Continued exploration and growth in new areas will only enhance your already impressive strengths.";
    }

    document.getElementById('result-description').innerText = resultDescription;
}
