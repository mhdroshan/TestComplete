﻿
 

  function startSasValidation()
  {
  
  var entryPPIDs = 9;  
  var entryRenewalPlanRow = 16; 
  var entryProductNameRow = 2;  
  var entryStrikeOutPriceRow = 13;  
  var entryPriceRow = 14;  
  var FreeGifts= 3;  

  ExcelData();
  Delay(5000);
  //Opens the specified URL in a running instance of the specified browser.
    Browsers.Item(btChrome).Navigate("https://www.meaningfulbeauty.odev09.dw4.grdev.com/");
    Aliases.browser.BrowserWindow.Maximize();
    //Enters 'storefront[Tab]' in the 'textboxUsername' object.
   // Aliases.browser.pageMeaningfulBeautyCindyCrawfor.Login.textboxUsername.Keys("storefront[Tab]");
    //Enters 'eComweb123[Enter]' in the 'textboxPassword' object.
   // Aliases.browser.pageMeaningfulBeautyCindyCrawfor.Login.textboxPassword.Keys("eComweb123[Enter]");
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageMeaningfulBeautyCindyCrawfor.Wait();
    //Clicks the 'linkLearnMore' link.
    Aliases.browser.pageMeaningfulBeautyCindyCrawfor.linkLearnMore.Click();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.Wait();
    //Clicks the 'linkSelect' link.
    //Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.linkSelect.Click();
    //Checks whether the 'contentText' property of the Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.linkSelect object equals 'Select'.
    //aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.linkSelect, "contentText", cmpEqual, "Select");
  
  
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
  //var excelFile = Excel.Open("E:\\MBTEST\\MBAutomation\\SampleData.xlsx");
  //var excelFile =  Aliases.browser.pageSampledataXlsxGoogleSheets;



  var sheetCount = excelFile.SheetCount;
  for (var i = 0; i < sheetCount; i++) {
    
  var excelSheet = excelFile.SheetByIndex(i)
  Log.Message(excelSheet.Title);
  
  var sasPPIDs = [];
  var sasRenewalPlans = [];
  var sasProductName = [];
  var sasStrikeOutPrice = [];
  var sasPrice = [];
  var sasFreeGifts = [];
  

  for (var col = 2; col <=excelSheet.ColumnCount ; col++) {
        /*
       Check if the excel column heading is shop or not
      */
      var whichColumn = excelSheet.Cell(col, 1).Value;
      if(whichColumn=='Shop'){
        break;
      }
      var sasPPIDvalue = excelSheet.Cell(col,entryPPIDs).Value;
      var sasRenewalPlanvalue = excelSheet.Cell(col,entryRenewalPlanRow).Value;
      var sasProductNameValue = excelSheet.Cell(col, entryProductNameRow).Value;
      var sasStrikeOutPriceValue = excelSheet.Cell(col, entryStrikeOutPriceRow).Value;
      var sasPriceValue = excelSheet.Cell(col, entryPriceRow).Value;
      var sasFreeGiftsValue = excelSheet.Cell(col, FreeGifts).Value;
   
    
      sasPPIDs.push(sasPPIDvalue);
      sasRenewalPlans.push(sasRenewalPlanvalue);
      sasProductName.push(sasProductNameValue);
      sasStrikeOutPrice.push(sasStrikeOutPriceValue);
      sasPrice.push(sasPriceValue);
      sasFreeGifts.push(sasFreeGiftsValue);
      
      
  }
  
 
  Log.Message(sasPPIDs);
  Log.Message(sasRenewalPlans);
  Log.Message(sasProductName);
  Log.Message(sasStrikeOutPrice);
  Log.Message(sasPrice);
  Log.Message(sasFreeGifts);
  
  startSasValidation();


  // Assume arr is an array list containing some elements
  //let arr = [1, 2, 3, 4, 5];

  // Iterate over the array list using a for loop

  //    //*[@id="MT2A3540"]/div/div[6]/div/div/p[1]/strong/text()
  for (let i = 0; i < sasPPIDs.length; i++) {
  
  
        /*
            aqObject.CheckProperty(Object, PropertyName, PropertyValue, CompareType);
            Object - webElement -- //div[@data-tc-sasppid='"+sasPPIDs[i]+"']
            PropertyName - Exists, Name, Size, innerText, etc.,
            PropertyValue - true
            CompareType - cmpEqual
        */

    
  // Used to check the PPID   
   
      
    aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.FindElement("//div[@data-tc-sasppid='"+sasPPIDs[i]+"']"),"Exists", cmpEqual, true);
   // aqObject.CheckProperty(Aliases.browser.pageBuyMeaningfulBeautySkincareP.FindElement("//div[@data-tc-sasppid='"+sasPPIDs[i]+"']"),"Exists", cmpEqual, true);
  
      if(sasPrice[i]!=sasStrikeOutPrice[i])
      { 
      
  // Validating selling price 
     
        aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.FindElement("//p[@data-tc-sas-kit-selling-price='"+sasPPIDs[i]+"']//*[contains(text(),'"+sasPrice[i]+"')]"),"Exists", cmpEqual, true);
       // aqObject.CheckProperty(Aliases.browser.pageBuyMeaningfulBeautySkincareP.FindElement("//p[@data-tc-sas-kit-selling-price='"+sasPPIDs[i]+"']//*[contains(text(),'"+sasPrice[i]+"')]"),"Exists", cmpEqual, true);
     }
   
   
    aqObject.CheckProperty(Aliases.browser.pageWwwMeaningfulbeautyOdev09Dw4.FindElement("//p[@data-tc-sas-kit-strikeout-price='"+sasPPIDs[i]+"']//*[contains(text(),'"+sasStrikeOutPrice[i]+"')]"),"Exists", cmpEqual, true);
   //  aqObject.CheckProperty(Aliases.browser.pageBuyMeaningfulBeautySkincareP.FindElement("//p[@data-tc-sas-kit-strikeout-price='"+sasPPIDs[i]+"']//*[contains(text(),'"+sasStrikeOutPrice[i]+"')]"),"Exists", cmpEqual, true);
     //aqObject.CheckProperty(Aliases.browser.pageBuyMeaningfulBeautySkincareP2.FindElement("//p[@data-giftproduct='"+sasFreeGifts[i]+"']"),"Exists", cmpEqual, true);
 
    }
  
  }
   Log.SaveResultsAs("E:\\MBTEST\\MBAutomation\\Report\\", lsHTML);
 
    //Aliases.browser.BrowserWindow.Close();
 
 
   //E:\\MBTEST\\MBAutomation\\Reports1\\index
  //if(SendMail("ravikaanth2911@gmail.com","smtp.gmail.com","Ravikaanth","ravikaanth0606@gmail.com","Test Report","Please find the attached report","E:\\MBTEST\\MBAutomation\\new.txt"))

  //if(SendMail("ajay.deepak@squaredatalabs.com","smtp.hostinger.com","Ravikaanth N S","ravikaanth.ns@squaredatalabs.com","Test Report","Please find the attached report","E:\\MBTEST\\MBAutomation\\new.txt"))
   /*
   if(SendMail("firoz.khan@squaredatalabs.com","smtp.hostinger.com","Ravikaanth N S","ravikaanth.ns@squaredatalabs.com","Test Report","Please find the attached report","E:\\MBTEST\\MBAutomation\\new.txt"))
    {
      Log.Message("Mail was sent");
    }
  
    else
    {
      Log.Warning("Mail was not sent");
    }
    */

 
  
  }
  //Log.Message(startSasValidation());



  function ExcelData(){
    //Aliases.browser.BrowserWindow.Click(111, 78);
    //Opens the specified URL in a running instance of the specified browser.
    Browsers.Item(btChrome).Navigate("https://drive.google.com/drive/my-drive");
    //Maximizes the specified Window object.
    Aliases.browser.BrowserWindow.Maximize();
    //Checks whether the 'contentText' property of the Aliases.browser.pageMyDrive.panelExcelSampledataXlsx object equals 'SampleData.xlsx'.
    var file=aqObject.CheckProperty(Aliases.browser.pageMyDrive.panelExcelSampledataXlsx, "contentText", cmpEqual, "SampleData.xlsx");
    if(file)
    {
    Aliases.browser.pageMyDrive.vg.Click();
    //Clicks the 'panelDownload' control.
    Aliases.browser.pageMyDrive.panelDownload2.Click();
    }
    else
    {
      Log.Error("File is missing");
    }
 
  }



  module.exports.startSasValidation = startSasValidation;
  //module.exports.variable = sasPPIDs;
  
  
