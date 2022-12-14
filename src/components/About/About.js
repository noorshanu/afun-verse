import "./About.css";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
function Model(props) {
  const { scene } = useGLTF("https://ik.imagekit.io/cforcrypto/afun/about_us.glb?ik-sdk-version=javascript-1.4.3&updatedAt=1667636638382");
  return <primitive object={scene} />;
}

function About() {

  return (
    <section className="about" id="about">
      <div className="side-feat">&nbsp;</div>
      <div className="side-pur">
  &nbsp;
</div>
      <div className="container justify-content-center text-center "data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1500">
        <h1 className="header-h1" style={{paddingBottom:'0%'}}>
          About <span className="head-span">Us</span>
        </h1>
      </div>

      <div className="container">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-md-5" >
            <div className="text-center
            ">
            <img src="https://ik.imagekit.io/cforcrypto/afun/logo/afun-logo2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667825765893" alt="" className="alien"/>
            </div>
           
            <p className="about-p">
              The AFUN verse is an ultimate virtual entertainment world in
              metaverse where players can meet their friends and play games,
              listen to music, watch sports, buy arts from gallery, buy fashion
              accessories, own and ride cars, sail away on a cruise and enjoy
              nice meals in a luxurious resort hotel. Players can also invest
              and own the room, hotel or land.{" "}
            </p>
          </div>
          <div className="col-md-7 text-center">
            {/* <img src="https://ik.imagekit.io/cforcrypto/afun/ios_about_us.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667555932571" alt="" className="play-mob"/> */}
        
            {/* className='play' */}
       <Canvas pixelRatio={[1, 2]} camera={{ position: [-15, 10, 40], fov: 60 }} style={{width:'100%',height:'450px'}} >
      <ambientLight intensity={5} />
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
