import { LuLogOut, LuUser2 } from "react-icons/lu"

import { Avatar, AvatarFallback, AvatarImage } from "@/lib/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/lib/components/ui/dropdown-menu"

interface UserBlockProps {
  email?: string
  image?: string
  name?: string
  signOut: () => void
}

export function UserBlock(props: UserBlockProps) {
  const { image, name } = props
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex flex-row items-center ">
          <Avatar style={{ height: 28, width: 28, marginRight: 8 }}>
            <AvatarImage src={image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{name}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <LuUser2 className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={props.signOut}>
            <LuLogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
