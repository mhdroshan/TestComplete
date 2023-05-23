
  var sasTest = require("sasTest");
  var startTestNew = require("startTestNew");
   var PrePurchase1 = require("PrePurchase1");
    var PrePurchaseNew = require("PrePurchaseNew");
  var US_SasPrePurchaseProductPPIDs = [];
 // var US_SasPrePurchaseGiftPPIDs = [];
  var VM_cartProductPPID =[];
  var upSellInfo = [];
  
//  var US_fourCombinations = [];
  
  var SelectedProductPPID;
  var SelectedGiftPPID

  function prePurchaseValidation()
  {
  var  MS_SAS_PPID=startTestNew.sheetPPID;
  var  MS_SAS_GiftPPID=startTestNew.sheetGiftPPID;
  var MS_SAS_FreeGifts = startTestNew.sheetFreeGifts;
  var MS_CartPPIDs = PrePurchase1.lastCombination;
    //Log.Message(MS_SAS_PPID);
  var fourCombinations=PrePurchaseNew.importCombinaions;
  for(var i=0;i<fourCombinations.length;i++)
  {
       fourCombinations[i]=fourCombinations[i].toString().replace('-',',');
    //  US_fourCombinations.push(US__fourCombinations);
  }
  var  US_fourCombinations=fourCombinations.toString().replace('-',',');
  //  Log.Message(US_fourCombinations);
    Log.Message("Pre purchase validation starts");
    
    
   
    //Opens the specified URL in a running instance of the specified browser.
    Browsers.Item(btChrome).Navigate("https://www.meaningfulbeauty.odev09.dw4.grdev.com/skincare/sas/core/");
    Aliases.browser.BrowserWindow.Maximize();
    
    while (VM_cartProductPPID.length > 0) 
    {
      VM_cartProductPPID.pop();
    }
    while(US_SasPrePurchaseProductPPIDs.length > 0)
    {
      US_SasPrePurchaseProductPPIDs.pop();
    }
     while(upSellInfo.length > 0)
    {
      upSellInfo.pop();
    }
    
    /*
     Below should not be hardcoded. It will be fetched from combinations
    */
 
    //Clicks the 'linkSelect' link.
    Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.linkSelect.Click();
    //Checks whether the 'Enabled' property of the Aliases.browser.pageWwwMeaningfulbeautyComSkinca.FindElement("//main[@role='main']//div/div[2]/div/div/a[@role='radio']") object equals True.
    var Productselection=aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.
    FindElement("//main[@role='main']//div/div[2]/div/div/a[@role='radio']"), "Enabled", cmpEqual, true);
    getProductData(Productselection);
    //Delay(2000); 
  
    //Clicks the 'linkSelect2' link.
    Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.linkSelect2.Click();
    //Checks whether the 'Enabled' property of the Aliases.browser.pageWwwMeaningfulbeautyComSkinca.FindElement("//main[@role='main']//div[3]//div[2]//a[contains(@class, 'check-selection')]") object equals True.
    var GiftSelection = aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.
    FindElement("//main[@role='main']//div[3]//div[2]//a[contains(@class, 'check-selection')]"), "Enabled", cmpEqual, true);
    getGiftData(GiftSelection);
    //getProductData(GiftSelection);
  
    Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.buttonProceedToCheckout.ClickButton();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageUpgrade.Wait();
    //Clicks the 'linkNoThanks' link.
    Aliases.browser.pageUpgrade.formCompleteYour.linkNoThanks.Click();
    prePurchaseSelection();
  
   /*
   //using xpath 
   var checkoutProductPPIDs = []; 
   var text= Aliases.browser.pageCart.textnodeMt2a3538.innerText;
   checkoutProductPPIDs.push(text);
   Log.Message(checkoutProductPPIDs);
  */
  // Delay(2000);
   //var cartPPID =[];
 
   //retrieving the data from app.variableMap
  var pageObj = Sys.Browser().Page("*");
  Aliases.browser.pageCart.Wait();

    var PPID_count = pageObj.contentDocument.Script.eval("app.variableMap.productId").length;  
   // Log.Message(PPID_count)
    for(var i=0; i<PPID_count;i++){
       var ProductPPID =   pageObj.contentDocument.Script.eval("app.variableMap.productId["+i+"]");
       VM_cartProductPPID.push(ProductPPID);
       //Log.Message("cart product PPID is " +VM_cartProductPPID);
      }
    //  Log.Message(VM_cartProductPPID+"--------------------------------------------")
    
   
   /*
    verifying the UserSelected data with VariableMap DataLayer
   */
   
 //  Log.Message(fourCombinations+"-------------")
  // Log.Message(VM_cartProductPPID+"------------------")
 //  for(var i =0;i<PPID_count;i++)
  // {
  var VM_cartProductPPIDs=VM_cartProductPPID.toString();
     
     if(fourCombinations.includes(VM_cartProductPPIDs))
      {
        Log.Message("Products are matching with UserSelected data and VariableMap data in cart page  ")
      }
    else
      {
       Log.Error("Products are not matching with UserSelected data and VariableMap data in cart page ")
      }
 //  }
 
  //Log.Message(MS_CartPPIDs+"-------------")
  // Log.Message(VM_cartProductPPID+"------------------")
   
  // for(var i=0;i<MS_CartPPIDs.length;i++)
  //{
  var VM_cartProductPPIDs=VM_cartProductPPID.toString();
  
    if(MS_CartPPIDs.includes(VM_cartProductPPIDs))
    {
      Log.Message("Products are matching with VariableMap data layer and Merchendizing sheet in cart page ");
    }
    else
    {
      Log.Error("Products are not matching with VariableMap data layer and Merchendizing sheet in cart page ");
    }
 // }
   
 /* 
 //  var PPIDisPresent = MS_SAS_PPID.indexOf(SelectedProductPPID)!==-1;
 //  Log.Message(PPIDisPresent);
   
 /* 
    // Log.Message("in for lool")
     if(MS_SAS_PPID.indexOf(SelectedProductPPID)!==-1)
     {
       Log.Message("Kit PPID is matching with marenchentile sheet and VariableMap data  "+SelectedProductPPID )
     }
     else
     {
       Log.Error("Kit PPID is not matching with marenchentile sheet and VariableMap data ")
     }
    
  
  
   
     Log.Message(MS_SAS_FreeGifts);
    //  Log.Message(MS_SAS_FreeGifts+"----------------");
    //  Log.Message(SelectedGiftPPID)
    Log.Message(US_SasPrePurchaseProductPPIDs)
     for(var i=0;i<MS_SAS_FreeGifts.length;i++)
   {
    // Log.Message(MS_SAS_FreeGifts[i]);
    var check= MS_SAS_FreeGifts[i].includes(SelectedGiftPPID);
    // Log.Message(check);
     if(check)
     {
       Log.Message("Gift id is matching with marenchentile sheet and VariableMap data "+SelectedGiftPPID);
     }
     else
     {
      Log.Error("Gift id is not matching with marenchentile sheet and VariableMap data");  
     }
     
   }
   
   */
  }
  
  

  function getProductData(isPoductSelected)
  {
  
  
     SelectedProductPPID= Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.
    FindElement("//main[@role='main']//div/div[2]/div/div/a[@role='radio']").getAttribute("data-tc-selected-ppid");
  
 //   if(isPoductSelected)
 //   {
 //      US_SasPrePurchaseProductPPIDs.pop();
     US_SasPrePurchaseProductPPIDs.push(SelectedProductPPID); 
 //  }
 
 }

  function getGiftData(isGiftSelected)
  {
 
     SelectedGiftPPID=Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.
    FindElement("//main[@role='main']//div[3]//div[2]//a[contains(@class, 'check-selection')]").getAttribute("data-tc-slected-gift-productid");
  
 //   if(isGiftSelected)
 //   {
 //  US_SasPrePurchaseGiftPPIDs.pop();
     US_SasPrePurchaseProductPPIDs.push(SelectedGiftPPID);
  }

  function prePurchaseSelection()
  {
    
    var upSell=Aliases.browser.pageUpgrade.formCompleteYour.FindElement("//*[@id='no-upgrade']").getAttribute("id");
    upSellInfo.push(upSell);
    Log.Message("User selected - "+upSellInfo);
  }
  
  

  module.exports.prePurchaseValidation = prePurchaseValidation;
