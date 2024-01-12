import styles from './Form.module.css'
import Button from '../Button'


export default function Form() {
    return (
        <>
            <div className={styles.formOuterContainer}>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <fieldset className={styles.fieldSet}>
                            <img src={'/images/ig-text-logo.png'} alt="ig text logo" width="200px" height="85" priority />

                            <input

                                className={styles.firstNameInput}
                                type="text"
                                placeholder="Phone number, username, or email"
                            />


                            <input

                                className={styles.emailInput}
                                type="email"
                                placeholder="Password"

                            />

                            <Button />

                            <div className={styles.hrOne}><hr /></div>
                            <span className={styles.or}>OR</span>
                            <div className={styles.hrTwo}><hr /></div>
                            <br />
                            <br />
                            <img className={styles.facebookLogo} src={'/images/facebook_icon.png'} alt="facebook logo" width="17px" height="17" priority />

                            <span className={styles.facebookLogIn}>Log in with Facebook</span>
                            <br />
                            <br />


                            <a className={styles.forgotPassword} href="https://www.instagram.com/accounts/password/reset/">Forgot password?</a>
                        </fieldset>

                    </form>

                </div>


            </div>
            <div className={styles.bottomBox}>
                Don't have an account? <a className={styles.anchor} href="https://www.instagram.com/accounts/emailsignup/">Sign up</a>



            </div>
        </>
    )
}