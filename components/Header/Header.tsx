import Link from 'next/link'
import { Card } from '../ui/card'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="border py-3 px-6 mb-4 mt-4 rounded-lg flex justify-between items-center">
      <Link href="/">
        <Image
          src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-m-design_460848-10168.jpg?w=1380&t=st=1691931455~exp=1691932055~hmac=b162885cbad55967f0cf2e7e9e58fd6bb0c6637c2a2020ce694ada1f48fa0c60"
          width={40}
          height={40}
          alt="logo"
          style={{ borderRadius: '50%' }}
        />
      </Link>
      <div className="h-10">
        <ThemeToggle />
      </div>
    </div>
  )
}
