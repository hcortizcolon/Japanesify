/* Retrieve any previously set cookie and send to content script */
// Based on Cookie-bg-picker example by Mozilla

function getActiveTab() {
  console.debug("Aquiring tab...")
  return browser.tabs.query({active: true, currentWindow: true});
}

function cookieUpdate() {
  getActiveTab().then((tabs) => {
    // get any previously set cookie for the current tab
    var gettingCookies = browser.cookies.get({ //TODO
      url: tabs[0].url,
      name: "kana"
    });
    gettingCookies.then((cookie) => {
      if (cookie) {
        console.debug("Cookie exist");
        var cookieVal = JSON.parse(cookie.value);
        browser.tabs.sendMessage(tabs[0].id, {x: cookieVal.x});
        browser.tabs.sendMessage(tabs[0].id, {y: cookieVal.y});
      }
    });
  });
}

// update when the tab is updated
browser.tabs.onUpdated.addListener(cookieUpdate);
// update when the tab is activated
browser.tabs.onActivated.addListener(cookieUpdate);
