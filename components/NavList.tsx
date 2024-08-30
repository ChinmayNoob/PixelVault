'use client'
import { useSelectedLayoutSegment } from 'next/navigation';
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function NavList() {
    const segment = useSelectedLayoutSegment();  // Get the current segment of the URL

    return (
        <div className="ml-auto flex items-center space-x-6">
            <Link
                href="/gallery"
                className={`cursor-pointer relative text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300 
                    ${segment === 'gallery' ? 'active-link' : 'inactive-link'}`}
            >
                <span className="relative hover:bg-gray-400 dark:hover:bg-gray-600 px-2 py-1 rounded-md transition-all duration-300 ease-in-out">
                    Gallery
                    {segment === 'gallery' && (
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black dark:bg-white animate-slide-in"></span>
                    )}
                </span>
            </Link>
            <Link
                href="/favorites"
                className={`cursor-pointer relative text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300 
                    ${segment === 'favorites' ? 'active-link' : 'inactive-link'}`}
            >
                <span className="relative hover:bg-gray-400 dark:hover:bg-gray-600 px-2 py-1 rounded-md transition-all duration-300 ease-in-out">
                    Favorites
                    {segment === 'favorites' && (
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black dark:bg-white animate-slide-in"></span>
                    )}
                </span>
            </Link>
            <ModeToggle />
            <Link href='https://github.com/ChinmayNoob'>
                <Avatar>
                    <AvatarImage src="/image.png" />
                    <AvatarFallback>CS</AvatarFallback>
                </Avatar>
            </Link>
        </div>
    )
}

export default NavList;
