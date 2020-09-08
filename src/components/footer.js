import React from 'react'

import styles from "./styles/footer.module.css"

const Footer = () => {
   
    return (
        <footer className={styles.footer}>
        © {new Date().getFullYear()}
        <p>Östsvea vid Åbo Akademi rf</p>
      </footer>
    )
}

export default Footer