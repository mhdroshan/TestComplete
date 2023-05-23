var performSasTest = require("PerformSasTest");
var performTestCasePermutation = require("PerformTestCasePermutation");
var CustomObject = require("CustomObject");

function extractDataFromCampaignSheet(excelSheet){
        
        var sasPPIDs = [];
        var sasRenewalPlans = [];
        var sasProductName = [];
        var sasStrikeOutPrice = [];
        var sasPrice = [];
        var sasFreeGifts = [];
        var sasFreeGiftPPIDs = [];
        var prepurchaseUpsellPPIDs = [];
        
        Log.Message("Started Capturing data from campaign excel tab");

        var entryPPIDs = 9;
        var entryRenewalPlanRow = 16;
        var entryProductNameRow = 2;
        var entryStrikeOutPriceRow = 13;
        var entryPriceRow = 14;
        var FreeGifts = 3;
        var entryGiftPPIDs = 17;
        var entryprepurchaseUpsellPPIDs = 59;
       
         /*
           Start reading excel tab datas
          */ 
        
      for (var col = 2; col <= excelSheet.ColumnCount; col++) {
          /*
           Check if the excel column heading is shop or not
          */
          var whichColumn = excelSheet.Cell(col, 1).Value;
          if (whichColumn == "Shop") {
            break;
          }
          var sasPPIDvalue = excelSheet.Cell(col, entryPPIDs).Value;
          var sasRenewalPlanvalue = excelSheet.Cell(col, entryRenewalPlanRow).Value;
          var sasProductNameValue = excelSheet.Cell(col, entryProductNameRow).Value;
          var sasStrikeOutPriceValue = excelSheet.Cell(col,entryStrikeOutPriceRow).Value;
          var sasPriceValue = excelSheet.Cell(col, entryPriceRow).Value;
          var sasFreeGiftsValue = excelSheet.Cell(col, FreeGifts).Value;
          var sasFreeGiftPPIDvalue = excelSheet.Cell(col, entryGiftPPIDs).Value;
          var upsellPPIDs = excelSheet.Cell(col, entryprepurchaseUpsellPPIDs).Value;
     
          sasPPIDs.push(sasPPIDvalue);
          sasRenewalPlans.push(sasRenewalPlanvalue);
          sasProductName.push(sasProductNameValue);
          sasStrikeOutPrice.push(sasStrikeOutPriceValue);
          sasPrice.push(sasPriceValue);
          sasFreeGifts.push(sasFreeGiftsValue);
          
          /*sasFreeGiftPPIDvalue is coming from excel sheet as comma seperated for each SAS KIT
            
          */
          var individualGiftPPIDArr = sasFreeGiftPPIDvalue.split(",");
          
          for (var i=0;i<individualGiftPPIDArr.length;i++){
            
            var giftPPID = individualGiftPPIDArr[i];
            if(sasFreeGiftPPIDs.indexOf(giftPPID)<0)
             {
               sasFreeGiftPPIDs.push(giftPPID);
             }
             
          } 
          
          prepurchaseUpsellPPIDs.push(upsellPPIDs);
          
        }
        
          Log.Message("SAS PPIDs - "+sasPPIDs);
          Log.Message("SAS Renewal Plan ID - "+sasRenewalPlans);
          Log.Message("SAS Prduct name - "+sasProductName);
          Log.Message("SAS Strikeout price - "+sasStrikeOutPrice);
          Log.Message("SAS Price - "+sasPrice);
          Log.Message("SAS Free Gifts - "+sasFreeGifts);
          Log.Message("SAS Fee Gifts PPIDs - "+sasFreeGiftPPIDs);
          Log.Message("SAS Pre purchase Upsell PPIDs - "+prepurchaseUpsellPPIDs);
  
        
         /*
           End reading excel tab datas
         */
         
         /*
            Saving data to a object
         */
         
          var customObjectData = new CustomObject(sasPPIDs,sasRenewalPlans,sasStrikeOutPrice,sasPrice,sasFreeGifts,sasFreeGiftPPIDs,prepurchaseUpsellPPIDs);
         
          performSasTest.performSasValidation(customObjectData);
          
          performTestCasePermutation.identifyAllPossibleCombination(customObjectData);

}

 
 
module.exports.extractDataFromCampaignSheet = extractDataFromCampaignSheet;