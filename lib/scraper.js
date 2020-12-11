#!/usr/bin/env node
const puppeteer = require('puppeteer');

(async char => {
  let browser
  let results = []

  try {
    browser = await puppeteer.launch()
    const url = "http://search.adamscountysheriff.org/inmatesearch.php";
    const page = await browser.newPage();
    await page.goto(url);

    const SEARCH_LAST_NAME_SELECTOR = 'input[name="lastname"]';
    await page.type(SEARCH_LAST_NAME_SELECTOR, 'a');

    // attach puppeteer's "document ready" event handler before we navigate
    page.on("domcontentloaded", async () => {
      const INMATE_SELECTOR = ".backgroundGradient";
      results = await page.$$eval(INMATE_SELECTOR, (nodes) =>
        nodes.map((n) => n.innerText)
      );
    });

    const SEARCH_SUBMIT_SELECTOR = 'input[name="submitsearch"]';
    await page.click(SEARCH_SUBMIT_SELECTOR);
    await page.waitForNavigation({waitUntil: 'networkidle2'});
  }
  catch (err) {
    console.log(err.message)
  }
  finally {
    if (browser) await browser.close()
    console.log(JSON.stringify(results))
    process.exit()
  }
})()
