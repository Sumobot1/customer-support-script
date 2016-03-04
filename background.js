var queue = [];
var translating = false;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("sender: ", sender);
    console.log("sender: ", sender.tab.index);
    if (request.action === "query") {

        if (request.type === "getURL") {
            if (sender.url.indexOf("https://videostream.freshdesk.com/helpdesk/tickets/") > -1) {
                console.log("ticket");
                sendResponse("ticket");
            } else if (sender.url === "https://videostream.freshdesk.com/helpdesk/tickets" || sender.url.indexOf("https://videostream.freshdesk.com/helpdesk/tickets/filter") > -1 || sender.url.indexOf("https://videostream.freshdesk.com/helpdesk/tickets/view") > -1) {
                console.log("ticketlist");
                sendResponse("ticketlist");
            } else if (sender.url.indexOf("translate.google.com") > -1) {
                console.log("translate");
                sendResponse("translate");
            }
        }
    } else if (request.action === "openvs") {
        if (sender.url.indexOf("https://videostream.freshdesk.com/helpdesk/tickets") > -1) {
            console.log(request.url);
            console.log("sender: ", sender.url);
            console.log("anoose");
            //chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
            //console.log(tabs[0].index);
            chrome.tabs.create({ url: "https://videostream.freshdesk.com" + request.url, index: sender.tab.index + 1 });
            //});
        }
        /*else{
                chrome.tabs.create({url: request.url});
               }*/
        /*else if (sender.url.indexOf("https://videostream.freshdesk.com/helpdesk/tickets") > -1) {
                    chrome.tabs.create({ url: "https://videostream.freshdesk.com" + request.url, index: tabs[0].index + 1 });
                }*/
        // chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        //      console.log(tabs[0].index);
        //chrome.tabs.create({ url: "https://videostream.freshdesk.com" + request.url, index: sender.tab.index + 1 });  /*tabs[0].index*/
        //   });
        // sendResponse();
    } else if (request.action === "open") {
        chrome.tabs.create({ url: request.url, index: sender.tab.index + 1 });
        //sendResponse();
    }
    /*else if (request.action === "search") {
           var bFound = 0;
           console.log(request.url);
           chrome.tabs.query({ currentWindow: true }, function(tabs) {
               for (var i = 0; i < tabs.length; i++) {
                   console.log("tab: ", i, " ", tabs[i].url, " ", request.url);
                   if (tabs[i].url === request.url) {
                       bFound = 1;
                       console.log("found");
                       //sendResponse(true);
                   }
               }
               console.log("bFound: ", bFound)
                   //console.log("dklfjalkjalkda;d danksssss");
               sendResponse(sender.id, bFound);
           });

       }*/
    else if (request.action === "translate") {
        /*        chrome.runtime.onMessage.addListener(function(requestTranslate, senderTranslate, sendResponseTranslate) {
                    console.log("done ", requestTranslate, " ", senderTranslate);
                    console.log("dlkajakdj ", request, " ", sender);
                    if (requestTranslate.state === "ready") {
                        console.log("state is ready...");
                        console.log(senderTranslate.tab.id);
                        //chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) { console.log(tabs[0].id); });
                        chrome.tabs.sendMessage(senderTranslate.tab.id, { string: request.text, origin: senderTranslate.tab.id }, function() {
                            console.log("response: finished");
                            sendResponseTranslate();
                        });
                        chrome.runtime.onMessage.addListener(function(requestTranslateDone, senderTranslateDone, sendResponseTranslateDone) {
                            if (requestTranslateDone.action === "translatecomplete") {
                                console.log("alalalalala ", requestTranslateDone.text);
                            }
                        })
                    };
                    sendResponseTranslate();
                });*/
        console.log("request: ", request.text, " sender: ", sender.tab.id, " type: ", request.type);
        queue.push([request.text, sender.tab.id, request.type]);
        console.log(queue);
        //sendResponse();

    } else if (request.state === "ready") {
        console.log("state is ready...");
        var myVar = window.setInterval(function() {
            if (queue.length <= 0) {
                clearInterval(myVar);
            } else {
                if (!translating) {
                    var dank = queue.shift();
                    console.log("dank: ", dank, "queue: ", queue, " sender: ", sender, "request: ", request);
                    chrome.tabs.sendMessage(sender.tab.id, { job: "solve", string: dank[0], origin: dank[1], type: dank[2] }, function() { console.log("done bro") });
                    translating = true;
                }
            }

        }, 500);

        /*        console.log(senderTranslate.tab.id);
                //chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) { console.log(tabs[0].id); });
                chrome.tabs.sendMessage(senderTranslate.tab.id, { string: request.text, origin: senderTranslate.tab.id }, function() {
                    console.log("response: finished");
                    sendResponseTranslate();
                });
                chrome.runtime.onMessage.addListener(function(requestTranslateDone, senderTranslateDone, sendResponseTranslateDone) {
                    if (requestTranslateDone.action === "translatecomplete") {
                        console.log("alalalalala ", requestTranslateDone.text);
                    }
                })*/
    } else if (request.action === "translatecomplete") {
        console.log("Translate Completed... request: ", request, " sender: ", sender);
        console.log("Going back: To: ", request.sender.origin, " text: ", request.text, " type: ", request.sender.type);
        translating = false;
        chrome.tabs.sendMessage(request.sender.origin, { job: "translationDoneFinishUp", text: request.text, type: request.sender.type });
    }





    //console.log(chrome.extension.getURL());

    console.log("hello");
    sendResponse();
});
//var src = document.getElementById('source');src.focus();src.select();     //CAN PASTE INTO HERE - GOOGLE TRANSLATE
//document.getElementById("result_box").children[0].innerText
//CAN GET RESULT FROM HERE
