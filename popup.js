window.onload = function() {


    window.setInterval(function() {
        chrome.runtime.sendMessage({ action: "query", type: "getKeyWords" }, function(type) {
        });
    }, 1000);
    chrome.runtime.onMessage.addListener(function(requesttrans, sendertrans, sendResponsetrans) { 
        if (requesttrans.job === "gotstuff") {
            document.getElementById("current-keyword-array").innerText = requesttrans.text;
            document.getElementById("current-answer").innerText = requesttrans.text2;
        }
        else if (requesttrans.job === "confirm"){
            if (requesttrans.state === "ready"){
                document.getElementById("typos").value = requesttrans.keywords;
                document.getElementById("typos").style.display = "block";
                document.getElementById("confirmtypos").style.display = "block";
            }
        }
    });
    document.getElementById("confirmtypos").addEventListener("click", function(){
                document.getElementById("typos").style.display = "block";
                document.getElementById("confirmtypos").style.display = "block";
                chrome.runtime.sendMessage({action: "query", data: "wordstotranslate", typos: document.getElementById("typos").value})        
    });
    document.getElementById("submit-answer").addEventListener("click", function() {
        if (localStorage.getItem("question") === null) {
            localStorage.setItem("question", "start");
        }
        if (localStorage.getItem("answer") === null) {
            localStorage.setItem("answer", "start");
        }
        var questiontextquestion = localStorage.getItem("question");
        questiontextquestion += "  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ";
        questiontextquestion += document.getElementById("current-keyword-array").innerText;
        localStorage.setItem("question", questiontextquestion);
        var answertext = localStorage.getItem("answer");
        answertext += "  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ";
        answertext += document.getElementById("current-answer").innerText;
        localStorage.setItem("answer", answertext);
        chrome.runtime.sendMessage({action: "submit", text: document.getElementById("current-keyword-array").innerText, answer: document.getElementById("current-answer").innerText});
    });
    document.getElementById("submit-new-answer").addEventListener("click", function() {
        if (localStorage.getItem("question") === null) {
            localStorage.setItem("question", "start");
        }
        if (localStorage.getItem("answer") === null) {
            localStorage.setItem("answer", "start");
        }
        var questiontextquestion = localStorage.getItem("question");
        questiontextquestion += "  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ";
        questiontextquestion += document.getElementById("input-field").value;
        localStorage.setItem("question", questiontextquestion);
        var answertext = localStorage.getItem("answer");
        answertext += "  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ";
        answertext += document.getElementById("current-answer").innerText;
        localStorage.setItem("answer", answertext);
        chrome.runtime.sendMessage({action: "submit", text: document.getElementById("input-field").value, answer: document.getElementById("current-answer").innerText});
    });
    document.getElementById("show-db").addEventListener("click", function() {
        chrome.runtime.sendMessage({action: "query", data: "database-printout"});
    });
    document.getElementById("inject-answer-button").addEventListener("click", function(){
        chrome.runtime.sendMessage({action: "inject", text: document.getElementById("inject-answer").value});
    }) ;
    document.getElementById("gettypos").addEventListener("click", function(){
        chrome.runtime.sendMessage({action: "query", data: "typos"});
    });
    document.getElementById("organize-db").addEventListener("click", function(){
        console.log("organize-db has been requested");
        chrome.runtime.sendMessage({action: "organize-db"});
    });
}