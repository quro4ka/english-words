'use client'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="border p-6 mb-4 mt-4 rounded-lg flex justify-between items-center">
      <div>
        <Link href="/">EW</Link>
      </div>
      <Button variant="outline" size="icon">
        {theme === 'light' ? (
          <Sun
            onClick={() => setTheme('dark')}
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
        ) : (
          <Moon
            onClick={() => setTheme('light')}
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
        )}
      </Button>
    </div>
  )
}
