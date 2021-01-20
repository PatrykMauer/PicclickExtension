function isPicclick(url)
{
   var result = /^https:\/\/\picclick\.com/.test(url) || /^https:\/\/\picclick\.de/.test(url)|| /^https:\/\/\picclick\.at/.test(url) || /^https:\/\/\picclick\.com.au/.test(url)  || /^https:\/\/\picclick\.be/.test(url)|| /^https:\/\/\fr\.picclick\.be/.test(url)|| /^https:\/\/\picclick\.ca/.test(url)|| /^https:\/\/\picclick\.fr/.test(url)|| /^https:\/\/\picclick\.it/.test(url)|| /^https:\/\/\picclick\.ie/.test(url)|| /^https:\/\/\picclick\.nl/.test(url)|| /^https:\/\/\picclick\.es/.test(url)|| /^https:\/\/\picclick\.ch/.test(url)|| /^https:\/\/\picclick\.co.uk/.test(url);
return result;
}

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        active_tab_id = tab.tabId;
        console.log(current_tab_info.url);

        if (isPicclick(current_tab_info.url)) {
            chrome.tabs.insertCSS(null, { file: './styles.css' });
            chrome.tabs.executeScript(null, { file: './foreground.js' }, (result) => console.log(result))
        }
    });
});
