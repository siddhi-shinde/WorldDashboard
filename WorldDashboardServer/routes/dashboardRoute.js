const express = require('express')
const dashboardController = require('../controllers/dashboardController')

const router =  express.Router()


console.log(dashboardController);

router.get('/getTotalPopulation',dashboardController.getTotalPopulation)

router.get('/getTenPopulatedCountries',dashboardController.getTenPopulatedCountries)

router.get('/getLeastPopulatedCountries',dashboardController.getLeastPopulatedCountries)

router.get('/getTotalCountries',dashboardController.getTotalCountries)

router.get('/getAveragePopulationCountries',dashboardController.getAveragePopulationCountries)

router.get('/getTotalPopulationByContinent',dashboardController.getTotalPopulationByContinent)

router.post('/getGreaterPopulationBySpecificVal',dashboardController.getGreaterPopulationBySpecificVal)

router.post('/getLessPopulationBySpecificVal',dashboardController.getLessPopulationBySpecificVal)

router.get('/getSpecificCountryPopulation',dashboardController.getSpecificCountryPopulation)

router.get('/getSpokenLanguageInCountry',dashboardController.getSpokenLanguageInCountry)

router.get('/getTotalSpokenLanguages',dashboardController.getTotalSpokenLanguages)

router.get('/getTenMostSpokenLanguages',dashboardController.getTenMostSpokenLanguages)

router.get('/getGdpOfCountriesPerCapital',dashboardController.getGdpOfCountriesPerCapital)

router.get('/getAverageLifeExpectancy',dashboardController.getAverageLifeExpectancy)

router.get('/getHighestLifeExpectancy',dashboardController.getHighestLifeExpectancy)

router.get('/getLowestLifeExpectancy',dashboardController.getLowestLifeExpectancy)

router.get('/getCityInformation',dashboardController.getCityInformation)

router.get('/getLargestCity',dashboardController.getLargestCity)

router.get('/getTotalCities',dashboardController.getTotalCities)

module.exports = router

// http://localhost:5005/dashboard/