
Feature: Punk API Feature

  Scenario: Validating the Punk API
    Given I call the punk api 'https://api.punkapi.com/v2/beers/' with beer id 192
    Then I expect a 200 status response
    And The malt is 'Extra Pale'
    And The malt value is 5.3 and the unit is 'kilograms'