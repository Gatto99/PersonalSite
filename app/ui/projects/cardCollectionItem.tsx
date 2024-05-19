'use client';

import Image from "next/image";
import React from "react";

import "./cardCollectionItem.css";

export default function CardCollectionItem({projectInfo, handleCardClick}:
        { projectInfo: {id: string, name: string, description: string, year: string },
          handleCardClick: React.MouseEventHandler<HTMLDivElement> })
{
    const wordsLimit = 3
    const descriptionWords = projectInfo.description.split(" ");
    const isDescriptionTooLong = descriptionWords.length > wordsLimit;
    const truncatedDescription = isDescriptionTooLong ? (descriptionWords.slice(0, wordsLimit).join(" ")) : null;

    return(
        <div className={"bg-white text-black rounded-lg p-5 flex flex-col hover:bg-amber-50 hover:border-amber-200 " +
            "hover:shadow-2xl border-2 shadow-lg hover:scale-105 transition-all hover:cursor-pointer appear"}
            onClick={handleCardClick}>
            <div className={"h-1/3 w-1/2 flex items-center justify-center"}>
                <Image src={"/vercel.svg"} alt={"Project image"} width={200} height={400} />
            </div>
            <div className={"pt-4"}>
                <h1 className={"font-bold text-2xl"}>
                    {projectInfo.name}
                </h1>
                <div className={"pt-2"}>
                    <span className={`${isDescriptionTooLong ? "after:content-['...']" : ""}`}>
                        {isDescriptionTooLong ? truncatedDescription : projectInfo.description}
                    </span>
                </div>
                <div className={"pt-16"}>{projectInfo.year}</div>
            </div>
        </div>
    )
}