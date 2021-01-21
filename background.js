function isPicclick(url) {
  var result =
    /^https:\/\/\picclick\.com/.test(url) ||
    /^https:\/\/\picclick\.de/.test(url) ||
    /^https:\/\/\picclick\.at/.test(url) ||
    /^https:\/\/\picclick\.com.au/.test(url) ||
    /^https:\/\/\picclick\.be/.test(url) ||
    /^https:\/\/\fr\.picclick\.be/.test(url) ||
    /^https:\/\/\picclick\.ca/.test(url) ||
    /^https:\/\/\picclick\.fr/.test(url) ||
    /^https:\/\/\picclick\.it/.test(url) ||
    /^https:\/\/\picclick\.ie/.test(url) ||
    /^https:\/\/\picclick\.nl/.test(url) ||
    /^https:\/\/\picclick\.es/.test(url) ||
    /^https:\/\/\picclick\.ch/.test(url) ||
    /^https:\/\/\picclick\.co.uk/.test(url);
  return result;
}

// chrome.tabs.onActivated.addListener(tab => {
//     chrome.tabs.get(tab.tabId, current_tab_info => {
//         active_tab_id = tab.tabId;
//         console.log(current_tab_info.url);

//         if (isPicclick(current_tab_info.url)) {
//             chrome.tabs.insertCSS(null, { file: './styles.css' });
//             chrome.tabs.executeScript(null, { file: './foreground.js' }, ()=> chrome.tabs.executeScript(tab.id, {file: 'content.js'}));
//         }
//     });
// });

chrome.tabs.query({ active: false }, tabs => {
  if (isPicclick(tabs[0].url)) {
    console.log(tabs[0].id);
    chrome.tabs.insertCSS(null, { file: "./styles.css" });
    chrome.tabs.executeScript(tabs[0].id, { file: "./foreground.js" }, () =>
      chrome.tabs.executeScript(tabs[1].id, { file: "./foreground.js" }, () =>
        chrome.tabs.executeScript(tabs[2].id, { file: "./foreground.js" }, () =>
          chrome.tabs.executeScript(
            tabs[3].id,
            { file: "./foreground.js" },
            () =>
              chrome.tabs.executeScript(
                tabs[4].id,
                { file: "./foreground.js" },
                () =>
                  chrome.tabs.executeScript(
                    tabs[5].id,
                    { file: "./foreground.js" },
                    () =>
                      chrome.tabs.executeScript(
                        tabs[6].id,
                        { file: "./foreground.js" },
                        () =>
                          chrome.tabs.executeScript(
                            tabs[7].id,
                            { file: "./foreground.js" },
                            () =>
                              chrome.tabs.executeScript(
                                tabs[8].id,
                                { file: "./foreground.js" },
                                () =>
                                  chrome.tabs.executeScript(
                                    tabs[9].id,
                                    { file: "./foreground.js" },
                                    () =>
                                      chrome.tabs.executeScript(
                                        tabs[10].id,
                                        { file: "./foreground.js" },
                                        () =>
                                          chrome.tabs.executeScript(
                                            tabs[11].id,
                                            { file: "./foreground.js" },
                                            () =>
                                              chrome.tabs.executeScript(
                                                tabs[12].id,
                                                { file: "./foreground.js" },
                                                () =>
                                                  chrome.tabs.executeScript(
                                                    tabs[13].id,
                                                    { file: "./foreground.js" },
                                                    () =>
                                                      chrome.tabs.executeScript(
                                                        tabs[0].id,
                                                        { file: "./display.js" }
                                                      )
                                                  )
                                              )
                                          )
                                      )
                                  )
                              )
                          )
                      )
                  )
              )
          )
        )
      )
    );
  }
});
