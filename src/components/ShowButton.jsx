import React from 'react';
import arr from '../utils/phrases.json';
import randomArr from '../services/randomArr';
import images from '../utils/images.json'

const ShowButton = ({setRandomPhrase, setImage}) => {

  const handleClick = () => {
    const quote = randomArr(arr)
    setRandomPhrase(quote)
    const photo = randomArr(images)
    setImage(photo)
    }
  return (
    <button onClick={handleClick} className='app__btn'>
      Probar Mi Suerte
    </button>
  )
}

export default ShowButton
