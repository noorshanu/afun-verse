

import "./About.css";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
function Model(props) {
  const { scene } = useGLTF("/home.glb");
  return <primitive object={scene} />;
}

function About() {

  return (
    <section className="about">
      <div className="side-feat">&nbsp;</div>
      <div className="side-pur">
  &nbsp;
</div>
      <div class="container justify-content-center text-center "data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1500">
        <h1 className="header-h1">
          About <span className="head-span">Us</span>
        </h1>
      </div>

      <div class="container">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-md-4" data-aos="fade-right" data-aos-duration="2000">
            <p className="about-p">
              The AFUN verse is an ultimate virtual entertainment world in
              metaverse where players can meet their friends and play games,
              listen to music, watch sports, buy arts from gallery, buy fashion
              accessories, own and ride cars, sail away on a cruise and enjoy
              nice meals in a luxurious resort hotel. Players can also invest
              and own the room, hotel or land.{" "}
            </p>
          </div>
          <div class="col-md-8 text-center" data-aos="fade-left" data-aos-duration="2000">
        
 
       <Canvas pixelRatio={[1, 2]} camera={{ position: [-10, 15, 15], fov: 50 }} style={{width:'100%',height:'450px'}}>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
          </div>
        </div>
      </div>
      <div className="about-line2">&nbsp;</div>
    </section>
  );
}

export default About;
