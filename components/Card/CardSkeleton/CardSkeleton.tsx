import { Skeleton } from '@/components/ui/skeleton'

interface CardSkeletonProps {
  count?: number
}

export function CardSkeleton({ count = 5 }: CardSkeletonProps) {
  const fakeItems = Array(count).fill(null)

  return (
    <div className="p-4 border-2 border-solid border-gray-100 rounded-lg">
      <div className="mb-4">
        <Skeleton className="h-8 w-[250px] mb-2" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      {fakeItems.map((item, idx) => (
        <div key={idx} className="flex items-center space-x-4 mb-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  )
}
