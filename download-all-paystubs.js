function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function downloadAllPayStubs() {
    // Might need to chnage the element ID based on the elemetnts on your browser
    const selectElement = document.getElementById('ember4957');
    const values = Array.from(selectElement.options).map(o => o.value).filter(v => v !== '');
    
    for(let i = 0 ; i < values.length ; i++) {
        const option = values[i];
        selectElement.value = option;

        // This is to replicate the actual user input change events to get the updated download href
        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
        selectElement.dispatchEvent(new Event('input', { bubbles: true }));
        
        console.log(`Downloading ${option}`);

        // You might need to chagne this selector based on the download element on your browser
        const downloadButton = document.querySelector("#ember4942 > div > div > div > div > div:nth-child(2) > div > div.z-productBody-headSpacer > a");
        console.log(downloadButton.href);
        downloadButton.click();

        // Tweak this delay based on your needs (ms)
        await delay(1000);
    }
}
