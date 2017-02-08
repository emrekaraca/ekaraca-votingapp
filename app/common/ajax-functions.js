'use strict';

var appUrl = window.location.origin;
var ajaxFunctions = {
  ready: function ready (fn) {
    if (typeof fn !== 'function') {
      return;
    }

    if (document.readyState === 'complete') {
      return fn();
    }

    document.addEventListener('DOMContentLoaded, fn, false');
  },
  ajaxRequest: function ajaxRequest (method, url, data, callback) {
    console.log('###############');
    console.log('    -     ajax funcitons    -');
    console.log("request started");
    console.log('data received');
    console.log(data);
    alert('break');
    var xmlhttp = new XMLHttpRequest();
    /*
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        callback(null, xmlhttp.response);
      }
    };
*/
    xmlhttp.open(method, url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    console.log('data to be sent:');
    console.log(data);
    alert('break');
    xmlhttp.send(data);
  }
};
