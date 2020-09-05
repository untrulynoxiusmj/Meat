// alert("Hello from your Chrome extension!");

// var firstHref = $("a[href^='http']").eq(0).attr("href");

// console.log(firstHref);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        // var firstHref = $("a[href^='http']").eq(0).attr("href");
          var subs = document.getElementsByClassName("CNusmb");

        setInterval(function(){
          for(var i=0;i<subs.length;i++)
          {
            console.log(subs[i].innerHTML);
          }
          console.log("One loop over!");
        }, 10000);
      //  console.log((document.querySelector("html").innerHTML));
        //document.querySelector("html").innerHTML = "hehe";
        // console.log(firstHref);
        alert("heythere");
      }
    }
  );
