function Test2()
{
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(115, 79);
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://www.meaningfulbeauty.odev09.dw4.grdev.com/cart");
  Aliases.browser.BrowserWindow.Maximize();
  //Checks whether the 'contentText' property of the Aliases.browser.pageCart.textnodeMt2a3538 object equals 'MT2A3538'.
  aqObject.CheckProperty(Aliases.browser.pageCart.textnodeMt2a3538, "contentText", cmpEqual, "MT2A3538");
}