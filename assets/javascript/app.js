
var problem_array = [
    {
        question: "The slogan for which auto brand is 'the best or nothing'?",
        answer: ["Benz", "Honda", "Ford", "Toyota"],
        rightAnswer: "Benz"
    },
    {
        question: "Which car brand produces the V12-powered Aventador and the V10-powered Huracan?",
        answer: ["Lamborghini", "Ferrari", "VW", "Acura"],
        rightAnswer: "Lamborghini"
    },
    {
        question: "In 1971, the Rolls-Royce Silver Shadow two door models were given what name?s",
        answer: ["Corniche", "Phatom", "Ex", "Escalade"],
        rightAnswer: "Corniche"
    },
    {
        question: "The Beetle was the world's best selling vehicle of all time until the late 1990s, when it was overtaken by which car?",
        answer: ["Benz E Class", "Honda Civic", "Ford Focus", "Toyota Corolla"],
        rightAnswer: "Toyota Corolla"
    },
    {
        question: "Who appeared in Top Gear alongside Richard Hammond and Jeremy Clarkson from 2003 to 2015?",
        answer: ["Charles Hu", "James May", "Victoria Lin", "No One"],
        rightAnswer: "James May"
    },
    {
        question: "What flag is waved to start the 24 Hours of Le Mans race?",
        answer: ["French flag", "British Flag", "US flag", "Italian Flag"],
        rightAnswer: "French Flag"
    },
    {
        question: "What was the top selling car in the UK in 2016?",
        answer: ["Benz E Class", "Honda Civic", "Ford Fiesta", "Toyota Corolla"],
        rightAnswer: "Ford Fiesta"
    }
]
var time;
var right=0;
var wrong=0;
var count = 30;
function main() {

    startQuiz();

}
function countdown() {
    count = count - 1;
    $("#counter-time").html(count);
    //document.getElementById("quizArea").innerHTML="<div id='counter'>this is the timer+"+count+"s left</div>";
    if (count === 0) {
        stop();

    }
}
function correct() {

}
function stop() {
    alert("Times UP!");
    $.each($("input[name='q1']:checked"), function () {
        if ($(this).val() === problem_array[0].rightAnswer) {
            right++;
        }
        else {
            wrong++;
        }
        console.log("12345678")
    });
    $.each($("input[name='q2']:checked"), function () {
        if ($(this).val() === problem_array[1].rightAnswer) {
            right++;
        }
        else {
            wrong++;
        }
        console.log("12345678")
    });
    $.each($("input[name='q3']:checked"), function () {
        if ($(this).val() === problem_array[2].rightAnswer) {
            right++;
        }
        else {
            wrong++;
        }
        console.log("12345678")
    });
    $.each($("input[name='q4']:checked"), function () {
        if ($(this).val() === problem_array[3].rightAnswer) {
            right++;
        }
        else {
            wrong++;
        }
        console.log("12345678")
    });
    $.each($("input[name='q5']:checked"), function () {
        if ($(this).val() === problem_array[4].rightAnswer) {
            right++;
        }
        else {
            wrong++;
        }
        console.log("12345678")
    });
    $.each($("input[name='q6']:checked"), function () {
        if ($(this).val() === problem_array[5].rightAnswer) {
            right++;
        }
        else {
            wrong++;
        }
        console.log("12345678")
    });
    $.each($("input[name='q7']:checked"), function () {
        if ($(this).val() === problem_array[6].rightAnswer) {
            right++;
        }
        else {
            wrong++;
        }
        console.log("12345678")
    });
    $("#stuff").remove();
    $("#counter").remove();
    $("#problem").prepend("<div id='result'>There are "+right+" questions right and "+wrong+" wrong "+"</div>")
}
function startQuiz() {
    time = setInterval(countdown, 1000)
    $("#start-button").remove();
    $("#problem").prepend("<div id='counter'>There are <span id='counter-time'>100</span>s left</div>")
    //document.getElementById("problem").innerHTML="<div id=stuff></div>";
    $("#problem").prepend("<div id=stuff></div>")
    console.log("stuff")
    for (var i = 0; i < 7; i++) {
        // document.getElementById("stuff").innerHTML="<h2 id=problem_sets"+[i]+">"+problem_array[i]+"</h2>"
        $("#stuff").append("<h2 id=problem_sets" + [i] + ">" + problem_array[i].question + "</h2>")
        for (var x = 0; x < 4; x++) {
            //document.getElementById("problem_sets"+[i]).innerHTML=
            $("#problem_sets" + [i]).append(
                "<input type='radio' name='q" + [i] + "' value='" + problem_array[i].answer[x] + "'>" + problem_array[i].answer[x]
            )
        }
    }

}


document.getElementById("start-button").addEventListener("click", main);