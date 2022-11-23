const MemeForm = () => {
  return (
    <form className="meme--form">
      <input className="meme--input top-input" type="text" />
      <input className="meme--input bottom-input" type="text" />
      <button className="meme--submit" type='submit'>Get a new meme image</button>
    </form>
  );
}
 
export default MemeForm;