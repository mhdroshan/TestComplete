function removeItemsFromCart()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://www.meaningfulbeauty.odev09.dw4.grdev.com/skincare/sas/core/");
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnode' control.
  Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link2.textnode.Click();
  //Checks whether the 'Enabled' property of the Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link.textnode2 object equals True.
  aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link.textnode2, "Enabled", cmpEqual, true);
  //Clicks the 'textnode2' control.
  Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link.textnode2.Click();
}

function VMTest(){
  Browsers.Item(btChrome).Navigate("https://www.meaningfulbeauty.odev09.dw4.grdev.com/cart");
  
      var pageObj = Sys.Browser().Page("*"); 
      var lineItemsInCartArr = pageObj.contentDocument.Script.eval("app.variableMap.brandID");
    
    
    
   
   
    
    
}


function Test3()
{
  //Checks whether the 'contentText' property of the Aliases.browser.pageCart.textnode2.textnode3 object equals '7-Piece Youth Enhancing Face & Neck Skincare System'.
  aqObject.CheckProperty(Aliases.browser.pageCart.textnode2.textnode3, "contentText", cmpEqual, "7-Piece Youth Enhancing Face & Neck Skincare System");
}

function test4(){
  Browsers.Item(btChrome).Navigate("https://www.meaningfulbeauty.odev09.dw4.grdev.com/skincare/sas/core/");
   var cartHasProducts = aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link2.textnode2, "Enabled", cmpEqual, true);
    if(cartHasProducts)
    {
      Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link2.textnode.Click();
      Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link.textnode2.Click();
    }
    Log.Message(cartHasProducts)
}

function Test2()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://www.meaningfulbeauty.odev09.dw4.grdev.com/skincare/sas/core/");
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnode' control.
  Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link2.textnode.Click();
  //Checks whether the 'Enabled' property of the Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link.textnode2 object equals True.
  aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link.textnode2, "Enabled", cmpEqual, true);
  //Clicks the 'textnode2' control.
  Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link.textnode2.Click();
}

//lin2 is cart
//link is close symbol
function test6(){
  Browsers.Item(btChrome).Navigate("https://www.meaningfulbeauty.odev09.dw4.grdev.com/skincare/sas/core/");
  Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link2.textnode.Click();
  var cross=aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link.textnode2, "Enabled", cmpEqual, true);
  do{
    Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link.textnode2.Click();
   //  cross=aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link.textnode2, "Enabled", cmpEqual, true);
     if(cross == false){
       break;
     }
  }while(false);
  
  
}

function test7()
{
  Browsers.Item(btChrome).Navigate("https://www.meaningfulbeauty.odev09.dw4.grdev.com/skincare/sas/core/");
 var cartItemsCount= Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.FindElement("//span[@class='minicart-quantity']").innerText;
  Log.Message(cartItemsCount)
  if(cartItemsCount!=0)
  {
     Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link2.textnode.Click();
    for(var i=0;i<cartItemsCount/2;i++)
    {
      Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link.textnode2.Click();
    }
  }
}

function test5(){
  Browsers.Item(btChrome).Navigate("https://www.meaningfulbeauty.odev09.dw4.grdev.com/skincare/sas/core/")
   var cartHasProducts = aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link2.textnode22, "Enabled", cmpEqual, true);
    if(cartHasProducts)
    {
      Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link2.textnode.Click();
      Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.link.textnode2.Click();
    }
    Log.Message(cartHasProducts)
}

function yesUpgrade()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://www.meaningfulbeauty.odev09.dw4.grdev.com/skincare/sas/core/");
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'buttonProceedToCheckout' button.
  Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.buttonProceedToCheckout.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageUpgrade.Wait();
  //Clicks the 'linkUpgradeNow' object with the right mouse button.
  Aliases.browser.pageUpgrade.formCompleteYour.linkUpgradeNow.ClickR(116, 35);
  //Checks whether the 'contentText' property of the Aliases.browser.pageUpgrade.formCompleteYour.linkUpgradeNow object equals 'UPGRADE NOW'.
  aqObject.CheckProperty(Aliases.browser.pageUpgrade.formCompleteYour.linkUpgradeNow, "contentText", cmpEqual, "UPGRADE NOW");
  //Clicks the 'linkUpgradeNow' link.
  Aliases.browser.pageUpgrade.formCompleteYour.linkUpgradeNow.Click();
}