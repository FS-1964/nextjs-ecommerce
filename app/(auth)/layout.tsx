// import { getSetting } from '@/lib/actions/setting.actions'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const { site } = await getSetting()
  return (
    <div className='flex flex-col items-center min-h-screen highlight-link  '>
      <header className='mt-8'>
        <Link href='/'>
          <Image
            src='/icons/logo.svg'
            alt='logo'
            width={64}
            height={64}
            priority
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Link>
      </header>
      <main className='mx-auto max-w-sm min-w-80 p-4'>{children}</main>
      <footer/>
    </div>
  )
}
