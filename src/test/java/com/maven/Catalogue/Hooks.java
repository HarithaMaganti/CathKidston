package com.maven.Catalogue;

import com.maven.Catalogue.drivers.DriverFactory;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks {
    DriverFactory driverFactory= new DriverFactory();

    @Before
    public void setUp(){
        driverFactory.setupBrowser("Firefox");
        driverFactory.setupUrl("https://www.cathkidston.com/");
        driverFactory.maximise();
        driverFactory.timeOut();
        driverFactory.DeleteCookies();
    }

    @After
    public void tearDown(){

        //driverFactory.closeBrowser();
    }
}
