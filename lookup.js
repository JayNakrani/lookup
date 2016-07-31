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

function googleUrl(query) {
	return 'https://google.com/#q=' + encodeURIComponent(query);
}