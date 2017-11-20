// ==UserScript==
// @name         PodChat
// @namespace    https://github.com/mdczaplicki
// @version      1.0
// @description  Discord chat prettifier
// @author       Jotto
// @match        https://discordapp.com/channels/111158239135064064/338397643174707220
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function $$(selector, context) {
      context = context || document;
      var elements = context.querySelectorAll(selector);
      return Array.prototype.slice.call(elements);
    }

    setInterval(function(){ 
        var list = $$('.markup:not(.modified)');

        for (var i = 0; i < list.length; ++i) {
            var item = list[i];
            item.innerHTML = item.innerHTML.replace('ÿc7', '<p style="color: orange; display: inline">').replace('ÿc2', '</p>').replace('<strong>&lt;chat&gt;</strong> ', '');
            item.className += " modified";
        }
    }, 1000);    
})();
