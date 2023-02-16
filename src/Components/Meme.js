import React from "react";
import "./Style.css";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/23ls.jpg",
  });

  const [allMeme, setAllMeme] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNumber].url;
    setMeme((preMeme) => ({ ...preMeme, randomImage: url }));
  }

  function handelChange(event) {
    const { name, value } = event.target;
    setMeme((preMeme) => ({
      ...preMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <img
        src="./assets/images/meme---background-img.jpg"
        className="meme--backGround"
        alt="meme--backGround-img"
      />
      <div className="form">
        <input
          className="form--input"
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handelChange}
        />
        <input
          className="form--input"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handelChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Generate Meme
        </button>
      </div>
      <img src={meme.randomImage} className="meme--image" alt="meme" />
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </main>
  );
}
