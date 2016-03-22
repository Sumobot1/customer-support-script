chrome.runtime.sendMessage({ action: "query", data: "getAllInformation" }, function() { console.log("asked for all the information"); });
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.job === "answer") {
        var questionlist = request.questions; //"[\""+//("  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ", "\",\"");
        var answerlist = request.answers;
        var listofkeywords = request.keywords;
        var keywordlengths = request.keywordlengths;
        var keywordlengthstartingindexes = request.keywordlengthstart;
        /*console.log("request.questions ", request.questions);
        console.log("request.answers ", request.answers);
        console.log("request.keywords ", request.keywords);
        console.log("List of keywordlengths: ", keywordlengths);
        console.log("List of keyword length starting indexes: ", keywordlengthstartingindexes);*/
        document.getElementById("questions").innerText = "var arsQuestions = " + toAnswer(request.questions, "string") + "\"];";
        document.getElementById("answers").innerText = "var arsAnswers = " + toAnswer(request.answers, "string") + "\"];";
        document.getElementById("list-of-keywords").innerText = "var arsWords = [\n" + toAnswer(request.keywords, "string").substr(0, toAnswer(request.keywords, "string").length - 4) + "\n];";
        document.getElementById("list-of-keyword-lengths").innerText = "var arsWordLengths = " + toAnswer(request.keywordlengths, "int") + "];";
        document.getElementById("list-of-keyword-starts").innerText = "var arsWordLengthStarts = [\n" + toAnswer(request.keywordlengthstart, "int").substr(0, toAnswer(request.keywordlengthstart, "int").length - 3) + "\n];";

        /*        console.log(request.questions);
                var questionlist = request.questions.split("  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ");
                var answerlist = request.answers.replace(/\n/g, "\\n");
                answerlist = answerlist.replace(/"/g, '\\"');
                answerlist = answerlist.replace(/'/g, "\\\'");
                answerlist = answerlist.split("  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ");
                var listofkeywords = request.keywords.split("  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex    newarraydklfdaslkfakflasdkljadsfjknewarray  ");
                for (var i = 0; i < listofkeywords.length; i++) {
                    listofkeywords[i] = listofkeywords[i].split("  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ");
                }
                //console.log(listofkeywords);
                console.log("questionlist: ", questionlist);
                questionlist = OneDArrayToString(questionlist, "string");
                document.getElementById("questions").innerText = "var arsQuestions = " + questionlist;
                answerlist = OneDArrayToString(answerlist, "string");
                document.getElementById("answers").innerText = "var arsAnswers = " + answerlist;*/
        /*listofkeywordlengths = [];
        for (var i = 0; i < listofkeywords.length; i++) {
            listofkeywordlengths.push([listofkeywords[i][0].length, i]);
        }
        console.log("listofkeywordlengths ", listofkeywordlengths);
        var workingArray = listofkeywordlengths.slice();
        sortArrayByLength(listofkeywordlengths, 0, listofkeywordlengths.length, workingArray);
        console.log("WorkingArray: ", workingArray, " lengthArray: ", listofkeywordlengths);
        var workingArrayFinal = [], workingArrayFinalLengths = [];
        for (var i = 0;i<listofkeywordlengths.length;i++){
            workingArrayFinal[i] = listofkeywords[listofkeywordlengths[i][1]];
            workingArrayFinalLengths[i] = listofkeywordlengths[i][0];
        }*/
        /*        listofkeywords = TwoDArrayToString(listofkeywords);
                workingArrayFinal = TwoDArrayToString(workingArrayFinal);
                workingArrayFinalLengths = OneDArrayToString(workingArrayFinalLengths, "int");
                document.getElementById("list-of-keywords").innerText = "var arsWords = " + workingArrayFinal;
                document.getElementById("list-of-keyword-lengths").innerText = "var arsWordLengths = "+workingArrayFinalLengths;*/
        //console.log(questionlist);
        // console.log(String(questionlist)," ",String(answerlist), " ", String(listofkeywords));
    }
    //console.log("skfajld ", request.question, request.answer, request.keywords);
});

//GOING TO USE A MERGE SORT HERE BECAUSE APPARENTLY IT'S EFFICIENT LOL
/*function sortArrayByLength(lengthArray, nStart, nEnd, workingArray) {
    if (nEnd - nStart < 2) {
        return;
    } else {
        var nMiddle = parseInt((nStart + nEnd) / 2);
        sortArrayByLength(lengthArray, nStart, nMiddle, workingArray);
        sortArrayByLength(lengthArray, nMiddle, nEnd, workingArray);
        merge(lengthArray, nStart, nMiddle, nEnd, workingArray);

    }

};

function merge(lengthArray, nStart, nMiddle, nEnd, nWorking) {
    var i = nStart,
        j = nMiddle;
    for (var k = nStart; k < nEnd; k++) {
        if (i<nMiddle && (j>=nEnd || lengthArray[i][0]<lengthArray[j][0])) {
            nWorking[k] = lengthArray[i];
            i++;
        } else {
            nWorking[k] = lengthArray[j];
            j++;
        }
    }
    console.log(lengthArray.length, nWorking.length);
    for (var p = nStart;p<nEnd;p++){
        lengthArray[p] = nWorking[p];
    }
    console.log("In Merge: lengthArray: ", lengthArray, " nWorking: ", nWorking);

};*/

function toAnswer(something, type) {
    if (type === "string") {
        something = something.replace(/\n/g, "\\n");
        something = something.replace(/\"/g, "\\\"")
        something = something.replace(/  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex    newarraydklfdaslkfakflasdkljadsfjknewarray  /g, "\"],\n[\"");
        //console.log("current something: ", something);
        something = something.replace(/  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  /g, "\",\"");
        something = "[\"" + something;
    } else if (type === "int") {
        something = something.replace(/  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex    newarraydklfdaslkfakflasdkljadsfjknewarray  /g, "],\n[");
        //console.log("current something: ", something);
        something = something.replace(/  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  /g, ",");
        something = "[" + something;
    }

    return something;
};

function OneDArrayToString(array, type) {
    var sFin = "[";
    for (var i = 0; i < array.length; i++) {
        if (type === "string") {
            //console.log(array[i], i);
            sFin += "\"" + array[i] + "\"" + ",";
        } else if (type === "int") {
            if (array[i] != 0) {
                sFin += array[i] + ",";
            }
        }
    }
    sFin = sFin.substr(0, sFin.length - 1);
    sFin += "];";
    //console.log(sFin);
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
        /*        if (array[i].length === 0){
                    console.log("rekt");
                }*/
        sFin = sFin.substr(0, sFin.length - 1);
        //console.log(" ddgfhjg :",sFin.charAt(sFin.length), " ", sFin.charAt(sFin.length-1), " ", sFin.charAt(sFin.length-2));
        if (sFin.charAt(sFin.length - 1) != "\"") {
            //console.log("get fucked");
        } else {
            sFin += "], \n";
        }

    }
    sFin = sFin.substr(0, sFin.length - 3);
    sFin += "\n];";
    return sFin;
}
