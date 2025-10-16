import Image from "next/image";

export default function HomePageCard({ title, description, imageUrl }) {
    return (
    <div className="w-full flex my-2 bg-[#b5d3e780] border">
        <div className="w-3/5 h-full space-y-4 p-6">
            <h2 className="text-4xl font-bold text-blue-900 text-center">{title}</h2>
            <p className="text-xl">{description}</p>
        </div>
        <div className="w-2/5 h-full">
            <Image
            src={imageUrl}
            width="2000"
            height="2000"
            alt="mission image"
            />
        </div>
    </div>
    );
}