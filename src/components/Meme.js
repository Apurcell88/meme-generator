/* eslint-disable no-restricted-globals */
import React from "react"

const GenerateMeme = () => {

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function getMeme() {
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
  
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: url
      }
    })
  }

  function handleChange(e) {
    setMeme(prevMeme => {
      const {name, value} = e.target
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  return (
    <main>
      <div className="meme--form">
        <input
          className="meme--input top-input"
          type="text"
          onChange={handleChange}
          placeholder="Top text"
          value={meme.topText}
          name="topText"
        />
        <input
          className="meme--input bottom-input"
          type="text"
          onChange={handleChange}
          placeholder="Bottom text"
          value={meme.bottomText}
          name="bottomText"
        />
        <button
          className="meme--submit" type='submit'
          onClick={getMeme}
        >
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img className="meme--img" src={meme.randomImage} alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
 
export default GenerateMeme;