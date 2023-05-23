﻿
function SASPageCheckBoxSelector(SASPPID , GiftPPID){
    /*
      Each individual testcase will be coming here one by one
      SAS Kit and Gift checkbox will be selected
    */
    Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.FindElement("//a[@data-tc-selected-ppid='"+SASPPID+"']").Click();  
    Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.FindElement("//a[@data-tc-slected-gift-productid='"+GiftPPID+"']").Click();   
}

function clickOnProceedToCheckout(){
   Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.buttonProceedToCheckout.ClickButton();
}

function waitForUpgradePageToLoad(){
    Aliases.browser.pageUpgrade.Wait();
}

function waitForCheckoutPageToLoad(){
    Aliases.browser.pageCart.Wait();
}

function clickOnNoUpgrade(){
    Aliases.browser.pageUpgrade.formCompleteYour.linkNoThanks.Click();
} 
function clickOnYesUpgrade(){ 
 //   Aliases.browser.pageUpgrade.formCompleteYour.linkUpgradeNow.Click();
}

function clearCart(){
 
 /* var cartItemsCount= Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.FindElement("//span[@class='minicart-quantity']").innerText;
  Log.Message(cartItemsCount)
  if(cartItemsCount>0)
  {
    Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link2.textnode.Click();
    for(var i=0;i<cartItemsCount;i++)
    {
      Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link.textnode2.Click();
    }
  }
  */
 
}

module.exports.SASPageCheckBoxSelector = SASPageCheckBoxSelector;
module.exports.clickOnProceedToCheckout = clickOnProceedToCheckout;
module.exports.waitForUpgradePageToLoad = waitForUpgradePageToLoad;
module.exports.waitForCheckoutPageToLoad = waitForCheckoutPageToLoad;
module.exports.clickOnNoUpgrade = clickOnNoUpgrade;
module.exports.clickOnYesUpgrade = clickOnYesUpgrade;
