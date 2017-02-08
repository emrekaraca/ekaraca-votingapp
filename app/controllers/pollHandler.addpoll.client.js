'use strict';

(function () {
  var newPollBtn = document.querySelector('#addpoll');
  var myPollsBtn = document.querySelector('#mypolls');
  var pollsContainer = document.querySelector('#pollsContainer');
  var questionField = document.querySelector('#question');
  var optionsField = document.querySelector('#options');
  var authorField = document.querySelector('#author');
  var apiUrl = appUrl + '/api/polls';
  var apiUrl2 = appUrl + '/api/polls';

  pollsContainer.innerHTML = "TEST";

  function loadPolls (data) {
    console.log('###################');
    console.log('   -  pollHandler.newpoll.client.js  - ');
    console.log("load Polls is running...");
    pollsContainer.innerHTML = "TEST2";
    var pollsObject = JSON.parse(data);
    //console.log(pollsObject);
    pollsContainer.innerHTML = '<ul id="pollslist"></ul>';
    var pollsList = document.querySelector('#pollslist');
    for (var i=0; i<pollsObject.length; i++) {
      pollsList.insertAdjacentHTML('beforeend', '<p>' + pollsObject[i].question + ' // ' + pollsObject[i].author + '</p>');
    }
  }

  //ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, {author:"xx"}, loadPolls));

  var submitbtn = document.querySelector('#submitbtn');

  submitbtn.addEventListener('click', function () {
    var question = questionField.value;
    var options = optionsField.value;
    var author = authorField.value;
    var data = ({question: question, options: options, author: author});
    alert("sbumitbtn clicked");
    console.log(JSON.stringify(data));
    alert('break');
    ajaxFunctions.ajaxRequest('POST', apiUrl, JSON.stringify(data), function () {
        //ajaxFunctions.ajaxRequest('GET', apiUrl, null, loadPolls)
      });
  })


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
