import axios from "axios";
import axiosInstance from "./axiosInstance";

export async function getTotalPopulation (){
    const res = await axiosInstance.get('/getTotalPopulation')
    console.log(res.data, "In api file")
    if(res.data.success){

      return  res.data.tpopulation
    }
}

export async function getTotalCountries(){
    const res = await axiosInstance.get('/getTotalCountries')
    if(res.data.success){
        return res.data.countryCount
    }
}
export async function getTenPopulatedCountries(){
    const res = await axiosInstance.get('/getTenPopulatedCountries')
    if(res.data.success){
        return res.data.topten
    }
}

export async function getLeastPopulatedCountries(){
    const res = await axiosInstance.get('/getLeastPopulatedCountries')
    if(res.data.success){
        return res.data.toptenleast
    }
}

export async function getAveragePopulationCountries(){
    const res = await axiosInstance.get('/getAveragePopulationCountries')
    if(res.data.success){
        return res.data.Average
    }
}

export async function getGreaterPopulationBySpecificVal(value) {
    const res = await axiosInstance.post('/getGreaterPopulationBySpecificVal', {population: value});
    if (res.data.success) {
        return res.data.result;
    }
}

export async function getLessPopulationBySpecificVal(value) {
    const res = await axiosInstance.post('/getLessPopulationBySpecificVal', {population: value});
    if (res.data.success) {
        return res.data.result;
    }
}

export async function getTotalPopulationByContinent(){
    const res = await axiosInstance.get('/getTotalCountries')
    if(res.data.success){
        return res.data.totalPopulation
    }
}

export async function getSpecificCountryPopulation(){
    const res = await axiosInstance.get('/getSpecificCountryPopulation')
    if(res.data.success){
        return res.data.tpopulation
    }
}

export async function getSpokenLanguageInCountry(){
    const res = await axiosInstance.get('/getSpokenLanguageInCountry')
    if(res.data.success){
        return res.data.spokenLang
    }
}

export async function getTotalSpokenLanguages(){
    const res = await axiosInstance.get('/getTotalSpokenLanguages')
    if(res.data.success){
        return res.data.totalLang
    }
}

export async function getTenMostSpokenLanguages(){
    const res = await axiosInstance.get('/getTenMostSpokenLanguages')
    if(res.data.success){
        return res.data.mostSpokenLang
    }
}

export async function getGdpOfCountriesPerCapital(){
    const res = await axiosInstance.get('/getGdpOfCountriesPerCapital')
    if(res.data.success){
        return res.data.GDPPerCapita
    }
}

export async function getAverageLifeExpectancy(){
    const res = await axiosInstance.get('/getAverageLifeExpectancy')
    if(res.data.success){
        return res.data.AverageLifeExpectancy
    }
}

export async function getHighestLifeExpectancy(){
    const res = await axiosInstance.get('/getHighestLifeExpectancy')
    if(res.data.success){
        return res.data.HighLifeExpectancy
    }
}

export async function getLowestLifeExpectancy(){
    const res = await axiosInstance.get('/getLowestLifeExpectancy')
    if(res.data.success){
        return res.data.LowLifeExpectancy
    }
}

export async function getCityInformation(){
    const res = await axiosInstance.get('/getCityInformation')
    if(res.data.success){
        return res.data.cityInfo
    }
}

export async function getLargestCity(){
    const res = await axiosInstance.get('/getLargestCity')
    if(res.data.success){
        return res.data.LargestCity
    }
}

export async function getTotalCities(){
    const res = await axiosInstance.get('/getTotalCities')
    if(res.data.success){
        return res.data.TotalCities
    }
}



