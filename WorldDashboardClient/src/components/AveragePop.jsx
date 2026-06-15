import React, { useEffect, useState } from 'react'
import { getAveragePopulationCountries } from '../api/api'

const AveragePop = () => {
 const [avgPop, setAvgPop] = useState()
 
     async function fetchData(){
         const res = await getAveragePopulationCountries()
         setAvgPop(res)
     }
     useEffect(()=>{
         fetchData()
     },[])
     
     console.log(avgPop)
       return (
     <div>
         Average Population    
         {avgPop}
            
     </div>
   )
 }
 

export default AveragePop