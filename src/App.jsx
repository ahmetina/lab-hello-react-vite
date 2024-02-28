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

        <div>

        <h1>Say hello to ReactJS</h1>

        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        
        <WhiteButton></WhiteButton>

        </div>

        <div>
          <Highlights></Highlights>
        </div>

      </div>
    
  )
}

export default App
