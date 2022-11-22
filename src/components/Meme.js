const MemeForm = () => {
  return (
    <section className="meme">
      <form className="meme--form">
        <input className="meme--input" type="text" />
        <input className="meme--input" type="text" />
        <button className="meme--submit" type='submit'>Get a new meme image</button>
      </form>
    </section>
  );
}
 
export default MemeForm;