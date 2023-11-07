import React, { useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { TalkBalloonComp } from "../component/talk/TalkBalloonComp";
import { talkBalloonAtom } from "../atom/TalkBalloonAtom"
import { loadingAtom } from "../atom/LoadingAtom";
import { useRecoilValue } from "recoil"
import { MapUtilComp } from "../component/talk/MapUtilComp";
import { Physics } from '@react-three/cannon';
import LoadingPage from "./LoadingPage";
import Tutorial from "../component/tutorial/Tutorial";
import { tutorialAtom } from "../atom/TutorialAtom";
// import { Debug } from '@react-three/cannon';
// import { OrbitControls } from "@react-three/drei";

interface CanvasPage {
  theme: JSX.Element;
}


export const CanvasPage: React.FC<CanvasPage> = (props: CanvasPage): JSX.Element => {
  const loading = useRecoilValue(loadingAtom);
  const talkBalloon = useRecoilValue(talkBalloonAtom);
  const tutorialRead = useRecoilValue(tutorialAtom);
  let visited = localStorage.getItem('tutorialAtom')!=null?JSON.parse(localStorage.getItem('tutorialAtom')!):null;

  useEffect(()=>{
    visited = localStorage.getItem('tutorialAtom')!=null?JSON.parse(localStorage.getItem('tutorialAtom')!):null;
  },[tutorialRead.visit])

  return(
    <>
      {
        (!loading.loading && (visited == null && !tutorialRead.visit)) || (!loading.loading && !tutorialRead.visit)?<Tutorial/>:null
      }
      {
        loading.loading? <LoadingPage/> : null
      }
      {
        loading.loading || talkBalloon.isShow?
        null
        :
        <MapUtilComp />
      }
      <Canvas style={{ height:loading.loading?"0.01vh":"100vh", cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto`}}>
        <Physics defaultContactMaterial={{ friction: 0, restitution: 1 }} gravity={[0, -9.81, 0]}>
          {/* <Debug scale={1} color='red'> */}
          {/* <OrbitControls/> */}
            {props.theme}
          {/* </Debug> */}
        </Physics>
      </Canvas>

      { talkBalloon.isShow?<TalkBalloonComp />:null }
    </>
  )
}
