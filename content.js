var mutationObserver = new MutationObserver(function(mutations) {
  // console.log(mutations);
  mutations.forEach(mutation => {
    if (mutation.target.nodeName=="SPAN"){
      mutation.addedNodes.forEach(addedNode => {
        if (addedNode.nodeName=="SPAN"){
          console.log("added: ", addedNode.innerText);
        }
      })
      mutation.removedNodes.forEach(removedNode => {
        if (removedNode.nodeName=="SPAN"){
          console.log("removed: ", removedNode.innerText);
        }
      })
    }
  })
});



function addObserverIfDesiredNodeAvailable() {
  console.log("checking to add")
  var composeBox = document.querySelector(".a4cQT");
  if (!composeBox) {
      window.setTimeout(addObserverIfDesiredNodeAvailable,500);
      return;
  }
  var config = {childList: true};
  console.log("added")
  mutationObserver.observe(document.querySelector(".a4cQT"), {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
  });  

}
addObserverIfDesiredNodeAvailable();













// alert("Hello from your Chrome extension!");

// var firstHref = $("a[href^='http']").eq(0).attr("href");

// console.log(firstHref);

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if( request.message === "clicked_browser_action" ) {
//         // var firstHref = $("a[href^='http']").eq(0).attr("href");
//           var subs = document.getElementsByClassName("CNusmb");

//         setInterval(function(){
//           for(var i=0;i<subs.length;i++)
//           {
//             console.log(subs[i].innerHTML);
//           }
//           console.log("One loop over!");
//         }, 10000);
//       //  console.log((document.querySelector("html").innerHTML));
//         //document.querySelector("html").innerHTML = "hehe";
//         // console.log(firstHref);
//         alert("heythere");
//       }
//     }
//   );
