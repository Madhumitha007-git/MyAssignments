
import { chromium,test } from "@playwright/test";
//import { log } from "node:console";


test('learn to launch the browser',async({page}) => {
await page.goto("https://www.redbus.in")
console.log(page.url());

//title
const pagetitle=await page.title()
console.log(pagetitle);
    
})