'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import { toCapitalize } from '@/utils/utils'
import { useGetTopicsQuery } from '@/redux/services/topicsApi'
import { CardSkeleton } from '../CardSkeleton/CardSkeleton'
import { CardError } from '../CardError/CardError'

const vocabulary_first = [
  {
    id: 1,
    title: 'Base vocabulary topic one',
    description: '1 hour ago',
    img: 'https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.jpg?w=1800&t=st=1691066700~exp=1691067300~hmac=763fd7e47a7bdcf71a094ef1bae33ac327232db3408cfd20de7442f4f6434363',
  },
  {
    id: 2,
    title: 'Base vocabulary topic two',
    description: '1 hour ago',
    img: 'https://img.freepik.com/free-vector/flat-design-mountain-range-silhouette_23-2150491868.jpg?w=2000&t=st=1691066262~exp=1691066862~hmac=44ff915e34384c36acc563a3c3d4f18ac761e35aaf662bd6f53cd619e994c3e4',
  },
  {
    id: 3,
    title: 'Base vocabulary topic three',
    description: '2 hours ago',
    img: 'https://img.freepik.com/free-vector/flat-design-mountain-range-silhouette_23-2150491868.jpg?w=2000&t=st=1691066262~exp=1691066862~hmac=44ff915e34384c36acc563a3c3d4f18ac761e35aaf662bd6f53cd619e994c3e4',
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function CardTopics({ title = '' }: CardProps) {
  const { data, isLoading, isError } = useGetTopicsQuery()
  const pathname = usePathname()

  if (isLoading) {
    return <CardSkeleton count={1} />
  }

  if (isError) {
    return <CardError error="Ошибка при получении топиков" />
  }

  if (!!data) {
    return null
  }

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{toCapitalize(title)} Topics</CardTitle>
        <CardDescription>You have 3 {title} topics.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {(data as any).map((item, index) => (
            <Link
              href={`${pathname}/${item._id}`}
              key={item._id}
              className="flex items-center mb-4 last:mb-0"
            >
              <Image
                className="h-14 w-14 mr-6 rounded-full"
                src={item.img}
                width={32}
                height={32}
                alt="img"
              />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
