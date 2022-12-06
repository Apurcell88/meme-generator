import React from "react"
import memesData from "../memesData";

const GenerateMeme = () => {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: url
      }
    })
  }

  return (
    <main>
      <div className="meme--form">
        <input
          className="meme--input top-input"
          type="text"
          placeholder="Top text"
        />
        <input
          className="meme--input bottom-input"
          type="text"
          placeholder="Bottom text"
        />
        <button
          className="meme--submit" type='submit'
          onClick={getMemeImage}
        >
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img className="meme--img" src={meme.randomImage} alt="meme" />
        <h2 className="meme--text top">One does not simply</h2>
        <h2 className="meme--text bottom">Walk into Morder</h2>
      </div>
    </main>
  );
}
 
export default GenerateMeme;