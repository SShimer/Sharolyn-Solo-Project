import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class Ragnar extends BasePage {
   findNextRagnar: By=By.xpath('//a[text()="Find Your Next Ragnar"]')
   findSearch: By=By.xpath('(//input[@name="searchText1"])[1]')
   findReachTheBeach: By=By.xpath('//h3[text()="Reach The Beach"]')
   findMoreDetail: By=By.xpath('(//a[text()="More Details"])[1]')
   findWhatIs: By=By.xpath('(//a[text()="What is Ragnar?"])[1]')
   findLearnMore: By=By.xpath('//a[text()="Learn More"]')
   findCourse: By=By.xpath('//a[@href="/event-detail/relay/reachthebeach#course"]')
   findSafety: By=By.xpath('//a[text()="Safety"][1]')
   findGlamping: By=By.xpath('(//a[text()="Ragnar Trail Glamping"])[3]')
   findRegister: By=By.xpath('//a[@class="blue-cta-btn"]')
   findCreateAnAccount: By=By.xpath('//a[@name="Create an Account"]')
   findFName: By=By.xpath('//input[@name="firstName"]')
   findLName: By=By.xpath('//input[@name="lastName"]')
   findBday: By=By.xpath('//input[@name="bithDate"]')
   findEvents: By=By.xpath('//a[text()="Events"]')
   findZion: By=By.xpath('(//a[@class="dropdown-item"])[25]')
   findResultsPhoto: By=By.xpath('//a[@href="/event-detail/trail/zion_ut#resultsphotos"]')
   findP2021: By=By.xpath('(//a[text()="2021"])[2]')
   findPage: By=By.xpath('//input[@class="ng-valid ng-dirty ng-touched"]')
   findBib: By=By.xpath('//div[@class="col-md-4.p-0"]')
   findContain: By=By.xpath('//div[@class="container"][1]')
   findTeam: By=By.xpath('(//div[@class="bg-dark column thumbnail-sm relative"])[1]')
   findR2021: By=By.xpath('(//a[text()="2021"])[1]')
   findRsearch: By=By.xpath('//input[@name="ctl00$edtSearch"]')


   constructor() {
    super({url:"https://www.runragnar.com/"})

   }


}