import Image from "next/image";


export default async function PhotoPage({params}: {params: {href: string}}){
    const { href } = await params;

    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <Image src={`/${href}`} alt="" width={300} height={0} className="self-center rounded-lg"/>
        </div>
    );

}