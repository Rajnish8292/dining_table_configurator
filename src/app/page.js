'use client'

import Experience from "@/component/Experience";
import PriceComp from "@/component/PriceComp";
import { RecoilRoot, useRecoilValue } from "recoil";

import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

import {useEnvironment, Environment , OrbitControls, Lightformer } from '@react-three/drei'
import { EffectComposer, Bloom, N8AO, ToneMapping } from '@react-three/postprocessing'
import { useEffect, useState, useRef } from "react";
import Configurator from "@/component/Configurator";
import ViewNavigation from "@/component/ViewNavigation";
import gsap from "gsap";

function CustomEnviroment() {
  const env = useEnvironment({ files: 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr' })
  return (<Environment map={env} background blur={1} />);
}

function ChangeCameraPositionTo(pos) {
  const {camera} = useThree()
  const animationRef = useRef(null)

  if (animationRef.current) animationRef.current.kill()

    // Create a proxy object for GSAP to animate
    const proxy = {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z
    }
    console.log({proxy, camera})

    // Animate the proxy
    animationRef.current = gsap.to(proxy, {
      x: pos.x,
      y: pos.y,
      z: pos.z,
      duration: 2,
      ease: "power2.inOut",
    })

    useFrame(() => {
      camera.position.set(proxy.x, proxy.y, proxy.z)
      camera.updateProjectionMatrix()
    })
}
export default function Home() {

  

  return (
    <RecoilRoot>

    
    <div className="configurator_wrapper">
    
    {/* [5, 10, 15] */}
    {/* [10, 7.5, 10] */}
    {/* [10, 10, -10] */}
    {/* [-10, 10, -10] */}
   <Canvas style={{height:'100vh', width:'70vw', background:'white'}} shadows camera={{ position: [-10, 10, -10], fov: 30}}>
      <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <ambientLight intensity={5} />
      <Experience />
      <OrbitControls enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} />
      <EffectComposer>
        <N8AO aoRadius={0.15} intensity={4} distanceFalloff={2} />
        <Bloom luminanceThreshold={3.5} intensity={0.85} levels={9} mipmapBlur />
        <ToneMapping />
      </EffectComposer>

      {/* <CustomEnviroment /> */}
      {/* <ChangeCameraPositionTo pos={new THREE.Vector3([10, 7.5, 10])} /> */}
      
   </Canvas>
   <Configurator />
   </div>

   <div className="bottom_nav">
    <div className="btn poppins-bold add-to-cart">Add to cart</div>
    <div className="btn poppins-bold buy-now">Buy Now</div>
   </div>
  <PriceComp />
  {/* <ViewNavigation /> */}

   </RecoilRoot>

  );
}
