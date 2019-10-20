@Register
Feature: New Customer Registration
  As a new customer
  I want to Register
  So that i can Login successfully

  Scenario: Register for Login
    Given I am on Homepage
    When I click on Login/Register
    Then I should be able to see the Registration Page
    And I should enter EMAIL ADDRESS "hmaganti1@hotmail.com"
    And I should be able to select "NO, I'M A NEW CUSTOMER" radio button
    And I click on Select from Title dropdown
    And I select TITLE "Mrs"
    And Enter text in FIRST Name box as "Hari"
    And Enter text in LAST NAME box as "Mag"
    And Enter TELEPHONE NUMBER inside box "02085918930"
    And Enter ENTER YOUR PASSWORD "sriharitha"
    And Enter CONFIRM PASSWORD "sriharitha"
    And click on "SEND ME CATH KIDSTON MAGAZINES AND OFFERS BY POST." tick box
    And I click on Create my account button
