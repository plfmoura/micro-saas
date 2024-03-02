'use client'

import { Button } from "@/components/ui/button"
import { signOut } from 'next-auth/react'

export default function SignOutBtn() {
  return (
    <Button className="rounded-r-none" onClick={() => signOut()}>
      <LogOutIcon className="mr-1.5 h-4 w-4" />
      Sign out
    </Button>
  )
}

function LogOutIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}