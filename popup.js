window.onload = function() {


    window.setInterval(function() {
        chrome.runtime.sendMessage({ action: "query", type: "getKeyWords" }, function(type) {
            console.log("daklfdakljfalkj");
        });
    }, 1000);
    chrome.runtime.onMessage.addListener(function(requesttrans, sendertrans, sendResponsetrans) { //External
        if (requesttrans.job === "gotstuff") {
            console.log("got dat message");
            console.log(requesttrans.text);
            document.getElementById("current-keyword-array").innerText = requesttrans.text;
            document.getElementById("current-answer").innerText = requesttrans.text2;
            //sendResponse();
        } /*else if (requesttrans.job === "query") {
            console.log("oh look a query is here");
            chrome.runtime.sendMessage({action: "keywords" question: localStorage.getItem("question"), answer: localStorage.getItem("answer"), origin: requesttrans }, function() { console.log("dankness forever"); });
        }*/
        else if (requesttrans.job === "confirm"){
            console.log("popup got confirm message");
            if (requesttrans.state === "ready"){
                //var sWordsfortypostobefoundon = requesttrans.keywords;
                document.getElementById("typos").value = requesttrans.keywords;
                document.getElementById("typos").style.display = "block";
                document.getElementById("confirmtypos").style.display = "block";
            }
        }

    });
    document.getElementById("confirmtypos").addEventListener("click", function(){
                document.getElementById("typos").style.display = "block";
                document.getElementById("confirmtypos").style.display = "block";
                console.log("typos to be generated: ", document.getElementById("typos").value);
                chrome.runtime.sendMessage({action: "query", data: "wordstotranslate", typos: document.getElementById("typos").value})        
    });
    document.getElementById("submit-answer").addEventListener("click", function() {
        if (localStorage.getItem("question") === null) {
          //  console.log("here");
            localStorage.setItem("question", "start");
        }
        if (localStorage.getItem("answer") === null) {
            localStorage.setItem("answer", "start");
        }
      //  console.log("alsdkfalkjfafjdk: ", localStorage.getItem("question"));
        var questiontextquestion = localStorage.getItem("question");
        questiontextquestion += "  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ";
        questiontextquestion += document.getElementById("current-keyword-array").innerText;
        localStorage.setItem("question", questiontextquestion);
      //  console.log(localStorage.getItem("answer"));
        var answertext = localStorage.getItem("answer");
        answertext += "  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ";
        answertext += document.getElementById("current-answer").innerText;
        localStorage.setItem("answer", answertext);
        chrome.runtime.sendMessage({action: "submit", text: document.getElementById("current-keyword-array").innerText, answer: document.getElementById("current-answer").innerText});
    });
    document.getElementById("submit-new-answer").addEventListener("click", function() {
        if (localStorage.getItem("question") === null) {
          //  console.log("here");
            localStorage.setItem("question", "start");
        }
        if (localStorage.getItem("answer") === null) {
            localStorage.setItem("answer", "start");
        }
      //  console.log("alsdkfalkjfafjdk: ", localStorage.getItem("question"));
        var questiontextquestion = localStorage.getItem("question");
        questiontextquestion += "  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ";
        questiontextquestion += document.getElementById("input-field").value;
        console.log("question: ", questiontextquestion);
        localStorage.setItem("question", questiontextquestion);
      //  console.log(localStorage.getItem("answer"));
        var answertext = localStorage.getItem("answer");
        answertext += "  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ";
        answertext += document.getElementById("current-answer").innerText;
        localStorage.setItem("answer", answertext);

        //console.log(document.getElementById("input-field").value); 
        chrome.runtime.sendMessage({action: "submit", text: document.getElementById("input-field").value, answer: document.getElementById("current-answer").innerText});
    });
    document.getElementById("show-db").addEventListener("click", function() {
        /*if (localStorage.getItem("question") === null) {
        //    console.log("here");
            localStorage.setItem("question", "start");
        }
        if (localStorage.getItem("answer") === null) {
            localStorage.setItem("answer", "start");
        }
    //    console.log("alsdkfalkjfafjdk: ", localStorage.getItem("question"));
        var question = localStorage.getItem("question");
        question += "  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  "*/
    //    console.log(localStorage.getItem("answer"));
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
//    console.log('dlfkajdlkajfakljdfljaklfkjalfdkjda');
}




//alert("dkaljfdkladfla");
