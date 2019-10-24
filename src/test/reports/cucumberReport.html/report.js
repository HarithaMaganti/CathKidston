$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 2,
  "name": "New Customer Registration",
  "description": "As a new customer\r\nI want to Register\r\nSo that i can Login successfully",
  "id": "new-customer-registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    }
  ]
});
formatter.before({
  "duration": 22927904380,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Register for Login",
  "description": "",
  "id": "new-customer-registration;register-for-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Login/Register",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to see the Registration Page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should enter EMAIL ADDRESS \"hmaganti1@hotmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should be able to select \"NO, I\u0027M A NEW CUSTOMER\" radio button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Select from Title dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select TITLE \"Mrs\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter text in FIRST Name box as \"Hari\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter text in LAST NAME box as \"Mag\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter TELEPHONE NUMBER inside box \"02085918930\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Enter ENTER YOUR PASSWORD \"sriharitha\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Enter CONFIRM PASSWORD \"sriharitha\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on \"SEND ME CATH KIDSTON MAGAZINES AND OFFERS BY POST.\" tick box",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Create my account button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterStepDefnition.iAmOnHomepage()"
});
formatter.result({
  "duration": 464123038,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefnition.iClickOnLoginRegister()"
});
formatter.result({
  "duration": 374494459,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefnition.iShouldBeAbleToSeeTheRegistrationPage()"
});
formatter.result({
  "duration": 31219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hmaganti1@hotmail.com",
      "offset": 30
    }
  ],
  "location": "RegisterStepDefnition.iShouldEnterEMAILADDRESS(String)"
});
formatter.result({
  "duration": 1966348763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NO, I\u0027M A NEW CUSTOMER",
      "offset": 28
    }
  ],
  "location": "RegisterStepDefnition.iShouldBeAbleToSelectRadioButton(String)"
});
formatter.result({
  "duration": 35122740116,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: Element is not currently visible and so may not be interacted with\nCommand duration or timeout: 30.05 seconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027oopsilon\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_192\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d43.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 52c2ef69-edfa-4148-8719-4c05dd0f180c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.maven.Catalogue.PageObject.Register.NewRadioButton(Register.java:36)\r\n\tat com.maven.Catalogue.stepdefinitions.RegisterStepDefnition.iShouldBeAbleToSelectRadioButton(RegisterStepDefnition.java:36)\r\n\tat ✽.And I should be able to select \"NO, I\u0027M A NEW CUSTOMER\" radio button(Register.feature:12)\r\nCaused by: org.openqa.selenium.ElementNotVisibleException: Element is not currently visible and so may not be interacted with\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027oopsilon\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_192\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.fxdriver.preconditions.visible(file:///C:/Users/sniggy/AppData/Local/Temp/anonymous4789287952770502639webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:10092)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.checkPreconditions_(file:///C:/Users/sniggy/AppData/Local/Temp/anonymous4789287952770502639webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12644)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/sniggy/AppData/Local/Temp/anonymous4789287952770502639webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/sniggy/AppData/Local/Temp/anonymous4789287952770502639webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:625)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterStepDefnition.iClickOnSelectFromTitleDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs",
      "offset": 16
    }
  ],
  "location": "RegisterStepDefnition.iSelectTITLE(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hari",
      "offset": 33
    }
  ],
  "location": "RegisterStepDefnition.enterTextInFIRSTNameBoxAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mag",
      "offset": 32
    }
  ],
  "location": "RegisterStepDefnition.enterTextInLASTNAMEBoxAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "02085918930",
      "offset": 35
    }
  ],
  "location": "RegisterStepDefnition.enterTELEPHONENUMBERInsideBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sriharitha",
      "offset": 27
    }
  ],
  "location": "RegisterStepDefnition.enterENTERYOURPASSWORD(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sriharitha",
      "offset": 24
    }
  ],
  "location": "RegisterStepDefnition.enterCONFIRMPASSWORD(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SEND ME CATH KIDSTON MAGAZINES AND OFFERS BY POST.",
      "offset": 10
    }
  ],
  "location": "RegisterStepDefnition.clickOnTickBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterStepDefnition.iClickOnCreateMyAccountButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 31218,
  "status": "passed"
});
});