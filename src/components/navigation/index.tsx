import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { auth } from "@/services/auth";
import Link from "next/link";
import SignOutBtn from "./_components/sign-out";

type sessionProps = {
    email: string | undefined;
};

export async function Navigation() {
  const session = await auth();

  return (
    session && (
      <>
        <TopBar email={(session?.user as sessionProps)?.email} />
        <SideBar />
      </>
    )
  );
}

function TopBar({ email }: sessionProps) {
  return (
    <div className="fixed inset-x-0 top-0">
      <div className="flex items-center h-14 px-4 justify-between bg-gray-200 dark:bg-gray-800">
        <h1>MICRO SAAS</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-7 w-7" >
              <AvatarFallback>PM</AvatarFallback>
            </Avatar>
            <div className="text-sm font-semibold">{email}</div>
          </div>
          <SignOutBtn />
        </div>
      </div>
    </div>
  )
}

function SideBar() {
  return (
    <div className="flex top-[3.5rem] fixed w-full h-full min-h-screen">
      <div className="flex h-full border-r bg-white border-gray-200/40 dark:border-gray-800/40">
        <nav className="flex-1 overflow-y-auto">
          <ul className="p-2">
            <li className="mb-1">
              <Link
                className="flex items-center h-10 rounded-lg bg-gray-100/40 text-sm font-medium transition-all px-3 dark:bg-gray-800/40"
                href="#"
              >
                <HomeIcon className="mr-2 h-4 w-4" />
                Home
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="flex items-center h-10 rounded-lg text-sm font-medium transition-all px-3 dark:text-gray-400"
                href="#"
              >
                <MessageSquareIcon className="mr-2 h-4 w-4" />
                Messages
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="flex items-center h-10 rounded-lg text-sm font-medium transition-all px-3 dark:text-gray-400"
                href="#"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Calendar
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="flex items-center h-10 rounded-lg text-sm font-medium transition-all px-3 dark:text-gray-400"
                href="#"
              >
                <UserIcon className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

function CalendarIcon(props: any) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function MessageSquareIcon(props: any) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
