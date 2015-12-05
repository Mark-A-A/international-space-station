$(document).ready(function() {
  
  $(".btn-default").on("click", function(e){
    e.preventDefault();
    var userAddress = $("#userAddress").val();
    var googleApiUrl = "https://maps.googleapis.com/maps/api/js?key";
    googleApiUrl += "key=AIzaSyCKt8nUFQUilV2yXtJIilkTUp3DSxanQcw";
    googleApiUrl += "&address=" + userAddress;

    $.ajax({
      type: "GET",
      url: googleApiUrl,
      success: googleApiSuccessHandler
    });


  /* for (var i = 0; i < window.tweets.length; i++) {
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
  }; */



});