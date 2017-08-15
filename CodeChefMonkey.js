// ==UserScript==
// @name         CodeChefMonkey
// @version      1.0
// @description  Links practice version of a competition problem
// @author       Gil Vegliach
// @include      https://www.codechef.com/*/problems/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

waitForKeyElements(".problem-info", addLinkFunction);

function addLinkFunction(panels) {
  var panel = panels[0];
  if (panel) {
    var url = window.location.href;
    var from = url.indexOf('/', 8);
    var to = url.indexOf('/', from + 1);
    var newUrl = url.substring(0, from) + url.substring(to);
    var p = document.createElement('p');
    p.innerHTML='<label>Practice link:</label><span><a href="' + newUrl +'">Solve practice problem</a></span>';
    panel.appendChild(p);
  }
}
