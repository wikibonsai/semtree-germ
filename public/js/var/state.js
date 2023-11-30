const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

var isDark = (localStorage.getItem('is-dark') === 'true') || prefersDarkScheme;
var isMarkdown = localStorage.getItem('is-markdown') === 'true';

var indentKind = localStorage.getItem('indent') ? localStorage.getItem('indent') : '2 spaces';
var textKind = localStorage.getItem('text') ? localStorage.getItem('text') : '[[wiki text]]';
var caseKind = localStorage.getItem('case') ? localStorage.getItem('case') : 'lower';
var whiteSpaceKind = localStorage.getItem('whitespace') ? localStorage.getItem('whitespace') : 'kabob-space';

var resultMkdn = '';
var resultMap = '';
