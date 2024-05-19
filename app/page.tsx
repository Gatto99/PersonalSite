'use client';

import Image from "next/image";
import { jersey } from "@/app/ui/fonts";
import CardCollection from "@/app/ui/projects/cardCollection";
import {useRef, useState} from "react";
import Link from "next/link";

export default function Page() {
    const cardCollectionRef = useRef<HTMLDivElement>(null);

    function openNewTab(url: string){
        window.open(url, "_blank").focus();
    }

    function sendEmail(){
        window.location = "mailto:gattinidavide@gmail.com";
    }

    return (
        <div className={"mx-28 my-8"}>
            <div className={"flex flex-col"}>
                <div className={"h-[95vh] pt-8"}>
                    <div className={"flex h-4/5"}>
                        <div className={"flex flex-col justify-center w-1/2"}>
                            <div>
                                <div className={"flex flex-col text-7xl"}>
                                    <span>Hi,</span>
                                    <div>
                                        <span>I'm </span>
                                        <span className={`${jersey.className} text-8xl`}>Davide Gattini</span>
                                    </div>
                                </div>
                                <div>
                                    <span className={"text-2xl"}>Frontend developer and videogame lover</span>
                                </div>
                            </div>
                            <div className={"w-full flex justify-around pt-8"}>
                                <div className={"scale-75 hover:scale-100 transition-all hover:cursor-pointer"}
                                    onClick={() => openNewTab("https://github.com/Gatto99")}>
                                    <Image src={"/img/githubIcon.png"} alt={"Github link icon"} width={50} height={50}/>
                                </div>
                                <div className={"scale-75 hover:scale-100 transition-all hover:cursor-pointer"}
                                    onClick={() => openNewTab("https://linkedin.com/in/davidegattini")}>
                                    <Image src={"/img/linkedinIcon.png"} alt={"Linkedin link icon"} width={50} height={50}/>
                                </div>
                                <div className={"scale-75 hover:scale-100 transition-all place-content-center hover:cursor-pointer"}
                                    onClick={() => {
                                        sendEmail();
                                    }}>
                                    <Image src={"/img/gmailIcon.png"} alt={"Gmail link icon"} width={51} height={38}/>
                                </div>
                            </div>
                        </div>
                        <div className={`w-1/2 flex justify-end`}>
                            <Image className={"w-1/2 h-auto"} src={"/img/tls.jpg"} alt={"Profile image"} width={100} height={200} priority/>
                        </div>
                    </div>
                    <div className={"flex justify-center animate-bounce hover:cursor-pointer pt-[3rem]"}
                        onClick={() => {
                            cardCollectionRef.current?.scrollIntoView({behavior: 'smooth'});
                        }}>
                        <Image src={"/img/arrowDown.svg"} alt={"Arrow for sliding"} width={40} height={40}/>
                    </div>
                </div>
                <div ref={cardCollectionRef} className={"h-[95vh] pt-4"}>
                    <Link href={"/home/projects"} className={"text-5xl font-bold appear mb-4"}>Projects</Link>
                    <CardCollection/>
                </div>
            </div>
        </div>
    );
}
