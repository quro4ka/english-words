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
  onNextClick: () => void
  onPrevClick: () => void
}

export default function CardWord({ word, onNextClick, onPrevClick }: CardWordProps) {
  const [isView, setIsView] = useState(false)

  const handleView = () => {
    setIsView((view) => !view)
  }

  const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

  const toBase64 = (str: string) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

  return (
    <Card className="w-[350px] h-full flex flex-col	">
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
      {/* max-h-80 */}
      <CardContent className="flex justify-center max-h-72">
        <Image
          className="rounded"
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
        <Button onClick={onPrevClick}>
          <ArrowLeft />
        </Button>
        <Button onClick={onNextClick}>
          <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  )
}
