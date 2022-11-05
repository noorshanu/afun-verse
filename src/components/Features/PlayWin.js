import "./Play.css";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
function Model(props) {
  const { scene } = useGLTF("https://ik.imagekit.io/cforcrypto/afun/play_final.glb?ik-sdk-version=javascript-1.4.3&updatedAt=1667541174336");
  return <primitive object={scene} />;
}


function PlayWin() {

  return (
    <section className="Play-win" id="game">
      <div className="container">
        <h1 className="header-h1" >
          Play - 2 - <span className="head-span">Earn</span>{" "}
        </h1>
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-md-7 text-center" >
            <img src="https://ik.imagekit.io/cforcrypto/afun/ios_play2earn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667556024636" alt="" className="play-mob"/>
          <Canvas pixelRatio={[1, 2]} camera={{ position: [400, 300, 400], fov:60 }} style={{width:'100%',height:'350px'}} className="play">
      <ambientLight intensity={2} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
          </div>
          <div className="col-md-5" >
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
          <div className="text-center pt-10">
            <a href="/" className="play-btn">Play</a>
            </div>
        </div>
      </div>
      <div className="dollar-win">
        <div className="side-feat">&nbsp;</div>

        <img src='https://ik.imagekit.io/cforcrypto/afun/elements/dollar.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667504467000' alt="way" className="dollar-lines" />
        <div className="dollar-line">&nbsp;</div>
      </div>
    </section>
  );
}

export default PlayWin;
