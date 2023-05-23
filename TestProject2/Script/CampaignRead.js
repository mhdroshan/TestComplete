﻿ var captureCampaignData = require("CampaignDataCapture");
 function readCampaign(){
 
   ExcelData();
   Log.Message("Retrieving the data from Mercantile sheet  ");
   var excel = Sys.OleObject("Excel.Application");
   excel.Visible = false; // Set this to false if you don't want to see the Excel window.

   var excelFile = Excel.Open("C:\\Users\\USER\\Downloads\\SampleData.xlsx");
  //var excelFile = aqExcel.OpenExcelFile("C:\\Users\\Ravikaanth\\OneDrive\\Documents\\MB TEST\\SampleData.xlsx");
  //var excelFile = Excel.Open(".\\Stores\\Files\\SampleData.xlsx");

   var sheetCount = excelFile.SheetCount;
   for (var i = 0; i < sheetCount; i++) {
      var excelSheet = excelFile.SheetByIndex(i);
      Log.Message("Campaign Name - "+excelSheet.Title); 
      captureCampaignData.extractDataFromCampaignSheet(excelSheet); 
    
  }
  Log.SaveResultsAs("E:\\MBTEST\\MBAutomation\\TestProject2\\Report\\", lsHTML);
}

function ExcelData() {
  
    aqFileSystem.DeleteFile("C:\\Users\\USER\\Downloads\\SampleData.xlsx");
    Browsers.Item(btChrome).Navigate("https://drive.google.com/drive/my-drive");
    //Maximizes the specified Window object.
    Aliases.browser.BrowserWindow.Maximize();
    //Checks whether the 'contentText' property of the Aliases.browser.pageMyDrive.panelExcelSampledataXlsx object equals 'SampleData.xlsx'.
    var FilePresent = aqObject.CheckProperty(Aliases.browser.pageMyDrive.panelExcelSampledataXlsx,"contentText",cmpEqual,"SampleData.xlsx");
    if (FilePresent) {
      Aliases.browser.pageMyDrive.vg.Click();
      //Clicks the 'panelDownload' control.
      fileDownload = Aliases.browser.pageMyDrive.panelDownload2.Click();
      // Sys.WaitProcess(fileDownload,5000);
      // Sys.WaitBrowser(fileDownload, 5000);
      var filePath = "C:\\Users\\USER\\Downloads\\Sampledata.xlsx";
      var maxWaitTime = 20000;
      waitForFileDownload(filePath, maxWaitTime);
    } 
     else 
     {
        Log.Error("File is not in the drive");
     }
}

function waitForFileDownload(filePath, maxWaitTime) {
    var startTime = new Date().getTime();

    while (true) {
    if (aqFileSystem.Exists(filePath)) 
    {
      Log.Message("File download completed.");
      break;
    }

    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - startTime;

    if (elapsedTime >= maxWaitTime) 
    {
      Log.Error("File download timed out.");
      break;
    }

    // Delay(1000);
  }
}