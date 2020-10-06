keys = ["slide", "present", "presentation", "attendance", "chetan"];
let lastNotif = "";
var date = new Date();
var milliseconds = 0;
var flag = 1;

var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(mutation => {
    if (mutation.target.nodeName=="SPAN"){
      mutation.addedNodes.forEach(addedNode => {
        if (addedNode.nodeName=="SPAN"){
          let currentText = addedNode.innerText.toLowerCase();
          console.log("added: ", currentText);
          keys.forEach(key => {
            if (currentText.includes(key)) {
              if (date.getTime()-milliseconds<2000){
                if (lastNotif==key){
                  flag = 0;
                }
              }
              if (flag){
                console.log("found");
                chrome.runtime.sendMessage('', {
                  type: 'notification',
                  options: {
                    title: key,
                    message: currentText,
                    iconUrl: '/icon.png',
                    type: 'basic'
                  }
                });
              }
              lastNotif = key;
              milliseconds = date.getTime();
              flag = 1;
            }
          });
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


