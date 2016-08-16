$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userWord = $("input").val();
    var splitArray = userWord.split("");
    for(var i = 0; i < splitArray.length; i+=1) {
      if (splitArray[i] === " "){
        splitArray[i] = "";
      }
    }
    var reverseArray = splitArray.slice().reverse();
    
    if (splitArray.join("") === reverseArray.join("")){
      $("#no-palindrome").hide();
      $("#yes-palindrome").show();
    } else if (splitArray !== reverseArray) {
      $("#yes-palindrome").hide();
      $("#no-palindrome").show();
    }

  });
});
