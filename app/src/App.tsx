import kingB from './assets/kingB.svg';
import kingW from './assets/kingW.svg';

function App() {

  return (
    <>
      <h1>Chess</h1>
      <div>
        <img src={kingB} alt="king" style={{width:'4rem', height:'4rem'}}/>
        <img src={kingW} alt="king" style={{width:'4rem', height:'4rem'}}/>
      </div>
    </>
  )
}

export default App
