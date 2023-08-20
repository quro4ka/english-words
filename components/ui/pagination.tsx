import { Button } from './button'

export const Pagination = ({ count, totalCount, currentPage, paginate }: any) => {
  const btns = []
  for (let i = 1; i <= Math.ceil(totalCount / count); i++) {
    btns.push(i)
  }
  return (
    <div className="flex gap-2">
      {btns.map((btn, idx) => (
        <Button
          className={`${
            btn === currentPage &&
            'bg-orange-400 transition-all delay-75 hover:bg-orange-400 hover:opacity-90'
          }`}
          onClick={() => paginate(btn)}
        >
          {btn}
        </Button>
      ))}
    </div>
  )
}
