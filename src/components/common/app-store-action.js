import React from "react"
import styles from "./common.module.scss"
import { PlayStore, AppleStore } from "../../assets/svg"
import cx from "classnames"

const AppStoreAction = ({ className }) => {
  return (
    <div className={cx(styles.AppStoreAction, className)}>
      <h5>Download our mobile app today for interesting discounts.</h5>
      <div className={styles.AppStoreAction__ActionWrapper}>
        <div className={styles.AppStoreAction__button}>
          <PlayStore />
          <p>
            Get it on
            <br /> <strong>Play Store</strong>
          </p>
        </div>
        <div className={styles.AppStoreAction__button}>
          <AppleStore />
          <p>
            Coming soon
            <br /> <strong>App Store</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AppStoreAction
