Feature: Create an account for new user on Magento Commerce application

 Scenario: Register new user
    Given User is on the login page
    When User click on create an account
    When User provide user details
    Then Verify User is on my account page
    Then User Update address in my account page