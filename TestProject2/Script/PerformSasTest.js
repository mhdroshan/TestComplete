
function performSasValidation(customObjectData) 
{
  Log.Message("Sas validation started"); 
  
  var customObject = require("CustomObject");
  Log.Message("Sas validation started " + customObjectData.sasPPIDs); 
  

  var sasPPIDs = customObjectData.sasPPIDs;
  var sasPrice = customObjectData.sasPrice;
  var sasStrikeOutPrice = customObjectData.sasStrikeOutPrice;

  Browsers.Item(btChrome).Navigate("https://www.meaningfulbeauty.odev09.dw4.grdev.com/skincare/sas/core/");
  Aliases.browser.BrowserWindow.Maximize();

  for (let i = 0; i < sasPPIDs.length; i++) 
  {
   
    // Validating ppid
    var PPIDValidation = aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.
     FindElement("//div[@data-tc-sasppid='"+sasPPIDs[i]+"']"),"Exists", cmpEqual, true);
     
     if(PPIDValidation)
     {
       Log.Message("Succesfully verified KIT PPID on SAS Page, with Merchandizing sheet "+sasPPIDs[i]);
     }
     else
     {
       Log.Error("KIT PPID is not matching with Merchandizing sheet")
     }
  
     // Validating selling price

    if (sasPrice[i] != sasStrikeOutPrice[i]) 
    {
   var Price = aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.
      FindElement("//p[@data-tc-sas-kit-selling-price='"+sasPPIDs[i]+"']//*[contains(text(),'"+sasPrice[i]+"')]"),"Exists", cmpEqual, true);
       
        if(Price)
        {
          Log.Message("Succesfully verified price on SAS Page, with Merchandizing sheet ");
        }
        else{
          Log.Error("Price or PPID is not matching with Merchandizing sheet");
        }
        
    }
    var StrikeoutPrice = aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.
     FindElement("//p[@data-tc-sas-kit-strikeout-price='"+sasPPIDs[i]+"']//*[contains(text(),'"+sasStrikeOutPrice[i]+"')]"),"Exists", cmpEqual, true);
      if(StrikeoutPrice)
      {
        Log.Message("Succesfully verified strikeout price on SAS Page, with Merchandizing sheet ");
      }
      else{
          Log.Error("Strikeout Price or PPID is not matching with Merchandizing sheet");
        }
    
  }
  
  Log.Message("SAS validation completed");
  
}
module.exports.performSasValidation = performSasValidation;
