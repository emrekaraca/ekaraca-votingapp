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
    console.log('current method:' + method);
    console.log("request started");
    console.log('data received');
    console.log(data);
    var xmlhttp = new XMLHttpRequest();

    if (callback) {
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          console.log('calling back');
          callback(xmlhttp.response);
        }
      }
    }


    xmlhttp.open(method, url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    console.log('data to be sent:');
    console.log(data);
    //alert('break');
    if (method == 'POST' || method == 'DELETE') {
      console.log('sending data');
      console.log(callback);
      (function(){
        xmlhttp.send(data)
      }, function () {
        callback();
      })
      xmlhttp.send(data);
    } else {
      xmlhttp.send();
    }
  }
};
