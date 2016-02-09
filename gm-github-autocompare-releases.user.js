// ==UserScript==
// @name        gm-github-autocompare-releases
// @namespace   csson.github.com/github-autocompare-releases
// @description Create links to compare releases
// @require     https://code.jquery.com/jquery-2.2.0.min.js
// @include     https://github.com/*/releases
// @version     1
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

let href = window.location.href.replace(/releases$/, '');

let tags = $('.tag-name');

tags.each(function(i) {
    let $el = $(this);
    let thisVersion = $el.text();
    let previousVersion = $(tags[i + 1]).text();
    
    if(previousVersion == '') {
        return;
    }
    $el.parent().parent().after('<a href="' + href + 'compare/' + previousVersion + '...' + thisVersion + '">Compare ' + thisVersion + ' with ' + previousVersion + '</a>');
});
