import * as React from 'react'
import styles from './styles.module.css'
import Button from './Button'
interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Thing = Button
