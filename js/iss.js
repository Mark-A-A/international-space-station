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

//variables for API's
  var issApiUrl = "https://api.wheretheiss.at/v1/satellites/25544/positions?";
  issApiUrl += "timestamps=1436029892,1436029902";
  issApiUrl += "&units=miles";

//end of variables for API's


  /* for (var i = 0; i < window.tweets.length; i++) {
    var tweetCol = tweetBuild(window.tweets[i]);
    console.log(tweetCol);
    $(".row").append(tweetCol)
  };

  function tweetBuild(tweeter) {
    var colDiv = $("<div>").addClass("col-md-4");
    var pictureDiv = $("<div>").addClass("picture");
    var tweetPic = $("<img>").attr("src",  tweeter.user.profile_image_url)
    
    var flickrKey = "a98b6af74d3ee7e5208a8f5a584758fa";

    /* flickr.url
    https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
  or
https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
  or
https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
  */

    var flickr
    var flickr

    console.log(tweetPic);
    console.log(colDiv);
    colDiv.append(pictureDiv);
    pictureDiv.append(tweetPic);

    return colDiv;
  }; */



});