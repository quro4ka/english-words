interface CardErrorProps {
  error: string
}

export function CardError({ error }: CardErrorProps) {
  return (
    <div className="p-4 border-2 border-solid border-gray-100 rounded-lg">
      <h1>{error}</h1>
    </div>
  )
}
