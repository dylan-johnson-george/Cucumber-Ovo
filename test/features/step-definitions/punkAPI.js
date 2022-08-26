const {Given, Then} = require('cucumber')
const axios = require('axios')
const assert = require('assert')

let apiResponse;

Given('I call the punk api {string} with beer id {int}', async function (url, beerId) {
  const fullUrl = url + beerId
  apiResponse = await axios.get(fullUrl)
  .then((response) => {
    return response
  })
  .catch((error) => {
    return error
  })
});


Then('I expect a {int} status response', function (statusCode) {
  assert.equal(statusCode, apiResponse.status)
});


Then('The malt is {string}', function (expectedMalt) {
    const actualMalt = apiResponse.data[0].ingredients.malt[0].name
    assert.equal(expectedMalt, actualMalt)
});


Then('The malt value is {float} and the unit is {string}', function (expectedMaltValue, expectedUnit) {
    const actualMaltValue = apiResponse.data[0].ingredients.malt[0].amount.value
    const actualUnit = apiResponse.data[0].ingredients.malt[0].amount.unit

    assert.equal(expectedMaltValue, actualMaltValue)
    assert.equal(expectedUnit, actualUnit)
});