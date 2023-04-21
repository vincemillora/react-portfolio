import Image from 'next/image'
import Icon from '@mdi/react';
import { mdiTwitter, mdiInstagram, mdiLinkedin, mdiGithub } from '@mdi/js';

import ContactMeFooterIcon from '../../../assets/images/svg/ContactMeFooter.svg'

import styles from './ContactMe.module.css'

export const ContactMe = () => {
  const sendMail = () => {
    window.open("mailto: vcmillora.03@gmail.com");
  };

  const goToSocialMedia = () => {
    alert("TEST")
  };

  const socialMedias = [
    {
      name: "Twitter",
      icon: mdiTwitter,
      url: "https://twitter.com/vcmillora"
    }, 
    {
      name: "Instagram",
      icon: mdiInstagram,
      url: "https://www.instagram.com/vcmillora/"
    }, 
    {
      name: "Linkedin",
      icon: mdiLinkedin,
      url: "https://www.linkedin.com/in/vcmillora/"
    }, 
    {
      name: "Github",
      icon: mdiGithub,
      url: "https://github.com/vincemillora/"
    }
  ]
  let socialMediaButtons = socialMedias.map(( item )=>{
    return (
      <a key={item.name} className={styles['social-media-buttons']} href={item.url} target='_blank'>
        <Icon 
          path={item.icon}
          size={1.5}
          color="#3e3d57"
        />
      </a>
    )
  })
  
  return (
    <div>
      <div className={styles['body-section']}>
        <span className={styles['body-text']}>
          <span className={styles['body-header']}>Feel free to contact me - I'm open for any topic.</span><br/><br/>
          
          You can contact me through my social accounts or through my email: <a className={styles['email-style']} onClick={sendMail}> vcmillora.03@gmail.com</a>.
        </span>
        <div className={styles['social-media-divider']}>
          {socialMediaButtons}
        </div>
        <div className={styles['footer-icon']}>
          <Image src={ContactMeFooterIcon} alt="aboue me icon" style={{ width: '100%', height: '100%' }}/>
        </div>
      </div>
    </div>
  )
};