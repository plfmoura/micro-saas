import { auth } from "@/services/auth"

export default async function page() {
  const session = await auth()

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1>Hello World!</h1>
    </main>
  )
}
