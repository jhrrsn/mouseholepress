const Player = props => (
  <div>
    <h2>{props.name}</h2>
    <p className="desc">{props.desc}</p>
    <audio id={props.file} controls>
      <source src={"static/audio/" + props.file + ".mp3"} type="audio/mpeg"/>
      <source src={"static/audio/" + props.file + ".ogg"} type="audio/ogg"/>
      Your browser does not support the audio tag.
    </audio>
    <hr />
  </div>
);

function Index() {
  return (
    <main>
      <link href="https://fonts.googleapis.com/css?family=IM+Fell+French+Canon:400,400i&display=swap" rel="stylesheet"/>
      <img className="header" src="static/images/banner.png" srcSet="static/images/banner2x.png 2x" alt="Header" />
      <Player name="A Day" desc="Five Seconds" file="005_day" />
      <Player name="A Week" desc="Ten Seconds" file="010_week" />
      <Player name="A Month" desc="Twenty Seconds" file="020_month" />
      <Player name="A Year" desc="Forty Seconds" file="040_year" />
      <Player name="A Decade" desc="One Minute" file="060_decade" />
      <Player name="A Century" desc="Two Minutes" file="120_century" />
      <Player name="Centuries" desc="Three Minutes" file="180_centuries" />
      <Player name="A Millennium" desc="Four Minutes" file="240_millennium" />
      <Player name="An Age" desc="Five Minutes" file="300_age" />
      <Player name="An Epoch" desc="Six Minutes" file="360_epoch" />

      <img className="footer" src="static/images/footer.png" srcSet="static/images/footer2x.png 2x" alt="Footer" />
      <p>Music by <a href="https://christophermichaelroberts.bandcamp.com/album/artefact-deluxe-edition-soundtrack">Christopher Michael Roberts</a></p>
      <p>Designed for <a href="https://mouseholepress.itch.io/artefact">ARTEFACT</a>, by <a href="https://twitter.com/mouseholepress">Jack Harrison</a></p>
      <p>Inspired by the <a href="http://lplade.github.io/skeleton-tomb/">Skeleton Tomb</a>, by <a href="https://resume.lplade.name">Larry Lade</a></p>

      <br />
      <style jsx global>{`
        body {
        	background-color: #f8f2e4;
          text-align: center;
          font-family: 'IM Fell French Canon', serif;
          color: #3f6f60;
        }

        img {
          width: 100%;
        }

        .header {
          margin-bottom: 1em;
        }

        .footer {
          width: 30%;
        }

        hr {
          width: 50%;
          border: 0;
          height: 2px;
          background-image: linear-gradient(to right, rgba(76, 86, 106, 0), rgba(76, 86, 106, 0.75), rgba(76, 86, 106, 0));
          margin: 1em auto;
        }

        h1 {
          font-size: 400%;
          font-style: italic;
          margin: 0 1em auto;
        }

        h2 {
          margin-bottom: 0.2em;
        }

        h3 {
          font-size: 0.9em;
        }

        a {
          color: #ad936d;
          text-decoration: none;
        }

        p {
          font-size: 0.8em;
        }

        p.desc {
          font-style: italic;
          margin-top: 0;
        }
      `}</style>
    </main>
  );
}

export default Index;
