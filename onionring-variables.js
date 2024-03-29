// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
'https://neossg.neocities.org/',
'https://flamedfury.com/',
'https://reduxflakes.neocities.org',
'https://bytemoth.neocities.org/webrings/',
'https://nenrikido.neocities.org/links/',
'https://10kph.neocities.org/',
'https://dabric.xyz',
'https://punkfairie.net/',
'https://frills.dev',
'https://san-tagoy.online/',
'https://deadrodrick.neocities.org/home',
'https://vm70.neocities.org',
'https://whiona.me',
'https://nonkiru.art/links/',
'https://lime360.nekoweb.org/',
'https://maria.town/',
'https://ghostologaster.neocities.org/',
'https://punkwasp.neocities.org/'
];

//the name of the ring
var ringName = 'NeoSSG';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'neossg';

//should the widget include a link to an index page?
var useIndex = false;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://example.com/index.html';

//should the widget include a random button?
var useRandom = true;
