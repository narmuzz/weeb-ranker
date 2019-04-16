import React from "react";

function Rank(props) {
  if (!props.meanScore) {
    return null;
  }
  const limits = [3, 5, 6, 7, 8, 10];
  const texts = [
    {
      title: "You're Hayao Miyazaki",
      content:
        "You simply hate anime. You feel disgusted by it mere existance. In your heart you know that anime was a mistake."
    },
    {
      title: "You don't like chinese cartoons",
      content: `If someone saying "why would anyone still be watching cartoons if they are more than 12 years old?" sounds a lot like you, that's no coincidence.`
    },
    {
      title: "You compare everything to Evangelion",
      content:
        "At some point in your life you watched the show to beat al shows, the quintessential artwork of anime. Ever since, nothing stands as tall and proud as Evangelion does. All anime is infirior to it and as such it should be compared an held in submission to it."
    },
    {
      title: "You are the average weeb",
      content:
        "You are the representative of the countless hordes of anime fans around the world, the mirror of their taste and mind. You are the best example of what most weebs are like, at least regarding to taste."
    },
    {
      title: "You love harem/romcom anime",
      content:
        "Romance is your drug. You live to see your ships come to fruition, to see the kiss of the season happen. Hand holding is the reason of your existence."
    },
    {
      title: "You are Kirito",
      content:
        "Your taste knows no bounds. You are anime. You are all that is good. You are the waifu magnet."
    }
  ];
  let result = "";
  for (let i = 0; i < limits.length; i++) {
    if (props.meanScore <= limits[i]) {
      result = texts[i];
      break;
    }
  }
  return (
    <article className="article">
      <h2 className="article-title">{result.title}</h2>
      <p className="article-text">{result.content}</p>
    </article>
  );
}

export default Rank;
