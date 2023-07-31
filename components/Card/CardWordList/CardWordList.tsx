'use client'
import { useState } from 'react'
import CardWord from '../CardWord/CardWord'
import { words } from './../../../data/words'

export default function CardWordList() {
  const [step, setStep] = useState(0)
  const word = words[step]

  const onNextClick = () => {
    setStep((step) => step + 1)

    if (step === words.length - 1) {
      setStep(0)
    }
  }

  const onPrevClick = () => {
    setStep((step) => step - 1)

    if (step <= 0) {
      setStep(words.length - 1)
    }
  }

  return (
    <>
      <CardWord key={word.id} word={word} onNextClick={onNextClick} onPrevClick={onPrevClick} />
    </>
  )
}
