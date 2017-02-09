'use strict';

(function () {
  var newPollBtn = document.querySelector('#addpoll');
  var myPollsBtn = document.querySelector('#mypolls');
  var pollsContainer = document.querySelector('#pollsContainer');
  var apiUrl = appUrl + '/api/polls';
  var apiUrl2 = appUrl + '/api/polls';

  pollsContainer.innerHTML = "TEST";

  function loadPolls (data) {
    console.log("load Polls running...");
    pollsContainer.innerHTML = "TEST2";
    var pollsObject = JSON.parse(data);
    console.log(pollsObject);
    pollsContainer.innerHTML = '<ul id="pollslist"></ul>';
    var pollsList = document.querySelector('#pollslist');
    for (var i=0; i<pollsObject.length; i++) {
      pollsList.insertAdjacentHTML('beforeend', '<p class="pollEntry">' + pollsObject[i].question + ' // ' + pollsObject[i].author + '</p>');
    }
  }

  ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, null, loadPolls));

})();


//ajaxFunctions.ready(ajaxFunctions.ajaxRequest('POST', apiUrl, data, loadPolls));




/*newPollBtn.addEventListener('click', function () {

}*/

// INDEX:
//// API-GET POLLS
//// INJECT RESULTS TO HTML

// ADD POLL:
//// LISTEN FOR FORM SUBMIT WITH NEWPOLL DATA
//// API-POST NEWPOLL DATA TO API

// MY POLLS:
//// API-GET POLLS FOR USER X
//// INJECT RESULTS TO HTML

// VOTE:
//// API-GET ONE POLL DATA
//// INJECT POLL QUESTIONs & OPTIONS TO HTML
//// API-POST VOTE TO DB
//// REDIRECT TO RESULTS

// RESULTS
//// API-GET ONE POLL DATA
//// INCECT RESULTS TO HMTL




// CLIENT SCRIPT SENDS POST REQUEST WITH FORM DATA TO API URL
// CLIENT SCRIPT HAS UPDATE POLLS FN TO GET ALL POLLS FOR LIST
