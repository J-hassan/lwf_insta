"use client";

import Link from "next/link";
import { BellIcon, Compass, Expand, HomeIcon, MenuIcon, MessageCircleIcon, PaperclipIcon, PlusCircle, SearchIcon, UserIcon, VideoIcon } from "lucide-react"

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="sidebar_logo">
                <p className="text-xl font-semibold">LWF INSTA</p>
            </div>

            <div className="sidebar_links">
                <Link href={"/"} className="flex items-center gap-2">
                    <HomeIcon />
                    <span>Home</span>
                </Link>

                <Link href={"/"} className="flex items-center gap-2">
                    <SearchIcon />
                    <span>Search</span>
                </Link>

                <Link href={"/"} className="flex items-center gap-2">
                    <Compass />
                    <span>Explore</span>
                </Link>

                <Link href={"/"} className="flex items-center gap-2">
                    <VideoIcon />
                    <span>Reels</span>
                </Link>

                <Link href={"/"} className="flex items-center gap-2">
                    <MessageCircleIcon />
                    <span>Messages</span>
                </Link>

                <Link href={"/"} className="flex items-center gap-2">
                    <BellIcon />
                    <span>Notifications</span>
                </Link>

                <Link href={"/"} className="flex items-center gap-2">
                    <PlusCircle />
                    <span>Create</span>
                </Link>

                <Link href={"/"} className="flex items-center gap-2">
                    <UserIcon />
                    <span>Profile</span>
                </Link>

            </div>

            <div className="sidebar_more">
                <button className="flex items-center gap-2 text-lg font-semibold">
                    <MenuIcon />
                    <span>More</span>
                </button>
            </div>
        </section>
    )
}

export default Sidebar;