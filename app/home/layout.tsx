import Tab from "@/app/ui/navbar/tab"
import Image from "next/image";
import { jersey } from "@/app/ui/fonts";
import Link from "next/link";

export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <>
            <div className={"flex items-center h-20 px-14 w-full my-8"}>
                <Link href={"/"} className={"w-3/4 h-full flex items-center"}>
                    <div>
                        <Image className={"rounded-full"} src={"/img/profileImage.jpg"} alt={"Profile image"} width={100} height={130}/>
                    </div>
                    <span className={`text-5xl ${jersey.className}`}>Davide Gattini</span>
                </Link>
                <div className={"flex justify-around h-full flex-grow"}>
                    <Tab link={"/home/"}>Home</Tab>
                    <Tab link={"/home/projects"}>Projects</Tab>
                </div>
            </div>
            <div className={"h-[80vh] px-14"}>{ children }</div>
        </>
    )
}