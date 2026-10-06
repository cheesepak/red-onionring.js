// onionring.js is made up of four files - onionring-widget.js, onionring-index.js (this one!), onionring-variables.js, and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// --- red-onionring.js is an onionring.js fork with additional features ------------------------------
// --- https://github.com/cheesepak/red-onionring.js --------------------------------------------------
// --- last updated 2026-08-05 ------------------------------------------------------------------------

// === ONIONRING-INDEX ===
//this file builds the list of sites in the ring for displaying on your index page

var tag = document.getElementById('index');
regex = /^https:\/\/|\/$/g; //strips the https:// and trailing slash off the urls for aesthetic purposes

// if you've chosen to sort alphabetically, this sorts the sites
if(useSort) {
  function compare( a, b ) {
    if ( a.site < b.site ){
      return -1;
    }
    if ( a.site > b.site ){
      return 1;
    }
    return 0;
  }
  sites.sort(compare);
}

if(useAdvancedIndex) {
  list = "";
  for (const [url, data] of Object.entries(sites)) {
    //this is the code that displays the index widget - EDIT THIS if you want to change the structure
    list += `
      <div class="sites">
        <div class="badge"><img src="${data.badge}"></div>
        <div class="title">${data.title}</div>
        <div class="description">${data.description}</div>
        <div class="site"><a href='${url}'>${url}</a></div>
        <div class="owner">${data.owner}</div>
      </div>
    `;    
  }

  tag.insertAdjacentHTML('afterbegin', `
    <p>the ${ringName} webring includes ${Object.keys(sites).length} sites</p>
      ${list}
    `);  
}
else { 
  list = "";
  for (const [url, data] of Object.entries(sites)) {
    const displayURL = new URL(data.title).hostname; 
    list += `<li><a href='${url}'>${displayURL}</a></li>`;
  }
  
  tag.insertAdjacentHTML('afterbegin', `
  <p>the ${ringName} webring includes ${Object.keys(sites).length} sites</p>
  <ul>
    ${list}
  </ul>
  `);
}
