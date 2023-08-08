import CardWordList from '@/components/Card/CardWordList/CardWordList'

interface TopicProps {
  params: {
    id: string
  }
}

export default function Vocabulary({ params: { id } }: TopicProps) {
  return (
    <>
      <CardWordList id={id} />
    </>
  )
}
