package com.maven.Catalogue;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources",dryRun = false,strict = true,tags = "@Register")
//@RunWith(Cucumber.class)
//@CucumberOptions(features = "src/test",
// tags = {"@endtoend"},
//plugin = {"json:src/test/cathJSON.json", "html:src/test/reports/cucumberReport.html"})

public class RunnerClass {
}
