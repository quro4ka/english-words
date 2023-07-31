import Image from 'next/image'
import styles from './page.module.css'
import CardWord from '@/components/Card/CardWord/CardWord'
import CardWordList from '@/components/Card/CardWordList/CardWordList'

export default function Home() {
  return (
    <main className={styles.main}>
      <CardWordList />
    </main>
  )
}
