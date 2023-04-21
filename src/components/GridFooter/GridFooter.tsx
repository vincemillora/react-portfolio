import styles from './GridFooter.module.css'

interface GridFooterProps {
  isDark: Boolean;
}

export const Footer = ({ isDark }: GridFooterProps) => (
  <div>
    <nav className={`${styles.link} ${styles['text-size']} default-text text-color`}>
      <ul>
        <li>
          <a aria-label="To 'About Me' section">About Me</a>
        </li>
        <li>
          <a aria-label="To 'Work' section">Work</a>
        </li>
        <li>
          <a aria-label="To 'Work' section">Contact Me</a>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      .text-color {
        color: ${isDark ? "#fff" : "#000"};
      }
    `}</style>
  </div>
);