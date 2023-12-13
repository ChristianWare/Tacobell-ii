import React from 'react'
import styles from './ContentPadding.module.css'

const ContentPadding = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}
export default ContentPadding