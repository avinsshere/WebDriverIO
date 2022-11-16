Feature: Verify the Login functionality of Magento Commerce application


   Scenario Outline: Login to the account with valid data
      Given User is on the login page
      When User provide "<email>" and "<password>"
      Then Verify user is on home page
      Then User log out from application

      Examples:
         | email                | password     |
         | shereavi26@gmail.com | Password@123 |

   Scenario Outline: Login to the account with invalid data
      Given User is on the login page
      When User provide "<email>" and "<password>"
      Then Verify User can see alert "<message>"

      Examples:
         | email                | password | message          |
         | shereavi27@gmail.com | Password | Incorrect CAPTCHA|