var items = [
  'Chrunchbase',
  'AngelList',
  'LinkedIn',
  'Bloomberg',
  'Meaning',
]

for(i = 0; i < items.length; i++) {
  let item = items[i];  // `let` to create a avoid closure capture.
  chrome.contextMenus.create({
    "title": item + ": '%s'",
    "contexts": ['selection'],
    "onclick": function(info, tab) {
      chrome.tabs.create({url: googleUrl(info.selectionText + ' ' + item)});
    },
  });
}

function googleUrl(query) {
  return 'https://google.com/#q=' + encodeURIComponent(query);
}
