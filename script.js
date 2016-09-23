var QUESTIONS = [
    {
        text: '<:48:x<:65:=<:6C:$=$=$$~<:03:+$~<:ffffffffffffffbd:+$<:ffffffffffffffb1:+$<:57:~$~<:18:x+$~<:03:+$~<:06:x-$x<:0e:x-$=x<:43:x-$',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 0
    },
    {
        text: '+0+0+0+0+0+0+0+2)+0+0+9)+7))+3)-0-0-0-0-0-0-0-9)+0+0+0+0+0+0+0+0+7)-8)+3)-6)-8)-7-0-0-0-0-0-0)',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 1
    },
    {
        text: '*6*3p*4*3*2*0p*2*1*0pp>0*1*0p*5*4*0p*5*4*2*1*0p*4*3p*1*0p/+0p+0*6*5*2p+0*5*0p',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 2
    },
    {
        text: ']xhhhhooooooooohhhhhhxooooooooxooooooxjjjxhoooohhhxhohhhhhhhxhhhhjjjhhhxhhhhooooooooohhhhhhxjjjxxjjjjjjjxjhhhhxjhhhhhhhhjjjhh~',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 3
    }
];
//What information should be stored?
var state = {
    score: 0,
    questionIndex: 0 
};

var resetCurrentScore = function() {
    state.score = 0;
};
var increaseQuestionIndex = function() {
    state.questionIndex++;
};
var increaseStateScore = function() {
    state.score++;
};

var setQuestion = function() { 
    console.log('question set');
    console.log(state.questionIndex);
    var question = QUESTIONS[state.questionIndex]; 
    $('.question-current').text(state.questionIndex); 
    $('.question').text(question.text); 
    $('.answers').empty(); 
    for (var i=0; i<question.answers.length; i++) { 
        var answer = question.answers[i]; 
        $('.answers').append('<li><button type="button">' + answer + '</button></li>'); 
    }
};

var resetScore = function() { 
    resetCurrentScore();
    $('.score').text(0); 
};

var showResults = function() { 
    $('.questions-page').hide(); 
    $('.results-page').show(); 
};

var showQuestions = function() { 
    $('.results-page').hide(); 
    $('.questions-page').show(); 
};

var increaseScore = function() { 
    var score = state.score; 
    $('.score').text(state.score + 1); 
};

$(document).ready(function() {

    setQuestion(state);

    $('.restart-button').click(function() {
            setQuestion(0);
            resetScore();
            showQuestions();
    });
   
    $('.questions-total').text(QUESTIONS.length);
    setQuestion(0);

    $('.answers').on('click', 'button', function() {
    console.log('clicked asnwer btn');
    var choice = $(this).parent().index();
    var question = QUESTIONS[state.questionIndex];
    if (question.correct === choice) {
        increaseStateScore();
        increaseScore();
    }
    if (state.questionIndex + 1 < QUESTIONS.length) {
        increaseQuestionIndex();
        setQuestion();
    }
    else {
        state.questionIndex = 0;
        showResults();
    }
});
 
});












