import Image from 'next/image'

import { Footer } from '../GridFooter/GridFooter'
import HeaderIcon from '../../assets/images/svg/HeaderIcon.svg'
import FooterIcon from '../../assets/images/svg/FooterIcon.svg'

import styles from './SingleGrid.module.css'

interface SingleGridProps {
  type: string;
  backgroundColor: string;
  title: string;
  isDark: boolean;
}

export const Grid = ({ type, backgroundColor, title, isDark }: SingleGridProps) => {
  const icon = type === 'header' ? HeaderIcon : FooterIcon;
  return (
    <div className={`${styles.mainContainer} color`}>
      <div className='text-center'>
        <div className={`${styles.iconImage}`}>
          <Image src={icon} alt="Header/Footer Icon" style={{ width: '100%', height: '100%' }}/>
        </div>
        <div className={`${styles.title} title-margin cursive-text`}>{title}</div>
      </div>
      <div className="footer-section">
        <Footer isDark={isDark} />
      </div>
      <style jsx>{`
        .color {
          background-color: ${backgroundColor};
        }
        .title-margin {
          margin-top: ${type === 'header' ? '-70px' : '-20px'};
        }
      `}</style>
    </div>
  )
};