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
import { Eye, ArrowRight, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Progress } from '@/components/ui/progress'

interface WordProps {
  id: number | string
  word_en: string
  word_ru: string
  img: string
  sentences?: any[]
  transcription: string
}

interface CardWordProps {
  word: WordProps
  step: number
  progressLength: number
  onNextClick: () => void
  onPrevClick: () => void
}

export default function CardWord({
  word,
  step,
  progressLength,
  onNextClick,
  onPrevClick,
}: CardWordProps) {
  const [isView, setIsView] = useState(false)
  const [progress, setProgress] = useState((step / progressLength) * 100)

  const handleView = () => {
    setIsView((view) => !view)
  }

  // console.log(progress)

  return (
    <div className="">
      <div className="mb-4">
        <Progress value={progress} className="w-[100%] h-2" />
      </div>
      <Card style={{ height: '100vh' }} className="flex flex-col">
        <CardHeader>
          <CardTitle>{word.word_en}</CardTitle>
          <CardDescription>{word.transcription}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center grow">
          <Button onClick={handleView} className="block mb-10">
            <Eye />
          </Button>
          {isView && (
            <>
              <CardTitle className="mb-4">{word.word_ru}</CardTitle>
              <Accordion type="single" collapsible className="w-full">
                {word.sentences?.map((sentence, idx) => (
                  <>
                    <AccordionItem value={`item-${idx}`}>
                      <AccordionTrigger>{sentence.en}</AccordionTrigger>
                      <AccordionContent>{sentence.ru}</AccordionContent>
                    </AccordionItem>
                  </>
                ))}
              </Accordion>
            </>
          )}
        </CardContent>
        <CardContent className="flex justify-center max-h-72">
          <Image
            className="rounded max-h-48 object-cover"
            loading="lazy"
            placeholder="blur"
            src={word.img}
            style={{}}
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
    </div>
  )
}
