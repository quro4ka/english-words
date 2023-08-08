import Image from 'next/image'
import styles from './page.module.css'
import CardWord from '@/components/Card/CardWord/CardWord'
import CardWordList from '@/components/Card/CardWordList/CardWordList'
import { CardTopics } from '@/components/Card/CardTopics/CardTopics'
import { CardThemes } from '@/components/Card/CardThemes/CardThemes'

export default function Home() {
  return (
    <main className={styles.main}>
      <CardThemes />
    </main>
  )
}
