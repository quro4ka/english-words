'use client'
import { useEffect, useState } from 'react'
import { CardRow } from '../CardRow/CardRow'

export const CardTableList = () => {
  const [words, setWords] = useState([])
  const getWordsFromStorage = () => {
    const localStorageWords = localStorage.getItem('words')
    if (localStorageWords) {
      const storage = JSON.parse(localStorageWords)
      return setWords(storage)
    }

    return setWords([])
  }

  useEffect(() => {
    getWordsFromStorage()
  }, [])

  if (words.length === 0) {
    return <h2>Список слов пуст...</h2>
  }

  const removeWord = (id: string) => {
    if (words.length === 0) {
      return null
    }

    if (words.length === 1) {
      setWords([])
      return localStorage.setItem('words', JSON.stringify([]))
    }

    const filteredWords = words.filter((word: any) => word.id !== id)
    console.log(filteredWords)
    setWords([...filteredWords])
    console.log(words)

    localStorage.setItem('words', JSON.stringify(words))
  }

  return (
    <>
      {words.map((word, idx) => (
        <CardRow word={word} idx={idx} onClick={removeWord} />
      ))}
    </>
  )
}
