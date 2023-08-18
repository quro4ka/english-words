import { Card } from '@/components/ui/card'

interface CardWordEndProps {
  countAnswers: number
}

export const CardWordEnd = ({ countAnswers }: CardWordEndProps) => {
  return <Card className="px-6 py-4">Ура, вы набрали {countAnswers} правильных ответов</Card>
}
