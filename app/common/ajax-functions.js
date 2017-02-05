'use strict';

var appUrl = window.location.origin;
var ajaxFunctions = {
  ready: function ready (fn) {
    console.log("ready fn started");
    if (typeof fn !== 'function') {
      return;
    }

    if (document.readyState === 'complete') {
      return fn();
    }

    document.addEventListener('DOMContentLoaded, fn, false');
  },
  ajaxRequest: function ajaxRequest (method, url, callback) {
    console.log("request started");
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        callback(xmlhttp.response);
      }
    };

    xmlhttp.open(method, url, true);
    xmlhttp.send();
  }
};
