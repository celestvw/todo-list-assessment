const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Given_AppIsRunning_When_IAddANewItem_Then_TheRecordIsPersisted', function ()
{
    this.timeout(30000)
    let driver
    let vars

    beforeEach(async function ()
        {
            driver = await new Builder().forBrowser('firefox').build()
            vars = {}
        })

    afterEach(async function ()
        {
            await driver.quit();
        })

    it('Given_AppIsRunning_When_IAddANewItem_Then_TheRecordIsPersisted', async function ()
        {
            await driver.get("http://localhost:8081/todo")
            await driver.setRect(1920, 484)
            assert(await driver.findElement(By.css("h1")).getText() == "QE todolist")
            await driver.findElement(By.id("newtodo")).click()
            await driver.findElement(By.id("newtodo")).sendKeys("Laundry")
            await driver.findElement(By.id("new-submit")).click()
            assert(await driver.findElement(By.id("span-todo-0")).getText() == "Laundry")
     })
})
