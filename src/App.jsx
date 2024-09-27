import './App.css'
import './index.css'

import WhiteButton from './components/WhiteButton'
import Navbar from './components/Navbar'
import Highlights from './components/Highlights'

function App() {
 
  return (
    
      <div className ="App">

        <div>

        <Navbar></Navbar>

        </div>

        <div className = "container">

          <h1>Say hello to <br></br> ReactJS</h1>

          <h3>You will learn how to use <br></br> the most popular frontend library,<br></br> and become a super Ninja developer.</h3>
        
        <div>
          <WhiteButton></WhiteButton>
        </div>

        </div>

        <div className='gallery'>
          <Highlights></Highlights>
        </div>

      </div>
    
  )
}

export default App
