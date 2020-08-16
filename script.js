const showTime = $('.showTime');
const inspire = $('.inspire');
const project = $('#project')
const schedule = $('#schedule')
const quiz = $('#quiz')
const github = $('#github')
const resume = $('#resume')


$(document).ready(function () {

    var classCycle = ['img1', 'img2', 'img3', 'img4', 'img5'];

    var quotes = ['“It is important to expect nothing, to take every experience, including the negative ones, as merely steps on the path, and to proceed.” -Ram Das',
        '“Be kind, for everyone you meet is fighting a hard battle.” –Plato',
        '“Logic will get you from A to B. Imagination will take you everywhere.” –Albert Einstein',
        '“If you correct your mind, the rest of your life will fall into place.” –Lao Tzu',
        "“The truth is not always beautiful, nor beautiful words the truth.” ―Lao Tzu",
        '“Love is a decision. Not an emotion.” ―Lao Tzu',
        '“It is a mistake to try to look too far ahead. The chain of destiny can only be grasped one link at a time.” -Winston Churchill',
        '“Employ your time in improving yourself by other men’s writings so that you shall come easily by what others have labored hard for.” -Winston Churchill',
        '"Be here, now." -Ram Das',
        '“Solitary trees, if they grow at all, grow strong.” -Winston Churchill',
        '“Should you find a wise critic to point out your faults, follow him as you would a guide to hidden treasure.” -Buddha',
        '“All conditioned things are impermanent—when one sees this with wisdom, one turns away from suffering.” -Buddha',
        '“We’re fascinated by the words, but where we meet is in the silence behind them.” -Ram Das',
        '“We’re all just walking each other home.” -Ram Das',
        '“Treat everyone you meet like God in drag.” -Ram Das',
        '"Live as if you were to die tomorrow. Learn as if you were to live forever." -Gandhi',
    ]

    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    inspire.text(randomQuote)

    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];

    $('body').addClass(classToAdd);

    setInterval(() => {
        const now = moment();
        const humanReadable = now.format('h:mm');

        showTime.text(humanReadable);
        
    }, 1000);
})

$("#project").click(function(){
    window.location = "https://hilbug.github.io/adults-pet-finder/";
})

$("#schedule").click(function(){
    window.location = "https://reedsantos.github.io/Javascript-Schedule-App/";
})
$("#quiz").click(function(){
    window.location = "https://reedsantos.github.io/Geo-quiz/";
})
$("#github").click(function(){
    window.location = "https://github.com/Reedsantos/";
})
$("#resume").click(function(){
    window.location = "./resume.pdf";
});
