import Image from "next/image";

export default function Carosuel({ imgUrls } : { imgUrls: string[] }) {

    const numImg = imgUrls.length;

    const sliderItem = [];
    for(let i = 0; i < numImg; i++) {
        sliderItem.push(
           <div key={i} className={"mx-2"}>
            -----
           </div>
        );
    }

    return(
        <div className="w-full overflow-x-hidden whitespace-nowrap relative ">
            {imgUrls.map(() => {
                return (
                    <div className={`w-full inline-block`}>
                        <div className={"flex justify-center"}>
                            <Image src={"/img/chaosDestr.jpg"} alt={"Back image"} width={1000} height={1000}/>
                        </div>
                    </div>
                );
            })}

            <div className={"absolute top-[90%] left-[40%] bg-white text-black z-10"}>
                <div className={"flex"}>
                    <span>Prev</span>

                    {/*<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">*/}
                    {/*    <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                    {/*    <span className="sr-only">Previous</span>*/}
                    {/*</a>*/}

                    <div className={"h-full flex"}>
                        {sliderItem}
                    </div>

                    <span>Next</span>

                    {/*<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">*/}
                    {/*    <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
                    {/*    <span className="sr-only">Next</span>*/}
                    {/*</a>*/}
                </div>
            </div>

        </div>
    );
}