import { Link } from "react-router-dom";

import YouTube from 'react-youtube';

function VideoPembatik() {
  const videoId = 'mZF7FFPEF1E'; // Replace with your YouTube video ID

  // Options for the YouTube player (you can customize these)
  const opts = {
    height : '180',
    width: '280',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1, // 0 or 1 (auto-play off or on)
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default function AboutPage(){

    return (
        <section className="container">
            <h1>"Guess the Number!"</h1>
            <section className="sub-container">
                <h2>About</h2>
                <p>
                    Are you ready to put your guessing skills to the test? "Guess the Number" is an exciting and challenging game where your goal is to guess a hidden number within a specified range. You can play the game in two different modes: Linear Search and Binary Search.
                </p>
                <p>
                    "Guess the Number" is not just a game, it's also an opportunity to sharpen your problem-solving skills. Linear search and binary search are important algorithms used in computer science, and this game can help you understand how they work.
                </p>

                <p>
                Will you uncover the secret number quickly or use your strategic skills to minimize your attempts?
                </p>
                <p>
                Enjoy the challenge, and may the odds be in your favor!
                </p>

                <Link to={"/"} className="btn-play">Play Now</Link>
            </section>

            <VideoPembatik></VideoPembatik>

            <section className="sub-container-bottom">
                <div className="circle one" style={{ backgroundImage: "url(/tut-wuri-handayani.png)" }}></div>
                <div className="circle two" style={{ backgroundImage: "url(/merdeka-belajar.png)"}}></div>
                <div className="circle three" style={{ backgroundImage: "url(/pembatik-2023.png)"}}></div>
            </section>
        </section>
    )
}