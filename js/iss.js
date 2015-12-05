$(document).ready(function(){

  alert("Hello World");


  for (var i = 0; i < window.tweets.length; i++) {
    var tweetCol = tweetBuild(window.tweets[i]);
    console.log(tweetCol);
    $(".row").append(tweetCol)
  };

  function tweetBuild(tweeter) {
    var colDiv = $("<div>").addClass("col-md-4");
    var pictureDiv = $("<div>").addClass("picture");
    var tweetPic = $("<img>").attr("src",  tweeter.user.profile_image_url)
    var twitterName;
    var tweetedWhen;
    var tweet;

    console.log(tweetPic);
    console.log(colDiv);
    colDiv.append(pictureDiv);
    pictureDiv.append(tweetPic);

    return colDiv;
  }; //end of function

});