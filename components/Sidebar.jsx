"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


import Link from "next/link";
import { BellIcon, Compass, HomeIcon, MenuIcon, MessageCircleHeart, MessageCircleIcon, PlusCircle, SearchIcon, UserIcon, VideoIcon } from "lucide-react"
import { useState } from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {

    const menuItems = [
        {
            id: 2,
            icon: <HomeIcon />,
            title: "Home",
            href: "/"
        },
        {
            id: 3,
            icon: <SearchIcon />,
            title: "Search",
            href: "/search"
        },
        {
            id: 4,
            icon: <Compass />,
            title: "Explore",
            href: "/explore"
        },
        {
            id: 5,
            icon: <VideoIcon />,
            title: "Reels",
            href: "/reels"
        },
        {
            id: 6,
            icon: <MessageCircleHeart />,
            title: "Messages",
            href: "/messages"
        },
        {
            id: 7,
            icon: <BellIcon />,
            title: "Notifications",
            href: "/notifications"
        },
        {
            id: 8,
            icon: <PlusCircle />,
            title: "Create",
            href: "/create"
        },
        {
            id: 9,
            icon: <UserIcon />,
            title: "Profile",
            href: "/profile"
        },
    ]


    const pathname = usePathname();




    return (

        <>
            {/* desktop sidebar */}
            <section className="desktop_sidebar hidden md:block">

                <div className="flex flex-col justify-between items-start h-screen py-7 pr-10 pl-5 border-r border-r-white/20">
                    <div className="sidebar_logo">
                        <p className="text-xl font-semibold">LWF</p>
                    </div>

                    <div className="sidebar_links">

                        {
                            menuItems.map((item) => {

                                const isActive = pathname === item.href;

                                return (
                                    <Link key={item.id} href={item.href} className={`flex flex-center gap-3 hover:bg-white/10 rounded-md px-3 py-2 ${isActive ? "bg-white/10 font-semibold" : ""}`}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                )



                            })
                        }

                    </div>

                    <div className="sidebar_more">
                        <button className="flex items-center gap-2 text-[15px] font-semibold hover:bg-white/10 rounded-md pl-3 pr-7 py-2">
                            <MenuIcon />
                            <span>More</span>
                        </button>
                    </div>
                </div>

            </section>

            {/* mobile sidebar */}

            <section className="mobile_sidebar block md:hidden">

                <div className="flex justify-around border-t border-t-white/20 fixed bottom-0 w-full py-5">
                    {
                        menuItems.map((item) => {

                            const isActive = pathname === item.href;

                            return (
                                <TooltipProvider key={item.id}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Link href={item.href} className={`flex flex-center gap-3 hover:bg-white/10 rounded-md px-3 py-2 ${isActive ? "bg-white/10 font-semibold" : ""}`}>
                                                {item.icon}
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent >
                                            <p>{item.title}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )



                        })
                    }

                </div>

            </section>

        </>
    )
}

export default Sidebar;