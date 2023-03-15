'use client'

import { useServerInsertedHTML } from 'next/navigation'
import { NextUIProvider, CssBaseline } from '@nextui-org/react';



export default function Providers({ children }) {
  useServerInsertedHTML(() => {
    return <>{CssBaseline.flush()}</>
  })

  return (
    <>
        <NextUIProvider>
          {children}
        </NextUIProvider>
    </>
  )
}