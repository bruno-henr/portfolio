import React from 'react';
import img from './teaser.webp'
import styles from './styles.module.scss'

export const AnimationIntro: React.FC = () => {
  const Comp1 = () => {
    return 
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.h}>h</h2>
      <h2 className={styles.e}>e</h2>
      <h2 className={styles.l1}>l</h2>
      <h2 className={styles.l2}>l</h2>
      <h2 className={styles.o}>o</h2>
      
      {/* <div className={
        // styles.comp1 + ' ' + 
        styles['rotate-inf']}>
        <img src={img} alt="" />
      </div> */}
    </div>
  )
}
