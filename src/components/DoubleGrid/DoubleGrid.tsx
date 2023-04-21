import { AboutMe } from './AboutMe/AboutMe'
import { ContactMe } from './ContactMe/ContactMe'
import { Footer } from '../GridFooter/GridFooter'

import styles from './DoubleGrid.module.css'
import bg from '../../assets/images/aboutme.jpg'

interface SingleGridProps {
  backgroundColor: string | null;
  title: string;
  isDark: boolean;
}

export const Grid = ({ backgroundColor, title, isDark }: SingleGridProps) => {
  let bodySection: any
  if(title.includes('About')) {
    bodySection = <AboutMe />
  } else if(title.includes('Contact')) {
    bodySection = <ContactMe />
  }
  return (
    <div className={`${styles["parent"]}`}>
      <div className={`${styles["title-section"]}`}>
        <div className={`${styles["sticky-section"]}`}>
          <div className={`${styles["title-content"]} color`}>
            <div className={`${styles.title} title-margin cursive-text text-color`}>{title}</div>
          </div>
          <div className="footer-section">
            <Footer isDark={isDark} />
          </div>
        </div>
        <style jsx>{`
          .color {
            ${backgroundColor !== null ? 'background-color' : 'background'}: ${backgroundColor !== null ? backgroundColor : `url(${bg.src})`};
            ${
              backgroundColor === null ? `
                background-size: cover;
                background-position: center;  
              ` : ''
            }
          }
          .text-color {
            color: ${isDark ? "#fff" : "#000"};
          }
        `}</style>
      </div>
      <div className={styles['body-section']}>
        {bodySection}
      </div>
    </div>
  )
};