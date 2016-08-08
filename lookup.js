var chrunchbase = chrome.contextMenus.create({
  "title": "Chrunchbase: '%s'",
  "contexts": ['selection'],
  "onclick": function(info, tab) {
    chrome.tabs.create({url: googleUrl(info.selectionText + ' Crunchbase')});
  },
});

var angelList = chrome.contextMenus.create({
  "title": "Angel List: '%s'",
  "contexts": ['selection'],
  "onclick": function(info, tab) {
    chrome.tabs.create({url: googleUrl(info.selectionText + ' AngelList')});
  },
});

var linkedin = chrome.contextMenus.create({
  "title": "LinkedIn: '%s'",
  "contexts": ['selection'],
  "onclick": function(info, tab) {
    chrome.tabs.create({url: googleUrl(info.selectionText + ' LinkedIn')});
  },
});

// English is not my native language! :(
var meaning = chrome.contextMenus.create({
  "title": "Meaning of '%s'",
  "contexts": ['selection'],
  "onclick": function(info, tab) {
    chrome.tabs.create({url: googleUrl(info.selectionText + ' meaning')});
  },
});

function googleUrl(query) {
	return 'https://google.com/#q=' + encodeURIComponent(query);
}