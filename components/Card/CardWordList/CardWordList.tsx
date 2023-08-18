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
  const { data, isLoading, isError, isSuccess } = useGetLessonQuery(id)
  const [step, setStep] = useState(0)
  const [countRightAnswers, setCountRightAnswers] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [isFalsyAnswer, setIsFalsyAnswer] = useState(false)

  let word: any = null
  let progressLength = null

  const onNextClick = () => {
    setStep((step) => step + 1)
    if (!train && step === data?.length - 1) {
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
    if (word?.word.en === inputValue) {
      onNextClick()
      setInputValue('')
      setIsFalsyAnswer(false)
      setCountRightAnswers((count) => count + 1)

      console.log(countRightAnswers)
    } else {
      setIsFalsyAnswer(true)
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

  if (isSuccess) {
    word = data && data?.[step]
    progressLength = data?.length
  }

  return (
    <>
      <CardWord
        key={word?.id}
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
        countRightAnswers={countRightAnswers}
      />
    </>
  )
}
