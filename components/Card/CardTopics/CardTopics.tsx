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
