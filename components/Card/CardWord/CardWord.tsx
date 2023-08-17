'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Eye, ArrowRight, ArrowLeft, Plus, Check } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Progress } from '@/components/ui/progress'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Input } from '@/components/ui/input'

interface WordProps {
  _id: number | string
  word: {
    en: string
    ru: string
  }
  img: string
  sentences?: any[]
  transcription: string
}

interface CardWordProps {
  word: WordProps
  step: number
  progressLength: number
  train?: boolean
  inputValue: string
  isFalsyAnswer: boolean
  setInputValue: (value: string) => void
  onNextClick: () => void
  onPrevClick: () => void
  onSubmitQuestion: () => void
}

interface WordData {
  id: string | number
  en: string
  ru: string
}

export default function CardWord({
  word,
  step,
  progressLength,
  train = false,
  onNextClick,
  onPrevClick,
  onSubmitQuestion,
  inputValue,
  setInputValue,
  isFalsyAnswer,
}: CardWordProps) {
  const [isView, setIsView] = useState(false)
  const progress = (step / progressLength) * 100

  const [isAdd, setIsAdd] = useState(false)
  const [words, setWords] = useLocalStorage([], 'words')

  const handleView = () => {
    setIsView((view) => !view)
  }

  const addWord = () => {
    const wordData: WordData = {
      id: word._id,
      en: word.word.en,
      ru: word.word.ru,
    }

    const localStorageWords = localStorage.getItem('words')

    if (localStorageWords) {
      const storage = JSON.parse(localStorageWords)
      const isSaved = storage.find((item: any) => item.id === wordData.id)

      if (!isSaved) {
        setWords([...words, wordData])
        setIsAdd(true)
      }
    }
  }

  useEffect(() => {
    setIsAdd(false)
    const localStorageWords = localStorage.getItem('words')

    if (localStorageWords) {
      const storage = JSON.parse(localStorageWords)
      const isSaved = storage.find((item: any) => item.id === word._id)

      if (isSaved) {
        setIsAdd(true)
      }
    }
  }, [progress])

  return (
    <>
      <div className="mb-4">
        <Progress value={progress} className="w-[100%] h-2" />
      </div>
      <Card className={`$flex flex-col ${isFalsyAnswer && 'bg-red-100'}`}>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>{train ? word.word.ru : word.word.en}</CardTitle>
              <CardDescription>{train ? 'ru' : word.transcription}</CardDescription>
            </div>
            <div>
              {isAdd ? (
                <Button disabled className="">
                  <Check />
                </Button>
              ) : (
                <Button onClick={addWord} className="">
                  <Plus />
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center ">
          {train ? (
            <div className="flex flex-col w-full max-w-sm gap-4">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full"
                type="enter a word"
                placeholder="Email"
              />
              <Button onClick={onSubmitQuestion} type="submit">
                try
              </Button>
            </div>
          ) : (
            <>
              <Button onClick={handleView} className="block mb-10">
                <Eye />
              </Button>
              {isView && (
                <>
                  <CardTitle className="mb-4">{word.word.ru}</CardTitle>
                  <Accordion type="single" collapsible className="w-full">
                    {word.sentences?.map((sentence, idx) => (
                      <>
                        <AccordionItem key={idx} value={`item-${idx}`}>
                          <AccordionTrigger>{sentence.en}</AccordionTrigger>
                          <AccordionContent>{sentence.ru}</AccordionContent>
                        </AccordionItem>
                      </>
                    ))}
                  </Accordion>
                </>
              )}
            </>
          )}
        </CardContent>
        <CardContent className="flex justify-center max-h-72">
          <Image
            className="rounded max-h-48 object-cover"
            loading="lazy"
            placeholder="blur"
            src={word.img}
            style={{ width: 288, height: 200 }}
            blurDataURL={
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8ePf9fwAJAgOuFA936gAAAABJRU5ErkJggg=='
            }
            width={288}
            height={200}
            alt="aunt"
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button disabled={step === 0} onClick={onPrevClick}>
            <ArrowLeft />
          </Button>
          <Button onClick={onNextClick}>
            <ArrowRight />
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
