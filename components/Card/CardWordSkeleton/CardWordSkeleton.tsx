import { Skeleton } from '@/components/ui/skeleton'

interface CardSkeletonProps {
  count?: number
}

export function CardWordSkeleton({ count = 5 }: CardSkeletonProps) {
  const fakeItems = Array(count).fill(null)

  return (
    <div className="p-4 border-2 border-solid border-gray-100 rounded-lg">
      <div className="mb-12">
        <Skeleton className="h-8 w-[250px] mb-2" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <div className="mb-12">
        <Skeleton className="h-10 w-[60px] mb-10 mx-auto" />
        <Skeleton className="h-[200px] w-[300px] mb-4 m-auto" />
      </div>
      <div className="flex justify-between">
        <Skeleton className="h-10 w-[60px]" />
        <Skeleton className="h-10 w-[60px]" />
      </div>
    </div>
  )
}
