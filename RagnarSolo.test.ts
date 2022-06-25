import { Ragnar } from "./solosPage";

const ragnar= new Ragnar()

test('WhatIsRagnar', async () => {
    await ragnar.navigate();
    await ragnar.driver.manage().window().maximize();
    await ragnar.click(ragnar.findLearnMore);
    await ragnar.driver.sleep(5000);
    await ragnar.click(ragnar.findWhatIs);
    await ragnar.driver.sleep(5000)  

})

test('Safety', async () => {
    await ragnar.navigate();
    await ragnar.click(ragnar.findLearnMore);
    await ragnar.driver.sleep(5000);
    await ragnar.click(ragnar.findSafety);
    await ragnar.driver.sleep(5000)
    
})

test('Ragnar Glamping', async () => {
    await ragnar.navigate();
    await ragnar.click(ragnar.findLearnMore);
    await ragnar.driver.sleep(5000);
    await ragnar.click(ragnar.findGlamping);
    await ragnar.driver.sleep(5000);
    
})

test("Pick Your Ragnar", async () => {
    await ragnar.navigate();
    await ragnar.click(ragnar.findNextRagnar);
    await ragnar.driver.sleep(5000);
    await ragnar.click(ragnar.findSearch)
    await ragnar.setInput(ragnar.findSearch, `reach the beach\n`);
    await ragnar.click(ragnar.findReachTheBeach);
    await ragnar.driver.sleep(5000);
    await ragnar.click(ragnar.findMoreDetail);
    await ragnar.driver.sleep(5000);
    await ragnar.driver.sleep(5000);
    await ragnar.click(ragnar.findCourse);
    await ragnar.driver.sleep(5000);
    
    
})

test('Registration', async () => {
    await ragnar.navigate();
    await ragnar.click(ragnar.findNextRagnar);
    await ragnar.driver.sleep(5000);
    await ragnar.click(ragnar.findSearch);
    await ragnar.setInput(ragnar.findSearch, `reach the beach\n`);
    await ragnar.click(ragnar.findReachTheBeach);
    await ragnar.driver.sleep(5000);
    await ragnar.click(ragnar.findRegister);
    //await ragnar.driver.sleep(5000);
    //await ragnar.click(ragnar.findCreateAnAccount);
    //await ragnar.driver.sleep(5000);
   
})

test('Team Results', async () => {
    await ragnar.navigate();
    await ragnar.click(ragnar.findEvents);
    await ragnar.driver.sleep(5000);
    await ragnar.click(ragnar.findZion);
    await ragnar.driver.sleep(5000);
    await ragnar.click(ragnar.findResultsPhoto);
    await ragnar.driver.sleep(5000);
    await ragnar.click(ragnar.findP2021);
    await ragnar.click(ragnar.findContain);
    await ragnar.driver.sleep(5000);
    //await ragnar.click(ragnar.findBib);
    //await ragnar.driver.sleep(5000);
    //await ragnar.setInput(ragnar.findBib, `310\n`);
    //await ragnar.click(ragnar.findTeam);
    //await ragnar.click(ragnar.findPage);
    //await ragnar.setInput(ragnar.findPage, `2\n`);
    //await ragnar.click(ragnar.findTeam);
    //await ragnar.driver.sleep(10000);
    //await ragnar.click(ragnar.findR2021);
    //await ragnar.click(ragnar.findRsearch);
    //await ragnar.setInput(ragnar.findRsearch, `Zion King -1\n`)
    //await ragnar.driver.sleep(5000);
    await ragnar.driver.quit()
    
    //closing program

})
