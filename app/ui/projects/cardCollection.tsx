import CardCollectionItem from "@/app/ui/projects/cardCollectionItem";
import ModalCard from "@/app/ui/projects/modalCard";
import {useState} from "react";

import { projects } from "@/app/lib/data";
import { usePathname} from "next/navigation";
import Link from "next/link";

export default function CardCollection() {
    const [showModalCard, setShowModalCard] = useState(false);
    const [selectedProjIdx, setSelectedProjIdx] = useState(0);

    const [canCardsBeClicked, setCanCardsBeClicked] = useState(true);

    // se sono nella pagina dedicata ai progetti allora al click non si apre la modale ma si passa alla pagina dedicata
    const currentPath = usePathname();
    console.log("Path corrente della cardCollection: " + currentPath);

    const inProjectPage = currentPath === "/home/projects";
    console.log("We are in project page? " + (inProjectPage ? "Yes" : "No"));

    function handleCardClick(projIdx: number){
        if(!canCardsBeClicked || inProjectPage) return;

        setSelectedProjIdx(projIdx);
        setShowModalCard(true);
        setCanCardsBeClicked(false);
    }

    function handleModalClosing(){
        setShowModalCard(false);
        setCanCardsBeClicked(true);
    }

    return (
        <>
            <div className={`grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 py-4 w-full h-auto `}>
                {projects.map((proj, projIdx) => {
                    return (
                        <>
                            {inProjectPage &&
                                <Link href={"/home/projects/" + proj.id}>
                                    <CardCollectionItem key={proj.name} projectInfo={proj}
                                                        handleCardClick={() => {}}/>
                                </Link>
                            }

                            {!inProjectPage && <CardCollectionItem key={proj.name} projectInfo={proj}
                                                                   handleCardClick={() => handleCardClick(projIdx)}/>}
                        </>
                    );
                })}
            </div>
            {showModalCard &&
                <div className={"top-0 left-0 w-full h-[90vh] fixed"}>
                    <ModalCard projectInfo={projects[selectedProjIdx]} handleModalClosing={handleModalClosing}/>
                </div>
            }
        </>
    );
}