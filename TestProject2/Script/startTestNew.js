var sasTestNew = require("sasTestNew"); //importing another script file. THat script file is dedicated for sas pages
var PrePurchase = require("PrePurchase");
var PrePurchaseNew = require("PrePurchaseNew");

var sasPPIDs = [];
var sasRenewalPlans = [];
var sasProductName = [];
var sasStrikeOutPrice = [];
var sasPrice = [];
var sasFreeGifts = [];
var sasFreeGiftPPIDs = [];
var prepurchaseUpsellPPIDs = [];

function kickOffTestnew() {
  Log.Message("StartTest executed");

  var entryPPIDs = 9;
  var entryRenewalPlanRow = 16;
  var entryProductNameRow = 2;
  var entryStrikeOutPriceRow = 13;
  var entryPriceRow = 14;
  var FreeGifts = 3;
  var entryGiftPPIDs = 17;
  var entryprepurchaseUpsellPPIDs = 59;
  
  //ExcelData();
  Log.Message("Retrieving the data from Mercantile sheet  ");

  var excel = Sys.OleObject("Excel.Application");
  excel.Visible = false; // Set this to false if you don't want to see the Excel window.

  /*var excelFile = Excel.Open("C:\\Users\\Ravikaanth\\OneDrive\\Documents\\MB TEST\\CoreNew (1).xlsx");

  var excelSheet = excelFile.SheetByTitle("ECOM-2307 - Revert to core");

  /*
  Get SAS RenewalPlan's
  */

  var excelFile = Excel.Open("C:\\Users\\USER\\Downloads\\SampleData.xlsx");
  //var excelFile = aqExcel.OpenExcelFile("C:\\Users\\Ravikaanth\\OneDrive\\Documents\\MB TEST\\SampleData.xlsx");
  //var excelFile = Excel.Open(".\\Stores\\Files\\SampleData.xlsx");

  var sheetCount = excelFile.SheetCount;
  for (var i = 0; i < sheetCount; i++) {
    var excelSheet = excelFile.SheetByIndex(i);
    Log.Message("Campaign Name - "+excelSheet.Title);

    
    /*
       We will remove below after code optimization
    */
    if (sasPPIDs.length > 0) {
      sasPPIDs.length=0;
      sasRenewalPlans.length=0;
      sasProductName.length=0;
      sasStrikeOutPrice.length=0;
      sasPrice.length=0;
      sasFreeGifts.length=0;
      sasFreeGiftPPIDs.length=0;
      prepurchaseUpsellPPIDs.length=0;
    }
    
    /*
     Start Reading and storing all values in global TC variables
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
      sasFreeGiftPPIDs.push(sasFreeGiftPPIDvalue);
      prepurchaseUpsellPPIDs.push(upsellPPIDs);
    }
    
    /*
     End Reading and storing all values in global TC variables
    */

   
    
    

    Log.Message("SAS PPIDs - "+sasPPIDs);
    Log.Message("SAS Renewal Plan ID - "+sasRenewalPlans);
    Log.Message("SAS Prduct name - "+sasProductName);
    Log.Message("SAS Strikeout price - "+sasStrikeOutPrice);
    Log.Message("SAS Price - "+sasPrice);
    Log.Message("SAS Free Gifts - "+sasFreeGifts);
    Log.Message("SAS Fee Gifts PPIDs - "+sasFreeGiftPPIDs);
    Log.Message("SAS Pre purchase Upsell PPIDs - "+prepurchaseUpsellPPIDs);
    //Log.Message("All the required data's are collected and stored successfully");

    
    //Start doing SAS test 
  
    sasTestNew.startSasValidationNew();
    PrePurchaseNew.prePurchaseValidationNew();
    PrePurchase.prePurchaseValidation();

    
  }
  Log.SaveResultsAs("E:\\MBTEST\\MBAutomation\\TestProject2\\Report\\", lsHTML);
  
}
function ExcelData() {
  aqFileSystem.DeleteFile("C:\\Users\\USER\\Downloads\\SampleData.xlsx");
  Browsers.Item(btChrome).Navigate("https://drive.google.com/drive/my-drive");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Checks whether the 'contentText' property of the Aliases.browser.pageMyDrive.panelExcelSampledataXlsx object equals 'SampleData.xlsx'.
  var FilePresent = aqObject.CheckProperty(
    Aliases.browser.pageMyDrive.panelExcelSampledataXlsx,
    "contentText",
    cmpEqual,
    "SampleData.xlsx"
  );
  if (FilePresent) {
    Aliases.browser.pageMyDrive.vg.Click();
    //Clicks the 'panelDownload' control.
    fileDownload = Aliases.browser.pageMyDrive.panelDownload2.Click();
    // Sys.WaitProcess(fileDownload,5000);
    // Sys.WaitBrowser(fileDownload, 5000);
    var filePath = "C:\\Users\\USER\\Downloads\\Sampledata.xlsx";
    var maxWaitTime = 20000;

    waitForFileDownload(filePath, maxWaitTime);
  } else {
    Log.Error("File is not in the drive");
  }
}

function waitForFileDownload(filePath, maxWaitTime) {
  var startTime = new Date().getTime();

  while (true) {
    if (aqFileSystem.Exists(filePath)) {
      Log.Message("File download completed.");
      break;
    }

    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - startTime;

    if (elapsedTime >= maxWaitTime) {
      Log.Error("File download timed out.");
      break;
    }

    // Delay(1000);
  }
}

module.exports.sheetPPID = sasPPIDs;
module.exports.sheetPrice = sasPrice;
//module.exports.sheetGiftPPID = sasFreeGiftPPIDs;
module.exports.sheetStrikeoutPrice = sasStrikeOutPrice;
module.exports.sheetGiftPPID = sasFreeGiftPPIDs;
module.exports.sheetFreeGifts = sasFreeGifts;
module.exports.sheetprePurchaseUpsellPPIDs = prepurchaseUpsellPPIDs;

