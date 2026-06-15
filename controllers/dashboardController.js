const express = require('express');
const connection = require('../config/db')

async function getTotalPopulation (req,res){
    try {
        const q1 = "select sum(Population) as tPopulation from country;"
        await connection.execute(q1,(err,result)=>{
            if(err){
                console.log(err)
                res.status(400).send({msg:"database error"})
            }else{
                console.log(result[0])
        const tpopulation  = result[0].tPopulation

        res.status(200).send({tpopulation:tpopulation, success:true})

            }
        })  
    } catch (error) {
        res.status(500).send({msg:"Server error"})
    }
}

async function getTenPopulatedCountries(req,res){
    try {
        const q2 = "select Name, Population from country order by Population desc limit 10;"
        await connection.execute(q2,(err,result)=>{
            if(err){
                console.log(err)
                res.status(400).send({success:false, msg:"database error"})
            }else{
                console.log(result)
        const topten  = result.topten

        res.status(200).send({topten:result, success:true})

            }
        })
    }catch(error){
        res.status(500).send({msg:"Server Error"})
    }
}

async function getLeastPopulatedCountries(req,res){
     try {
        const q3 = "select Name, Population from country order by Population asc limit 10;"
        await connection.execute(q3,(err,result)=>{
            if(err){
                console.log(err)
                res.status(400).send({success:false, msg:"database error"})
            }else{
                console.log(result)
        const toptenleast  = result.toptenleast

        res.status(200).send({toptenleast:result, success:true})
            }
        })
    }catch(error){
    res.status(500).send({msg:"Server Error"})
    }
}

async function getTotalCountries(req,res){
    try {
        const q4 = "select count(*) as cCount from country;"
        
        await connection.execute(q4, (err,result)=>{
            if(err){
                res.status(400).send({success:false, msg:"Database error"})
            }else{
                console.log(result[0])
                res.status(200).send({success:true,countryCount:result[0].cCount})
            }
        })

    } catch (error) {
        res.status(500).send({msg:"Server error"})
    }
}

async function getAveragePopulationCountries(req,res){
     try {
        const q5 = "select avg(Population) as AveragePopulation from country;"
        
        await connection.execute(q5, (err,result)=>{
            if(err){
                res.status(400).send({msg:"Database error"})
            }else{
                console.log(result[0])
                res.status(200).send({success:true,Average:result[0].AveragePopulation})
            }
        })

    }catch(error){
    res.status(500).send({msg:"Server Error"})
    }
}

async function getTotalPopulationByContinent(req,res){
    try {
        const q6 = "select continent,sum(Population) as totalPopulation from country group by continent;"
        
        await connection.execute(q6, (err,result)=>{
            if(err){
                res.status(400).send({msg:"Database error"})
            }else{
                console.log(result)
                res.status(200).send({success:true,totalPopulation:result})
            }
        })

    }catch(error){
    res.status(500).send({msg:"Server Error"})
    }
}

 function getGreaterPopulationBySpecificVal(req,res){
    try {
        const x = req.body.popCount
        q7 =`SELECT Name, Population FROM country WHERE Population > ${x} ORDER BY Population DESC;`
        
        connection.execute(q7, (err,result)=>{
            if(err){
                res.status(400).send({msg:"Database error..."})
            }else{
                res.status(200).send({result:result})
            }
        })
    } catch (error) {
        res.status(500).send({msg:"Server error"})
    }
}

function getLessPopulationBySpecificVal(req,res){
    try {
        const x = req.body.popCount
        q7 =`SELECT Name, Population FROM country WHERE Population < ${x} ORDER BY Population DESC;`
        
        connection.execute(q7, (err,result)=>{
            if(err){
                res.status(400).send({msg:"Database error..."})
            }else{
                res.status(200).send({result:result})
            }
        })
    }catch(error){
    res.status(500).send({msg:"Server Error"})
    }
}

 function getSpecificCountryPopulation(req, res) {
    try {
        const q9 = "SELECT Name, Population FROM country WHERE Name='India'";

        connection.execute(q9, (err, result) => {
            if(err) {
                console.log(err);
                return res.status(400).send({ msg: "database error" });
            }
            console.log(result[0]);
            const countryPop = result[0].Population;

            res.status(200).send({
                countryPop,
                success: true
            });
        });

    } catch (error) {
        res.status(500).send({ msg: "Server Error" });
    }
}

function getSpokenLanguageInCountry(req,res){
     try {
        const q10 = "SELECT cl.Language from countrylanguage cl join country c on cl.CountryCode = c.Code where c.Name='India';"

        connection.execute(q10, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ msg: "database error" });
            }

            console.log(result);

            const spokenLang = result;

            res.status(200).send({
                spokenLang,
                success: true
            });
        });

    }catch(error){
    res.status(500).send({msg:"Server Error"})
    }
}

function getTotalSpokenLanguages(req,res){
    try {
        const q11 = "SELECT count(distinct Language) as TotalLanguages from countrylanguage;"

        connection.execute(q11, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ msg: "database error" });
            }

            console.log(result);

            const totalLang = result;

            res.status(200).send({
                totalLang,
                success: true
            });
        });

    }catch(error){
    res.status(500).send({msg:"Server Error"})
    }
}

function getTenMostSpokenLanguages(req,res){
    try {
        const q12 = "SELECT Language,count(*) as CountryCount from countrylanguage group by Language order by countryCount desc limit 10;"

        connection.execute(q12, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ msg: "database error" });
            }

            console.log(result);

            const mostSpokenLang = result;

            res.status(200).send({
                mostSpokenLang,
                success: true
            });
        });

    }catch(error){
    res.status(500).send({msg:"Server Error"})
    }
}

function getGdpOfCountriesPerCapital(req,res){
    try {
        const q13 = "SELECT Name,GNP/Population as GDPPerCapita from country order by GDPPerCapita desc;"

        connection.execute(q13, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ msg: "database error" });
            }

            console.log(result);

            const GDPPerCapita = result;

            res.status(200).send({
                GDPPerCapita,
                success: true
            });
        });
    }catch(error){
    res.status(500).send({msg:"Server Error"})
    }
}

function getAverageLifeExpectancy(req,res){
   try {
        const q14 = "SELECT avg(LifeExpectancy) as AverageLifeExpectancy from country;"

        connection.execute(q14, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ msg: "database error" });
            }

            console.log(result);

            const AverageLifeExpectancy = result;

            res.status(200).send({
                AverageLifeExpectancy,
                success: true
            });
        });

    }catch(error){
    res.status(500).send({msg:"Server Error"})
    }
}

function getHighestLifeExpectancy(req,res){
   try {
        const q15 = "SELECT Name,LifeExpectancy from country order by LifeExpectancy desc limit 10;"

        connection.execute(q15, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ msg: "database error" });
            }

            console.log(result);

            const HighLifeExpectancy = result;

            res.status(200).send({
                HighLifeExpectancy,
                success: true
            });
        });

    }catch(error){
    res.status(500).send({msg:"Server Error"})
    }
}


function getLowestLifeExpectancy(req,res){
    try {
        const q16 = "SELECT Name,LifeExpectancy from country order by LifeExpectancy asc limit 10;"

        connection.execute(q16, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ msg: "database error" });
            }

            console.log(result);

            const LowLifeExpectancy = result;

            res.status(200).send({
                LowLifeExpectancy,
                success: true
            });
        });

    }catch(error){
    res.status(500).send({msg:"Server Error"})
    }
}

function getCityInformation(req,res){
    try {
        const q17 = "SELECT * from city where Name='New Delhi';"

        connection.execute(q17, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ msg: "database error" });
            }

            console.log(result);

            const cityInfo = result;

            res.status(200).send({
                cityInfo,
                success: true
            });
        });

    }catch(error){
    res.status(500).send({msg:"Server Error"})
    }
}

function getLargestCity(req,res){
     try {
        const q18 = "SELECT Name,Population from city order by Population desc limit 10;"

        connection.execute(q18, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ msg: "database error" });
            }

            console.log(result);

            const LargestCity = result;

            res.status(200).send({
                LargestCity,
                success: true
            });
        });

    }catch(error){
    res.status(500).send({msg:"Server Error"})
    }
}


function getTotalCities(req,res){
     try {
        const q19 = "SELECT count(*) as TotalCities from city;"

        connection.execute(q19,(err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ msg: "database error" });
            }
            console.log(result);
            const TotalCities = result;

            res.status(200).send({TotalCities,success: true});
        });

    }catch(error){
    res.status(500).send({msg:"Server Error"})
    }
}


module.exports = {
getTotalPopulation,
getTenPopulatedCountries,
getLeastPopulatedCountries,
getTotalCountries,
getAveragePopulationCountries,
getTotalPopulationByContinent,
getGreaterPopulationBySpecificVal,
getLessPopulationBySpecificVal,
getSpecificCountryPopulation,
getSpokenLanguageInCountry,
getTotalSpokenLanguages,
getTenMostSpokenLanguages,
getGdpOfCountriesPerCapital,
getAverageLifeExpectancy,
getHighestLifeExpectancy,
getLowestLifeExpectancy,
getCityInformation,
getLargestCity,
getTotalCities
}