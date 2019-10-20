package com.maven.Catalogue.stepdefinitions;

import com.maven.Catalogue.PageObject.Register;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterStepDefnition {
    private Register register=new Register();
    @Given("^I am on Homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I click on Login/Register$")
    public void iClickOnLoginRegister() {
        register.CustomerRegistration();
    }

    @Then("^I should be able to see the Registration Page$")
    public void iShouldBeAbleToSeeTheRegistrationPage() {

    }


    @And("^I should enter EMAIL ADDRESS \"([^\"]*)\"$")
    public void iShouldEnterEMAILADDRESS(String emailid) throws Throwable {

        register.EnterEmailId(emailid);
        //register.cookie();
    }

    @And("^I should be able to select \"([^\"]*)\" radio button$")
    public void iShouldBeAbleToSelectRadioButton(String arg0) throws Throwable {
        register.NewRadioButton();
    }

    @And("^I click on Select from Title dropdown$")
    public void iClickOnSelectFromTitleDropdown() throws Throwable {

    }

    @And("^I select TITLE \"([^\"]*)\"$")
    public void iSelectTITLE(String title) throws Throwable {
        register.TitleDropDown(title);
    }

    @And("^Enter text in FIRST Name box as \"([^\"]*)\"$")
    public void enterTextInFIRSTNameBoxAs(String fn) throws Throwable {
        register.InitialName(fn);
    }

    @And("^Enter text in LAST NAME box as \"([^\"]*)\"$")
    public void enterTextInLASTNAMEBoxAs(String ln) throws Throwable {
        register.FinalName(ln);
    }

    @And("^Enter TELEPHONE NUMBER inside box \"([^\"]*)\"$")
    public void enterTELEPHONENUMBERInsideBox(String teln) throws Throwable {
        register.TelNum(teln);
    }

    @And("^Enter ENTER YOUR PASSWORD \"([^\"]*)\"$")
    public void enterENTERYOURPASSWORD(String pw) {
        register.PassW(pw);
    }

    @And("^Enter CONFIRM PASSWORD \"([^\"]*)\"$")
    public void enterCONFIRMPASSWORD(String conpw) throws Throwable {
        register.ConPassW(conpw);
    }

    @And("^click on \"([^\"]*)\" tick box$")
    public void clickOnTickBox(String arg0) throws Throwable {
        register.Custicbox();
    }

    @And("^I click on Create my account button$")
    public void iClickOnCreateMyAccountButton() {

        register.CreateAccBut();
    }
}
