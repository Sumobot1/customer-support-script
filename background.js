chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	console.log(request.url);
	//chrome.tabs.getCurrent(function(current){console.log(current)});
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  console.log(tabs[0].index);
  chrome.tabs.create({url: "https://videostream.freshdesk.com"+request.url,index: tabs[0].index+1});
});
	//console.log(chrome.extension.getURL());
	
	console.log("hello");
	sendResponse();
});