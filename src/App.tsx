/* eslint-disable @typescript-eslint/no-unused-vars */
import 'normalize.css';
import styles from './styles/App.module.scss'
import { House } from './components/House/House';
import { Control } from './components/Control/Control';
import { useState } from 'react';

type LayerConfig = {
  wall: string
  angles: string
  corner: string
}


export const App =()=> {

  const defaultLayers: LayerConfig = {
    wall: '/walls/layers-antique/w-antick.png',
    angles: '/angles/layers-marble/c-marble2.png',
    corner: '/basement/layers-singletone/b-singletone2.png'
  }

  // eslint-disable-next-line no-unused-vars
  const [layers] = useState<LayerConfig>(defaultLayers)
  const [activeLayer, setActiveLayer] = useState<'wall' | 'angles' | 'corner'>('wall');
  console.log(activeLayer);
  

  return (
    <div className={styles.HouseConstructor}>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <House layers={layers} />
          <Control activeLayer={activeLayer} setActiveLayer={setActiveLayer} />
        </div>
      </div>
    </div>
  )
}
