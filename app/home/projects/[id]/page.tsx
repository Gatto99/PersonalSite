import Carosuel from "@/app/ui/projects/carosuel";
import {projects} from "@/app/lib/data";

export default function Page({ params }: { params: {id: string}}) {
    const projectInfo = projects[Number(params.id)];
    return (
        <div className={"flex flex-col items-center w-full px-14"}>
            <div className={"text-5xl font-bold mb-3"}>PROJECT NAME</div>
            <div className={"mb-8"}>Un bel progetto fatto col cuore</div>
            <div className={"mb-8"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <Carosuel imgUrls={projectInfo.urlImages}/>
            <div>FOOTER CON DATA REALIZZAZIONE E AGGIORNAMENTO</div>
        </div>
    );
}