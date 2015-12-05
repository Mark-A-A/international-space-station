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
  }; //end of function

});