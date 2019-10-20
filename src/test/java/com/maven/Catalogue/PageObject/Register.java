package com.maven.Catalogue.PageObject;

import com.maven.Catalogue.drivers.DriverFactory;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

public class Register extends DriverFactory {
    @FindBy(linkText = "LOGIN/REGISTER")
    private WebElement Registeration;
    public void CustomerRegistration(){
        Registeration.click();
    }

    //@FindBy (className = "cookie_policy")
    //private WebElement Acceptcookie;
//public void cookie (){
    //driver.switchTo().frame(Acceptcookie);
    //driver.switchTo().defaultContent();//to move out of frame use
    //Acceptcookie.click();
    //}


    @FindBy (id = "j_username")//or (css="#j_username")
    private WebElement EmailAddress;
    public void EnterEmailId(String emailid){

        EmailAddress.sendKeys(emailid);
    }

    @FindBy (xpath ="(//label[@class='inline_label'])[4]")

    private WebElement Newcustomerradiobutton;
    public void NewRadioButton() throws InterruptedException {
        Thread.sleep(3000);
        Newcustomerradiobutton.click();
    }

    @FindBy(css="#title")
    private WebElement SelectDropdowntitle;
    public void TitleDropDown(String title){
        SelectDropdowntitle.click();
        Select select=new Select(SelectDropdowntitle);
        select.selectByVisibleText(title);
    }

    @FindBy (css="#first_name")
    private WebElement Firstname;
    public void InitialName(String fn){
        Firstname.sendKeys(fn);
    }

    @FindBy (css="#last_name")
    private WebElement Lastname;
    public void FinalName(String ln){
        Lastname.sendKeys(ln);
    }

    @FindBy (css="#telephone_number")
    private WebElement Telephonenumber;
    public void TelNum(String teln){
        Telephonenumber.sendKeys(teln);
    }

    @FindBy (css="#password")
    private WebElement Password;
    public void PassW(String pw){
        Password.sendKeys(pw);
    }
    @FindBy (css="#confirm_password")
    private WebElement Confirmpassword;
    public void ConPassW(String conpw){
        Confirmpassword.sendKeys(conpw);
    }

    @FindBy (xpath ="//div[9]")
    private WebElement Customermarketingtickbox;

    public void Custicbox() throws InterruptedException {
        Thread.sleep(2000);
        Customermarketingtickbox.click();
    }

    @FindBy (xpath = "(//button[@type='submit'])[3]")
    private WebElement Createmyaccountbutton;
    public void CreateAccBut()  {

        Createmyaccountbutton.click();
    }
}
