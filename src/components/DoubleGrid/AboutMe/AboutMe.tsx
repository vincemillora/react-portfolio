import Image from 'next/image'

import AboutMeFooterIcon from '../../../assets/images/svg/AboutMeFooter.svg'

import styles from './AboutMe.module.css'

export const AboutMe = () => (
  <div>
    <div className={styles['body-section']}>
      <span className={styles['body-text']}>
        <span className={styles['body-header']}>Hi there, I'm Vince, from the Philippines currently working in Tokyo, Japan as a web developer.</span><br/><br/>
        
        My career so far was exploring and developing applications using different technologies; I've been a back-end developer designing databases and APIs, a Blockchain developer 
        creating Smart Contracts and dApps, and a front-end developer designing and creating web and mobile applications. Recently, my roles are focused on the front-end side of the application. <br/><br/>
        
        These days I'm interested and trying out the new releases of front-end frameworks like Vue 3 and Nuxt 3. Aside from that, I'm also studying and expanding my skills in Docker. <br/><br/>
        
        Outside work and study time, I spend my time playing League of Legends and Valorant, or binging TV series and movies.
      </span>
      <div className={styles['footer-icon']}>
        <Image src={AboutMeFooterIcon} alt="about me icon" style={{ width: '100%', height: '100%' }}/>
      </div>
    </div>
  </div>
);