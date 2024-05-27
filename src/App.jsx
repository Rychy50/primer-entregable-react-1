import { useState } from 'react';
import './App.css';
import ShowButton from './components/ShowButton';
import ShowPhrase from './components/ShowPhrase';
import randomArr from './services/randomArr';
import arr from './utils/phrases.json';
import images from './utils/images.json'

function App() {
  const quote = randomArr(arr);
  const [randomPhrase,setRandomPhrase] = useState(quote);
  const photo = randomArr(images)
  const [image, setImage] = useState(photo)

  const appStyles = {
    backgroundImage: `url(../fortuna-1/fondo${image}.webp)`,
  }

  return (
      <div className='app' style={appStyles}>
      <h1 className='app__title'>GALLETAS DE LA FORTUNA</h1>
      <ShowButton
      setRandomPhrase={setRandomPhrase}
      setImage={setImage}
      />
      <ShowPhrase
      randomPhrase={randomPhrase}/>
      </div>
  )
}

export default App
