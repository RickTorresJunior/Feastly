$(document).on('mobileinit', function () {
    $.mobile.ignoreContentEnabled = true;
});

function openCategory(item_category) {
    var i;
    var x = document.getElementsByClassName("item_category");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(item_category).style.display = "block";  
  }
