import CardWordList from '@/components/Card/CardWordList/CardWordList'

interface TopicProps {
  params: {
    id: string
  }
}

export default function Conversations({ params: { id } }: TopicProps) {
  return (
    <>
      <CardWordList id={id} />
    </>
  )
}
