//var sasTestNew = require("sasTestNew");
var startTestNew = require("startTestNew");
var PrePurchase = require("PrePurchase");

function startSasValidationNew() 
{
  Log.Message("Sas validation started");
  var MS_SAS_PPID = startTestNew.sheetPPID;
  var MS_SAS_price = startTestNew.sheetPrice;
  var MS_SAS_StrikeOutPrice = startTestNew.sheetStrikeoutPrice;

  Browsers.Item(btChrome).Navigate("https://www.meaningfulbeauty.odev09.dw4.grdev.com/skincare/sas/core/");
  Aliases.browser.BrowserWindow.Maximize();

  for (let i = 0; i < MS_SAS_PPID.length; i++) 
  {
   
    // Validating ppid
    var PPIDValidation = aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.
     FindElement("//div[@data-tc-sasppid='"+MS_SAS_PPID[i]+"']"),"Exists", cmpEqual, true);
     
     if(PPIDValidation)
     {
       Log.Message("Succesfully verified KIT PPID on SAS Page, with Merchandizing sheet "+MS_SAS_PPID[i]);
     }
     else
     {
       Log.Error("KIT PPID is not matching with Merchandizing sheet")
     }
  
     // Validating selling price

    if (MS_SAS_price[i] != MS_SAS_StrikeOutPrice[i]) 
    {
   var Price = aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.
      FindElement("//p[@data-tc-sas-kit-selling-price='"+MS_SAS_PPID[i]+"']//*[contains(text(),'"+MS_SAS_price[i]+"')]"),"Exists", cmpEqual, true);
       /*
        if(Price)
        {
          Log.Message("Succesfully verified price on SAS Page, with Merchandizing sheet ");
        }
        else{
          Log.Error("Price is not matching with Merchandizing sheet");
        }
        */
    }
    var StrikeoutPrice = aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.
     FindElement("//p[@data-tc-sas-kit-strikeout-price='"+MS_SAS_PPID[i]+"']//*[contains(text(),'"+MS_SAS_StrikeOutPrice[i]+"')]"),"Exists", cmpEqual, true);
    /*  if(StrikeoutPrice)
      {
        Log.Message("Succesfully verified strikeout price on SAS Page, with Merchandizing sheet ");
      }
      else{
          Log.Error("Strikeout Price is not matching with Merchandizing sheet");
        }
    */
  }
 // PrePurchase.prePurchaseValidation();
  
}
module.exports.startSasValidationNew = startSasValidationNew;
