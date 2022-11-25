const MemeForm = () => {
  function getMeme() {
    console.log('I was clicked!');
  }

  return (
    <main>
      <div className="meme--form">
        <input className="meme--input top-input" type="text" />
        <input className="meme--input bottom-input" type="text" />
        <button onClick={getMeme} className="meme--submit" type='submit'>Get a new meme image</button>
      </div>
    </main>
  );
}
 
export default MemeForm;