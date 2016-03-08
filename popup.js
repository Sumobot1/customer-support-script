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
        var question = localStorage.getItem("question");
        question += "  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ";
        question += document.getElementById("current-keyword-array").innerText;
        localStorage.setItem("question", question);
      //  console.log(localStorage.getItem("answer"));
        var answer = localStorage.getItem("answer");
        answer += "  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ";
        answer += document.getElementById("current-answer").innerText;
        localStorage.setItem("answer", answer);
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
        var question = localStorage.getItem("question");
        question += "  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ";
        question += document.getElementById("input-field").value;
        localStorage.setItem("question", question);
      //  console.log(localStorage.getItem("answer"));
        var answer = localStorage.getItem("answer");
        answer += "  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ";
        answer += document.getElementById("current-answer").innerText;
        localStorage.setItem("answer", answer);

        //console.log(document.getElementById("input-field").value); 
        chrome.runtime.sendMessage({action: "submit", text: document.getElementById("input-field").value, answer: document.getElementById("current-answer").innerText});
    });
    document.getElementById("show-db").addEventListener("click", function() {
        if (localStorage.getItem("question") === null) {
        //    console.log("here");
            localStorage.setItem("question", "start");
        }
        if (localStorage.getItem("answer") === null) {
            localStorage.setItem("answer", "start");
        }
    //    console.log("alsdkfalkjfafjdk: ", localStorage.getItem("question"));
        var question = localStorage.getItem("question");
        question += "  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  "
    //    console.log(localStorage.getItem("answer"));
        chrome.runtime.sendMessage({action: "query", data: "database"});

    }); 
//    console.log('dlfkajdlkajfakljdfljaklfkjalfdkjda');
}




//alert("dkaljfdkladfla");
