// Код писал Бакытулы Абдрахман
const SUBJECTS = {
    philosophy: {
        name: 'Философия',
        questions: philosophyQuestionsDB
    },
    modularSubjects: { 
        name: 'Модульные предметы',
        questions: modularSubjectsQuestionsDB 
    },
    kulturology: { 
        name: 'Культурология',
        questions: kulturologyQuestionsDB 
    },
    psychology: { 
        name: 'Психология',
        questions: psyhologyQuestionsDB 
    }
};

const allQuestions = Object.entries(SUBJECTS).reduce((acc, [key, subject]) => 
    [...acc, ...subject.questions.map(q => ({...q, subject: key}))], 
[]);

let currentQuestion = null;
let currentSubject = 'all';
let isQuizMode = false;
let quizResults = [];
let totalQuestionsAnswered = 0; 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('main');
    initializeFilterHandlers();
    updateResults();
});

function showSection(section) {
    
    const searchResults = document.getElementById('searchResults');
    if (searchResults) {
        searchResults.innerHTML = '';
    }

    if (section !== 'library') {
        const subjectFilter = document.getElementById('subjectFilter');
        const searchInput = document.getElementById('searchInput');
        const advancedFilters = document.getElementById('advancedFilters');
        
        if (subjectFilter) subjectFilter.value = 'all';
        if (searchInput) searchInput.value = '';
        if (advancedFilters) {
            const radioInputs = advancedFilters.querySelectorAll('input[type="radio"]');
            const checkboxInputs = advancedFilters.querySelectorAll('input[type="checkbox"]');
            
            radioInputs.forEach(input => {
                if (input.value === 'none') input.checked = true;
                else input.checked = false;
            });
            
            checkboxInputs.forEach(input => input.checked = false);
        }
    }

    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('librarySection').style.display = 'none';

    switch(section) {
        case 'main':
            document.getElementById('mainMenu').style.display = 'block';
            break;
        case 'quiz':
            isQuizMode = true; // Устанавливаем режим викторины
            document.getElementById('quizSection').style.display = 'block';
            break;
        case 'library':
            document.getElementById('librarySection').style.display = 'block';
            break;
    }
}
// Функции викторины
function startQuiz() {
    quizResults = [];
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizContent').style.display = 'block';
    currentSubject = document.getElementById('quizSubjectSelect').value;
    nextQuestion();
}

function nextQuestion() {
    const availableQuestions = currentSubject === 'all' ? 
        allQuestions : 
        allQuestions.filter(q => q.subject === currentSubject);

    if (availableQuestions.length === 0) {
        alert('Нет доступных вопросов для выбранного предмета');
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = {...availableQuestions[randomIndex]};
    currentQuestion.options = shuffleArray([...currentQuestion.options]);
    
    displayQuizQuestion(currentQuestion);
}

function displayQuizQuestion(question) {
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    
    questionText.textContent = question.question;
    optionsContainer.innerHTML = question.options.map(option => `
        <button class="option-btn" onclick="checkAnswer('${option}')">${option}</button>
    `).join('');
    
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('nextQuestion').style.display = 'none';
}

function checkAnswer(selectedAnswer) {
    const buttons = document.querySelectorAll('.option-btn');
    const resultMessage = document.getElementById('resultMessage');
    const nextButton = document.getElementById('nextQuestion');

    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === currentQuestion.correct_answer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedAnswer && 
                   selectedAnswer !== currentQuestion.correct_answer) {
            button.classList.add('incorrect');
        }
    });

    const isCorrect = selectedAnswer === currentQuestion.correct_answer;
    
    quizResults.push({
        question: currentQuestion.question,
        userAnswer: selectedAnswer,
        correctAnswer: currentQuestion.correct_answer,
        isCorrect: isCorrect
    });

    if (isCorrect) {
        resultMessage.className = 'result-message correct';
    } else {
        resultMessage.className = 'result-message incorrect';
    }

    nextButton.style.display = 'block';
    totalQuestionsAnswered++; 


    document.getElementById('answerCounter').textContent = `Ответов: ${totalQuestionsAnswered}`;
}

function finishQuiz() {
    const quizContent = document.getElementById('quizContent');
    const quizResultsDiv = document.getElementById('quizResults');
    
    quizContent.style.display = 'none';
    quizResultsDiv.style.display = 'block';

    const correctAnswers = quizResults.filter(r => r.isCorrect).length;
    
    quizResultsDiv.innerHTML = `
        <h3>Результаты викторины</h3> <button onclick="startQuiz()" class="restart-btn">Начать заново</button>
        <p>Правильных ответов: ${correctAnswers} из ${quizResults.length}</p>
        <div class="results-list">
            ${quizResults.map((result, index) => `
                <div class="result-item ${result.isCorrect ? 'correct' : 'incorrect'}">
                    <p class="question-text">${result.question}</p>
                    ${result.userAnswer === result.correctAnswer ? '' : `<p>Ваш ответ: ${result.userAnswer}</p>`}
                    <p>✓: ${result.correctAnswer}</p>
                </div>
            `).join('')}
        </div>
        <button onclick="startQuiz()" class="restart-btn">Начать заново</button>
    `;

 
    totalQuestionsAnswered = 0;
    document.getElementById('answerCounter').textContent = `Ответов: ${totalQuestionsAnswered}`;
}


function initializeFilterHandlers() {
    document.getElementById('searchInput').addEventListener('input', updateResults);
    document.getElementById('subjectFilter').addEventListener('change', updateResults);
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input => input.addEventListener('change', updateResults));
    const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
    checkboxInputs.forEach(input => input.addEventListener('change', updateResults));
    const multipleAnswersFilter = document.getElementById('multipleAnswersFilter');
    const repeatedWordsInput = document.getElementById('repeatedWordsInput');
    multipleAnswersFilter.addEventListener('change', function() {
        repeatedWordsInput.disabled = !this.checked;
        if (!this.checked) {
            repeatedWordsInput.value = '';
        }
        updateResults();
    });
    repeatedWordsInput.addEventListener('input', updateResults);
}
function toggleAdvancedFilters() {
    const advancedFilters = document.getElementById('advancedFilters');
    const toggleButton = document.querySelector('.advanced-filters-toggle');
    
    if (advancedFilters.classList.contains('show')) {
        advancedFilters.classList.remove('show');
        toggleButton.textContent = 'Расширенные фильтры ▼';
    } else {
        advancedFilters.classList.add('show');
        toggleButton.textContent = 'Расширенные фильтры ▲';
    }
}
function updateResults() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const subject = document.getElementById('subjectFilter').value;
    const lengthFilter = document.querySelector('input[name="lengthFilter"]:checked')?.value || 'none';
    const romanFilter = document.getElementById('romanFilter')?.checked || false;
    const multipleAnswersFilter = document.getElementById('multipleAnswersFilter')?.checked || false;
    const repeatedWordsInput = document.getElementById('repeatedWordsInput').value.toLowerCase().trim();
    const numbersFilter = document.getElementById('numbersFilter')?.checked || false;

    let filtered = allQuestions;
    if (subject !== 'all') {
        filtered = filtered.filter(q => q.subject === subject);
    }
    if (searchText) {
        filtered = filtered.filter(q => 
            q.question.toLowerCase().includes(searchText) ||
            q.options.some(opt => opt.toLowerCase().includes(searchText))
        );
    }
    switch (lengthFilter) {
        case 'options_asc':
            filtered.forEach(q => {
                q.optionsWithLength.sort((a, b) => a.length - b.length);
            });
            break;
        case 'options_desc':
            filtered.forEach(q => {
                q.optionsWithLength.sort((a, b) => b.length - a.length);
            });
            case 'correct_asc':
                filtered = filtered.filter(q => 
                    q.options.length > 0 && 
                    q.correct_answer.length < Math.min(...q.options.filter(opt => opt !== q.correct_answer).map(opt => opt.length))
                ).sort((a, b) => a.correct_answer.length - b.correct_answer.length);
                break;
            case 'correct_desc':
                filtered = filtered.filter(q => 
                    q.options.length > 0 && 
                    q.correct_answer.length > Math.max(...q.options.filter(opt => opt !== q.correct_answer).map(opt => opt.length))
                ).sort((a, b) => b.correct_answer.length - a.correct_answer.length);   
                break;
    }
if (multipleAnswersFilter) {
    filtered = filtered.filter(q => {
        const searchWords = repeatedWordsInput.split(/\s+/).map(word => word.toLowerCase());
        return q.options.some(option => 
            searchWords.some(word => option.toLowerCase().includes(word))
        );
    });
}
    if (romanFilter && subject === 'philosophy') {
        filtered = filtered.filter(q => /\b[IVXLCDM]+\b/.test(q.question));
    }

    if (numbersFilter) {
        filtered = filtered.filter(q => /\d+/.test(q.question));
    }
    filtered = filtered.map(q => ({
        ...q,
        optionsWithLength: q.options.map(opt => ({
            text: opt,
            length: opt.length,
            isCorrect: opt === q.correct_answer
        }))
    }));
    displayResults(filtered);
}
function displayResults(questions, highlightLength = false) {
    const resultsContainer = document.getElementById('searchResults');
    if (document.getElementById('mainMenu').style.display === 'block') {
        return;
    }
    
    if (questions.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">Вопросы не найдены</p>';
        return;
    }

    resultsContainer.innerHTML = questions.map(q => `
        <div class="question-item">
            <p class="question-text">${q.question}</p>
            <div class="options-list">
                ${q.optionsWithLength.map(option => `
                    <div class="option ${option.isCorrect ? 'correct' : ''}">
                        ${option.text}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}
window.showSection = showSection;
window.startQuiz = startQuiz;
window.nextQuestion = nextQuestion;
window.checkAnswer = checkAnswer;
window.finishQuiz = finishQuiz;
window.toggleAdvancedFilters = toggleAdvancedFilters;

