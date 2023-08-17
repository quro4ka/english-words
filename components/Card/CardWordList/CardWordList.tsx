'use client'
import { useState } from 'react'
import CardWord from '../CardWord/CardWord'
import { useGetLessonQuery } from '@/redux/services/lessonApi'
import { CardWordSkeleton } from '../CardWordSkeleton/CardWordSkeleton'
import { CardError } from '../CardError/CardError'

interface CardWordListProps {
  train: boolean
  id?: string
}

export default function CardWordList({ id = '', train }: CardWordListProps) {
  const { data, isLoading, isError } = useGetLessonQuery(id)
  const [step, setStep] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [isFalsyAnswer, setIsFalsyAnswer] = useState(false)

  const word = data && data?.[step]
  const progressLength = data?.length

  const onNextClick = () => {
    setStep((step) => step + 1)
    if (step === data?.length - 1) {
      setStep(0)
    }
    setInputValue('')
    setIsFalsyAnswer(false)
  }

  const onPrevClick = () => {
    if (step === 0) {
      return null
    }

    setStep((step) => step - 1)

    if (step <= 0) {
      setStep(data?.length - 1)
    }

    setInputValue('')
    setIsFalsyAnswer(false)
  }

  const onSubmitQuestion = () => {
    if (word.word.en === inputValue) {
      onNextClick()
      setInputValue('')
      setIsFalsyAnswer(false)
    } else {
      setIsFalsyAnswer(true)
      console.log('isFalsyAnswer', isFalsyAnswer)
    }
  }

  if (isLoading) {
    return <CardWordSkeleton count={1} />
  }

  if (isError) {
    return <CardError error="Ошибка при загрузке слов..." />
  }

  if (data.length === 0) {
    return <CardError error="Список слов к сожалению отсутствует..." />
  }

  return (
    <>
      <CardWord
        key={word.id}
        word={word}
        step={step}
        progressLength={progressLength}
        train={train}
        onNextClick={onNextClick}
        onPrevClick={onPrevClick}
        onSubmitQuestion={onSubmitQuestion}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isFalsyAnswer={isFalsyAnswer}
      />
    </>
  )
}
