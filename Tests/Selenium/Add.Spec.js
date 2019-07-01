//Please note: I generated this script from Selenium IDE to
//demonstrate my understanding of automating the DOM. I did not design
//or write the code.
//However, for the purpose of my evaluation have commented my understanding
//of the functions within this script - CvW

const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Given_AppIsRunning_When_IAddANewItem_Then_TheRecordIsPersisted', function ()
{
    this.timeout(30000)
    let driver
    let vars

    beforeEach(async function ()
        {
            //Creates a new instance of the web driver - CvW
            driver = await new Builder().forBrowser('firefox').build()
            vars = {}
        })

    afterEach(async function ()
        {
            //Terminates the web driver instance - CvW
            await driver.quit();
        })

    it('Given_AppIsRunning_When_IAddANewItem_Then_TheRecordIsPersisted', async function ()
        {
            //Points the web driver to the URL under test - CvW
            await driver.get("http://localhost:8081/todo")
            //Sets the web drivers window size - CvW
            await driver.setRect(1920, 484)
            //Compares the text of the heading to expected text - CvW
            assert(await driver.findElement(By.css("h1")).getText() == "QE todolist")
            //Sets the focus of the element by relevant id - CvW
            await driver.findElement(By.id("newtodo")).click()
            //Inputs relevant text into the element - CvW
            await driver.findElement(By.id("newtodo")).sendKeys("Laundry")
            //Clicks a button by specified id - CvW
            await driver.findElement(By.id("new-submit")).click()
            //The test compares that the list contains the expected text - CvW
            assert(await driver.findElement(By.id("span-todo-0")).getText() == "Laundry")
     })
})
