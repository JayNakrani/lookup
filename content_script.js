const SITES = [
  'angel.co',
  'crunchbase.com',
  'linkedin.com',
  'pitchbook.com',
  'sharespost.com',
  'ycombinator.com',
]

hotkeys('ctrl+shift+*', function (event, handler) {
  let site = SITES.find(s => hotkeys.isPressed(getShortCode(s)));
  if (site) {
    openSearchTab(getCompanyName(), site);
  }
});

function getCompanyName() {
  let url = new URL(document.location);
  let lastNth = url.pathname.endsWith('/') ? 2 : 1;
  let components = url.pathname.split('/');
  return components[components.length - lastNth];
}

function getShortCode(site) {
  return site.charAt(0);
}

function openSearchTab(company, site) {
  let googleUrl = 'https://www.google.com/search?q=' + company + '+' + encodeURIComponent('site:'+site);
  window.open(googleUrl, '_blank');
}
