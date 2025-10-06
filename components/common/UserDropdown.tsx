"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Avatar } from "../ui/avatar"
import { useState } from "react"
import NavItems from "./NavItems"
import { LogOut } from "lucide-react"

function UserDropDown() {

    const [user, setUser] = useState({name: "Rafael", email: "rafaelwolde2030@gmail.com", profilePicUrl: "https://lh3.googleusercontent.com/-v1EuUU2dSFQ/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkk5lL2LhxbARxumFo5izGQAl6w5Qw/photo.jpg?sz=46"});
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors">
                <Avatar className="w-8 h-8 -translate-x-4">
                    <AvatarImage className="w-full h-full" src={user.profilePicUrl} alt="User" width={28} height={28} />
                    <AvatarFallback className="bg-yellow-400 text-gray-900 w-full h-full text-center leading-[2rem]">{user.name[0]}</AvatarFallback>
                </Avatar>
                {user.name}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>
                <div className="flex items-center gap-3 p-1 pr-2 border-1 rounded-xl">
                    <Avatar>
                        <AvatarImage src={"https://github.com/shadcn.png"}>

                        </AvatarImage>
                    </Avatar>
                    <div className="flex flex-col align-start">
                        <span className="text-gray-400 text-sm font-light">{user.name}</span>
                        <span className="text-gray-500 font-light text-xs">{user.email}</span>
                    </div>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="block sm:hidden"/>
            <nav className="block sm:hidden">
                <NavItems />
            </nav>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-md text-gray-100">
                 <LogOut /> Logout
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropDown
