import { textChangeRangeIsUnchanged } from "typescript";
import { Ragnar } from "./solosPage";

const ragnar= new Ragnar()

test('Team Results', async () => {
    await ragnar.navigate();
    await ragnar.click(ragnar.findEvents);
    await ragnar.driver.sleep(5000);
    await ragnar.click(ragnar.findZion);
    await ragnar.driver.sleep(5000);
    await ragnar.click(ragnar.findResultsPhoto);
    //await ragnar.driver.sleep(5000);
    await ragnar.click(ragnar.findP2021);
    //await ragnar.click(ragnar.findContain);
    await ragnar.driver.sleep(5000);
    await ragnar.click(ragnar.findBib);
    await ragnar.driver.sleep(5000);
    await ragnar.setInput(ragnar.findBib, `310\n`);
    //await ragnar.click(ragnar.findTeam);
    //await ragnar.click(ragnar.findPage);
    //await ragnar.setInput(ragnar.findPage, `2\n`);
    //await ragnar.click(ragnar.findTeam);
    //await ragnar.driver.sleep(10000);
    await ragnar.click(ragnar.findR2021);
    await ragnar.click(ragnar.findRsearch);
    await ragnar.setInput(ragnar.findRsearch, `Zion King -1\n`)
    await ragnar.driver.sleep(5000);
    await ragnar.driver.quit()
})