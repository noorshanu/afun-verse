import React from "react";
import "./Play.css";
import Lottie from 'react-lottie';
import animationData from '../../assets/game.json';
import Dollar from "../../assets/elements/dollar.svg";

function PlayWin() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <section className="Play-win">
      <div class="container">
        <h1 className="header-h1">
          Play - 2 - <span className="head-span">Earn</span>{" "}
        </h1>
      </div>
      <div class="container">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-md-6 text-center">
          <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
          </div>
          <div class="col-md-6">
            <div className="play-p">
              <p>
                Afun-verse is a free metaverse games where players earn tokens
                by completing daily challenges and competing against each other
                on a daily leaderboard. $Gcoin is the in-game currency that
                incentivizes player liquidity and enables upgrades of in-game
                items.{" "}
              </p>
              <p>
                $Gcoin can also be used to wager as a buy-in throughout other
                games in the Afun ecosystem. All $Gcoin profits that enter the
                Afun Ecosystem above the minimum allocation are burned to
                provide deflationary pressure on $Gcoin.
              </p>
            </div>
            <div className="feat-line">
              <div className="side-play">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
      <div className="dollar-win">
        <div className="side-feat">&nbsp;</div>

        <img src={Dollar} alt="way" className="dollar-lines" />
        <div className="dollar-line">&nbsp;</div>
      </div>
    </section>
  );
}

export default PlayWin;
