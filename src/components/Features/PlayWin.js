
import "./Play.css";
import Dollar from "../../assets/elements/dollar.svg";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
function Model(props) {
  const { scene } = useGLTF("/play.glb");
  return <primitive object={scene} />;
}


function PlayWin() {

  return (
    <section className="Play-win">
      <div class="container">
        <h1 className="header-h1" data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1500">
          Play - 2 - <span className="head-span">Earn</span>{" "}
        </h1>
      </div>
      <div class="container">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-md-7 text-center" data-aos="fade-right" data-aos-duration="1500">
          <Canvas pixelRatio={[1, 3]} camera={{ position: [400, 300, 400], fov:60 }} style={{width:'100%',height:'450px'}}>
      <ambientLight intensity={2} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
          </div>
          <div class="col-md-5" data-aos="fade-left" data-aos-duration="1500">
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
            <div className="text-end">
            <a href="/" className="foot-btn-2">Play</a>
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
