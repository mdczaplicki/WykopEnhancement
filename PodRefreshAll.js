// ==UserScript==
// @name         PodRefreshAll
// @namespace    https://github.com/mdczaplicki
// @version      1.0
// @description  Path of Diablo refresh all button
// @author       Marek Czaplicki
// @match        https://pathofdiablo.com/p/?account*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var pane = $('h4:contains("Offer")');

    var button = $("<button></button>");
    button.text("Refresh all!");
    button.addClass('btn');
    button.addClass('btn-success');
    button.addClass('btn-xs');

    button.css('float', 'right');
    button.css('width', '300px');

    button.click(function() {refreshAll();});

    pane.append(button);

    function refreshAll() {
        var buttons = $$('.btn.btn-success.btn-xs');
        for (var i = 0; i < buttons.length; ++i) {
            doRefresh(buttons[i]);
        }
    }
})();
