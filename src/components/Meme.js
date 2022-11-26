import React from "react"
import memesData from "../memesData";

const Meme = () => {
  const [memeImage, setMemeImage] = React.useState('');

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMemeImage(url);
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
      <img className="meme--img" src={memeImage} alt="meme" />
    </main>
  );
}
 
export default Meme;