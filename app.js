const puppeteer = require("puppeteer");


(async () => {
    
    const browser = await puppeteer.launch({headless: false});
    var page = await browser.newPage();
    await page.goto("https://musiclab.chromeexperiments.com/Song-Maker/song/4607865541623808");
    
        
        //making the song
        await page.waitForSelector('#gamepad');
        await page.click('#gamepad');
        
        await page.waitForSelector('#gamepad-return-button');

        var ran = Math.floor(Math.random() *5)+1;

        for(let j = 0;j < 126; j++){
            //up
            for(let i = 0;i < ran; i++){
                await page.waitForSelector('#gamepad-up-button');
                await page.hover('#gamepad-up-button');
                await page.click('#gamepad-up-button');
            };
            ran = Math.floor(Math.random() *5)+1;

            await page.click('#gamepad-return-button');
            //right
            await page.click('#gamepad-right-button');
           
            //down
            for(let i = 0;i < ran; i++){
                await page.click('#gamepad-down-button');
            };
            await page.click('#gamepad-return-button');
            ran = Math.floor(Math.random()*5)+1;
        }
        
        for(i = 0;i < ran;i++){
            await page.hover('#instrument-toggle-button');
            await page.click('#instrument-toggle-button');
        }
        for(i = 0;i < ran;i++){
            await page.hover('#percussion-toggle-button');  
            await page.click('#percussion-toggle-button');
        }
        await page.evaluate( () => document.querySelector(".input-number").value = Math.round(Math.random() * 240));


        await page.hover('#save-button');
        await page.click('#save-button');

        await page.waitForSelector('#download-wav');
        const nums = await page.url().replace("https://musiclab.chromeexperiments.com/Song-Maker/song/","")

        const fs = require('fs');
        const oldPath = `C:/Users/miros/Downloads/${nums}.wav`;
        const newPath = `./musicFiles/${nums}.wav`;
    

        //moving the file
        await setTimeout(() => {
            fs.rename(oldPath, newPath, (err) => {
                if (err) throw err;
                console.log('Successfully moved!');
            });
        },20000);

        //converting to wav

        //setTimeout(10000);
        page = browser.newPage();
        page.goto("https://audio.online-convert.com/convert/midi-to-wav");
        
        page.waitForSelector('#fileUploadButton');
        page.hover('#fileUploadButton');
        page.click('#fileUploadButton');
        







        //await fs.unlink('C:\Users\miros\Documents\lukas\JS\music or something\musicFiles\song-maker.mid');
})();