import CardWordList from '@/components/Card/CardWordList/CardWordList'

interface TopicProps {
  params: {
    id: string
  }
}

export default function Topic({ params: { id } }: TopicProps) {
  console.log(id)

  return (
    <>
      <CardWordList id={id} />
    </>
  )
}
