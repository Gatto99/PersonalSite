import React from "react";

export default function ModalCard({ projectInfo, handleModalClosing } :
                                    {
                                        projectInfo : {name: string, description: string, year: string},
                                        handleModalClosing: React.MouseEventHandler<HTMLSpanElement>
                                    }) {
    return (
        <div className={"w-full h-full flex items-center justify-center"}>
            <div className={"h-4/5 w-2/5 flex flex-col text-black p-10 " +
                // "bg-chaos-pattern bg-no-repeat bg-cover " +
                "bg-white " +
                "rounded-lg border-black border-2 shadow-2xl"}>
                <div className={"flex justify-end relative -top-6 left-4"}>
                    <span className={"hover:cursor-pointer text-3xl"}
                          onClick={handleModalClosing}>
                        X
                    </span>
                </div>
                <div>{projectInfo.name}</div>
                <div className={"flex-1 mt-7"}>{projectInfo.description}</div>
                <div>{projectInfo.year}</div>
            </div>
        </div>
    );
}