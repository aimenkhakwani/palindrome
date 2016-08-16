$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userWord = $("input").val();
    var splitArray = userWord.split("");
    var reverseArray = splitArray.slice().reverse();



    if (splitArray.toString() === reverseArray.toString()){
      $("#yes-palindrome").show();
    } else if (splitArray !== reverseArray) {
      $("#no-palindrome").show();
    }

  });
});
