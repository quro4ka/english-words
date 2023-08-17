'use client'
import { useEffect, useState } from 'react'
import { CardRow } from '../CardRow/CardRow'

interface IWord {
  id: string
  en: string
  ru: string
}

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

    const filteredWords = words.filter((word: IWord) => word.id !== id)
    setWords([...filteredWords])
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
