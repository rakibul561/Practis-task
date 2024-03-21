
import './App.css'
import LineCharts from './component/LineCharts/LineCharts'
import Nav from './component/Nav/Nav'
import PriceOption from './component/PriceOption/PriceOption'
// import DaisyNav from './component/DaisyNav/DaisyNav'


function App() {


  return (
    <>
      <Nav>

      </Nav>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-700'>Vite + React</h1>
      <PriceOption></PriceOption>
      <LineCharts> </LineCharts>

    </>
  )
}

export default App
