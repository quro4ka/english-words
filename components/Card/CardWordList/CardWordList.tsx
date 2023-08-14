'use client'
import { useState } from 'react'
import CardWord from '../CardWord/CardWord'
import { useGetLessonQuery } from '@/redux/services/lessonApi'
import { CardWordSkeleton } from '../CardWordSkeleton/CardWordSkeleton'
import { CardError } from '../CardError/CardError'

interface CardWordListProps {
  id: string
}

export default function CardWordList({ id }: CardWordListProps) {
  const { data, isLoading, isError } = useGetLessonQuery(id)
  const [step, setStep] = useState(0)

  const onNextClick = () => {
    setStep((step) => step + 1)
    if (step === data?.length - 1) {
      setStep(0)
    }
  }

  const onPrevClick = () => {
    if (step === 0) {
      return null
    }

    setStep((step) => step - 1)

    if (step <= 0) {
      setStep(data?.length - 1)
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

  const word = data && data?.[step]
  const progressLength = data?.length

  return (
    <>
      <CardWord
        key={word.id}
        word={word}
        step={step}
        progressLength={progressLength}
        onNextClick={onNextClick}
        onPrevClick={onPrevClick}
      />
    </>
  )
}
