// ==UserScript==
// @name         CodeChefMonkey
// @version      1.0
// @description  Links practice version of a competition problem on CodeChef
// @author       Gil Vegliach
// @include      https://www.codechef.com/*/problems/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

waitForKeyElements(".problem-info", addLinkFunction);

function addLinkFunction(panels) {
    var panel = panels[0];
    if (panel) {
        var url = removeFirstUrlSegment(window.location.href);
        var p = document.createElement('p');
        p.innerHTML='<label>Practice link:</label><span><a href="' + url +'">Solve practice problem</a></span>';
        panel.appendChild(p);
    }
}

function removeFirstUrlSegment(url) {
    var from = url.indexOf('/', "https://".length);
    var to = url.indexOf('/', from + 1);
    return url.substring(0, from) + url.substring(to);
}
