import { Trash } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Word {
  id: string
  en: string
  ru: string
}

interface CardRowProps {
  word: Word
  idx: number
  onClick: (id: string) => void
}

export const CardRow = ({ word, idx = 0, onClick }: CardRowProps) => {
  return (
    <Card className="flex items-center justify-between py-3 px-6 mb-4">
      <div className="flex items-center ">
        <p className="mx-2 block">{idx + 1}.</p>
        <p className="w-24 block">{word.en}</p>
        <p className="w-24 block">{word.ru}</p>
      </div>
      <Button onClick={() => onClick(word.id)} size="sm">
        <Trash size={15} />
      </Button>
    </Card>
  )
}
