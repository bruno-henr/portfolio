import React from 'react';

import styles from './styles.module.scss'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { FaArrowUp } from 'react-icons/fa'

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
        <div className={styles.scrollTop} onClick={() => {
            window.scrollTo(0, 0)
        }}>
            <FaArrowUp size={'1.5rem'} />
        </div>
        <div className={styles.itemCopyright}>
            <AiOutlineCopyrightCircle />
            <span>All rights reserved</span>
        </div>
    </div>
  )
}
