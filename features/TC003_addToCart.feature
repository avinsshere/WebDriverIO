Feature: Add Product to cart, Proceed to checkout till make payments and validate order


   Scenario Outline: Login to the account
      Given User is on the login page
      When User provide "<email>" and "<password>"
      Then Verify user is on home page

      Examples:
         | email                | password     |
         | shereavi40@gmail.com | Password@123 |

   Scenario Outline: Add product to cart
      Given User navigate to the product page
      When User search the "<product>"
      When User provide "<size>" and "<colour>" and "<quantity>"
      Then By clicking on add to cart button product is added

      Examples:
         | product                  | size | colour | quantity |
         | Ajax Full-Zip Sweatshirt | M    | Blue   | 2        |

   Scenario Outline: Proceed to checkout and confirm the order
      Given User is on checkout page
      When User select shipping method and place order
      Then User get success "<message>"

      Examples:
         | message                      |
         | Thank you for your purchase! |

   Scenario Outline: Validate the order
      Given Navigate to Order confirmation page
      Then Verify the "<product>" and "<qty>"
      Examples:
         | product                  | qty |
         | Ajax Full-Zip Sweatshirt |4       |