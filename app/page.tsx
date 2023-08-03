import Image from 'next/image'
import styles from './page.module.css'
import CardWord from '@/components/Card/CardWord/CardWord'
import CardWordList from '@/components/Card/CardWordList/CardWordList'
import { CardTopics } from '@/components/Card/CardTopics/CardTopics'

export default function Home() {
  return (
    <main className={styles.main}>
      <CardTopics />
    </main>
  )
}
