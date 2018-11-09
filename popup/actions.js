/* initialise variables */
let alphabet = "hiregana";
let characters = [['n', 0],['a', 0],['i', 1], ['u', 0], ['o', 0], ['e', 0]]; //The order is : n, a, i, u, o, e
let status = false;

var checkboxes = new Map([
  ['n', document.querySelector("input[name='activeSubsN'")],
  ['a', document.querySelector("input[name='activeSubsA'")],
  ['i', document.querySelector("input[name='activeSubsI'")],
  ['u', document.querySelector("input[name='activeSubsU'")],
  ['e', document.querySelector("input[name='activeSubsE'")],
  ['o', document.querySelector("input[name='activeSubsO'")],
  ['da', document.querySelector("input[name='activeSubsDA'")],
  ['ha', document.querySelector("input[name='activeSubsHA'")],
  ['yo', document.querySelector("input[name='activeSubsYO'")]
]);

//var toggleButton = document.querySelector('button');
var toggleButton = document.getElementById('toggle');

/* storage */
if(!localStorage.getItem('enabled')) {
  localStorage.enabled = status;
} else {
  status = localStorage.enabled;
}
setToggleButtonStatus(status);

checkboxes.forEach(function(value, key){
  value.onchange = function(e){
    console.debug(key + " toggle");
  }
})

function saveOptions(e) {
  localStorage.enabled = status;
  localStorage.array = JSON.stringify([
    document.querySelector("#n").checked,
    document.querySelector("#a").checked,
    document.querySelector("#i").checked,
    document.querySelector("#u").checked,
    document.querySelector("#e").checked,
    document.querySelector("#o").checked,
    document.querySelector("#da").checked,
    document.querySelector("#ha").checked,
    document.querySelector("#yo").checked
  ]);

console.log("SAVING OPTIONS: " + localStorage.array);

  e.preventDefault();
}

function restoreOptions() {
  status = localStorage.enabled;
    if(!localStorage.getItem('array')) {
      saveOptions();
    } else {
      var res = JSON.parse(localStorage.array);
      document.querySelector("#n").checked = res[0];
      document.querySelector("#a").checked = res[1];
      document.querySelector("#i").checked = res[2];
      document.querySelector("#u").checked = res[3];
      document.querySelector("#e").checked = res[4];
      document.querySelector("#o").checked = res[5];
      document.querySelector("#da").checked = res[6];
      document.querySelector("#ha").checked = res[7];
      document.querySelector("#yo").checked = res[8];

      console.log("action.js ARRAY restored to: " + typeof res[0]);

    }

}


//add event listeners
document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("#o").addEventListener('change', saveOptions);
document.querySelector("#n").addEventListener('change', saveOptions);
document.querySelector("#a").addEventListener('change', saveOptions);
document.querySelector("#i").addEventListener('change', saveOptions);
document.querySelector("#u").addEventListener('change', saveOptions);
document.querySelector("#e").addEventListener('change', saveOptions);
document.querySelector("#da").addEventListener('change', saveOptions);
document.querySelector("#ha").addEventListener('change', saveOptions);
document.querySelector("#yo").addEventListener('change', saveOptions);


// Browser tab communication.

function getActiveTab() {
  return browser.tabs.query({active: true, currentWindow: true});
}



toggleButton.onclick = function(){
  if(status == true){
    status = false;
  }
  else {
    status = true;
  }
  setToggleButtonStatus(status);
  console.log("SAVING status AS: " + status);
  localStorage.enabled = status;

  updatePage();
}

function setToggleButtonStatus(boolean){
  console.log("setting button to "+ boolean);
  if(boolean == false){
    toggleButton.style.backgroundColor = "#d94a3c";
    toggleButton.innerHTML = "disabled";
  }
  else {
    toggleButton.style.backgroundColor = "#4b7340";
    toggleButton.innerHTML = "enabled";
  }
}


// Functions

function updatePage(){

  getActiveTab().then((tabs) => {

    for (var i = 0; i < characters.length; i++) {
      var string = "#" + characters[i][0];
      characters[i][1] = document.querySelector(string).checked;
    }

    //console.debug("Enabled = " + status.toString());
    browser.tabs.sendMessage(tabs[0].id, {enabled: status, characters: characters, alphabet: alphabet});



  });
}
