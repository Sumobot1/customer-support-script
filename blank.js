chrome.runtime.sendMessage({ action: "query", data: "getAllInformation" }, function() { console.log("asked for all the information"); });
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.job === "answer") {
        var questionlist = request.questions;
        var answerlist = request.answers;
        var listofkeywords = request.keywords;
        var keywordlengths = request.keywordlengths;
        var keywordlengthstartingindexes = request.keywordlengthstart;
        document.getElementById("questions").innerText = "var arsQuestions = " + toAnswer(request.questions, "string") + "\"];";
        document.getElementById("answers").innerText = "var arsAnswers = " + toAnswer(request.answers, "string") + "\"];";
        document.getElementById("list-of-keywords").innerText = "var arsWords = [\n" + toAnswer(request.keywords, "string").substr(0, toAnswer(request.keywords, "string").length - 4) + "\n];";
        document.getElementById("list-of-keyword-lengths").innerText = "var arsWordLengths = " + toAnswer(request.keywordlengths, "int") + "];";
        document.getElementById("list-of-keyword-starts").innerText = "var arsWordLengthStarts = [\n" + toAnswer(request.keywordlengthstart, "int").substr(0, toAnswer(request.keywordlengthstart, "int").length - 3) + "\n];";
    }
});

function toAnswer(something, type) {
    if (type === "string") {
        something = something.replace(/\n/g, "\\n");
        something = something.replace(/\"/g, "\\\"")
        something = something.replace(/  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex    newarraydklfdaslkfakflasdkljadsfjknewarray  /g, "\"],\n[\"");
        something = something.replace(/  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  /g, "\",\"");
        something = "[\"" + something;
    } else if (type === "int") {
        something = something.replace(/  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex    newarraydklfdaslkfakflasdkljadsfjknewarray  /g, "],\n[");
        something = something.replace(/  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  /g, ",");
        something = "[" + something;
    }
    return something;
};

function OneDArrayToString(array, type) {
    var sFin = "[";
    for (var i = 0; i < array.length; i++) {
        if (type === "string") {
            sFin += "\"" + array[i] + "\"" + ",";
        } else if (type === "int") {
            if (array[i] != 0) {
                sFin += array[i] + ",";
            }
        }
    }
    sFin = sFin.substr(0, sFin.length - 1);
    sFin += "];";
    return sFin;
};

function TwoDArrayToString(array) {
    var sFin = "[ \n";
    for (var i = 0; i < array.length; i++) {
        sFin += "[";
        for (var j = 0; j < array[i].length; j++) {
            if (array[i][j].length != 0) {
                sFin += "\"" + array[i][j] + "\"" + ",";
            }
        }
        sFin = sFin.substr(0, sFin.length - 1);
        if (sFin.charAt(sFin.length - 1) != "\"") {
        } else {
            sFin += "], \n";
        }
    }
    sFin = sFin.substr(0, sFin.length - 3);
    sFin += "\n];";
    return sFin;
};
