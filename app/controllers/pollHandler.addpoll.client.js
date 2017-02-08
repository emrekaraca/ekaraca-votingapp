'use strict';

(function () {
  var newPollBtn = document.querySelector('#addpoll');
  var myPollsBtn = document.querySelector('#mypolls');
  var pollsContainer = document.querySelector('#pollsContainer');
  var pollButtons = document.querySelector('.pollbuttons');
  var addPollForm = document.querySelector('.addpollform');
  var questionField = document.querySelector('#question');
  var option1 = document.querySelector('#option1');
  var authorField = document.querySelector('#author');
  var backBtn = document.querySelector('#goback');
  var submitbtn = document.querySelector('#submitbtn');
  var insertAbove = document.querySelector('#insertAbove');
  var moreOptions = document.querySelector('.moreOptions');
  var optionsCounter = 1;

  var apiUrl = appUrl + '/api/polls';

  pollsContainer.innerHTML = "TEST";

  newPollBtn.addEventListener('click', function () {
    pollButtons.style.display = "none";
    addPollForm.style.display = "initial";
  })
  backBtn.addEventListener('click', function () {
    pollButtons.style.display = "initial";
    addPollForm.style.display = "none";
    questionField.value = "";
    optionsField.value = "";
    authorField.value = "";
  })


  function addOptionsBtn () {
    moreOptions.addEventListener('click', function () {
      moreOptions.parentNode.removeChild(moreOptions);
      insertAbove.insertAdjacentHTML('beforeBegin', '<input type="text" name="option' + (optionsCounter+1) + '" id="option' + (optionsCounter+1) + '" value=""> <button type="button" class="btn btn-success moreOptions">+</button><br>');
      moreOptions = document.querySelector('.moreOptions');
      optionsCounter += 1;
      addOptionsBtn();
    })
  }
  addOptionsBtn();

  function loadPolls (data) {
    console.log('###################');
    console.log('   -  pollHandler.newpoll.client.js  - ');
    console.log("load Polls is running...");
    pollsContainer.innerHTML = "TEST2";
    var pollsObject = JSON.parse(data);
    console.log(pollsObject);
    pollsContainer.innerHTML = '<ul id="pollslist"></ul>';
    var pollsList = document.querySelector('#pollslist');
    for (var i=0; i<pollsObject.length; i++) {
      pollsList.insertAdjacentHTML('beforeend', '<p>Question: ' + pollsObject[i].question + ' // Author: ' + pollsObject[i].options + ' // Author: ' + pollsObject[i].author + ' <button class="btn btn-danger deletebtn" id="' + pollsObject[i]._id +'">Delete</Button></p>');
    }
    var deleteBtn = document.querySelector('.deletebtn');
    deleteBtn.addEventListener('click', function () {
      var id = ({id: this.id});
      ajaxFunctions.ajaxRequest('DELETE', apiUrl, JSON.stringify(id), function () {
          ajaxFunctions.ajaxRequest('GET', apiUrl, null, loadPolls)
        });
    })
  }

  ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, null, loadPolls));


  submitbtn.addEventListener('click', function () {
    var question = questionField.value;
    var options = optionsField.value;
    var author = authorField.value;
    questionField.value = "";
    option1.value = "";
    authorField.value = "";
    pollButtons.style.display = "initial";
    addPollForm.style.display = "none";
    var data = ({question: question, options: options, author: author});
    ajaxFunctions.ajaxRequest('POST', apiUrl, JSON.stringify(data), function () {
        ajaxFunctions.ajaxRequest('GET', apiUrl, null, loadPolls)
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
