import React from 'react'
import Header from './components/Header'
import TopTenPop from './components/TopTenPop'
import TotalCountriesCount from './components/TotalCountriesCount'
import TotalPop from './components/TotalPop'
import LeastTenPop from './components/LeastTenPop'
import AveragePop from './components/AveragePop'
import GreaterPopByUser from './components/GreaterPopByUser'
import AvgLifeExpectancy from './components/AvgLifeExpectancy'

const App = () => {
  return (
    <div>
      <Header />
      <TotalPop />
      <TopTenPop />
      <LeastTenPop />
      <TotalCountriesCount />
      <AveragePop />
      <GreaterPopByUser />
      <AvgLifeExpectancy />
    </div>
  )
}

export default App