'use client'
import { useState } from 'react'
import CardWord from '../CardWord/CardWord'
import { words } from './../../../data/words'

interface CardWordListProps {
  id: string
}

export default function CardWordList({ id }: CardWordListProps) {
  const [step, setStep] = useState(0)
  const word = words[step]
  const progressLength = words.length

  const onNextClick = () => {
    setStep((step) => step + 1)
    if (step === words.length - 1) {
      setStep(0)
    }
  }

  const onPrevClick = () => {
    if (step === 0) {
      return null
    }

    setStep((step) => step - 1)

    if (step <= 0) {
      setStep(words.length - 1)
    }
  }

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
