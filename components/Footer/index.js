import styles from './Footer.module.css'

export default function Footer() {
    return(
        <>
            <footer className={styles.footer}>
                <div className={styles.footerOne}>Meta &nbsp;&nbsp;&nbsp;&nbsp; About &nbsp;&nbsp;&nbsp;&nbsp; Blog &nbsp;&nbsp;&nbsp;&nbsp; Jobs &nbsp;&nbsp;&nbsp;&nbsp; Help &nbsp;&nbsp;&nbsp;&nbsp; API &nbsp;&nbsp;&nbsp;&nbsp; Privacy &nbsp;&nbsp;&nbsp;&nbsp; Terms &nbsp;&nbsp;&nbsp;&nbsp; Locations &nbsp;&nbsp;&nbsp;&nbsp; Instagram Lite &nbsp;&nbsp;&nbsp;&nbsp; Threads &nbsp;&nbsp;&nbsp;&nbsp; Contact Uploading & Non-Users &nbsp;&nbsp;&nbsp;&nbsp; Meta Verified</div>
                <br/>
                <div className={styles.footerTwo}>English  &nbsp;&nbsp;&nbsp; © 2024 Instagram from Meta</div>
            </footer>
        </>
    )
}
