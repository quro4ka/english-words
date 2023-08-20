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
import { Pagination } from '@/components/ui/pagination'
import { useState } from 'react'

type CardProps = React.ComponentProps<typeof Card>

export function CardTopics({ title = '' }: CardProps) {
  const { data, isLoading, isError, isSuccess } = useGetTopicsQuery()
  const pathname = usePathname()

  const [currentPage, setCurrentPage] = useState(1)
  const [topicsPerPage, setTopicsPerPage] = useState(2)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  if (isLoading) {
    return <CardSkeleton count={1} />
  }

  if (isError) {
    return <CardError error="Ошибка при получении топиков" />
  }

  if (isSuccess) {
    // countPages = Math.round(data?.length / countItemsOnPage)
  }

  const lastPageIndex = currentPage * topicsPerPage
  const firstPageIndex = lastPageIndex - topicsPerPage
  const currentTopics = data.slice(firstPageIndex, lastPageIndex)

  return (
    <>
      <Card className="my-6">
        <CardHeader>
          <CardTitle>{toCapitalize(title)} Topics</CardTitle>
          <CardDescription>You have 3 {title} topics.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            {currentTopics.map((item, index) => (
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
      <Pagination
        count={topicsPerPage}
        totalCount={data?.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  )
}
