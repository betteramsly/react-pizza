import React from 'react'
import styles from './NotFoundBlock.module.scss'

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.root}>
        <span> 🙁 </span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}> К сожалению страница отсутствует в нашем интернет-магазине </p>
    </div>
  )
}

export default NotFoundBlock
