import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Avatar } from "./ui/avatar"
import { SidebarTrigger } from "./ui/sidebar"

const Header = () => {
  return (
    <header className="w-full h-16 p-2 flex items-center gap-4 border-b bg-white">
      <section className="px-2">
        <SidebarTrigger />
      </section>
      <section className="flex-1">
        <span className='font-semibold'>내돈지켜줘</span>
      </section>
      <section className="px-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>
    </header>
  )
}

export default Header