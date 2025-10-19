import Image from "next/image";

export default function PersonCard({ name, role, description, image, imageFirst }) {
    return (
    <div className="w-full flex my-4 border-3 border-blue-950 shadow-xl">
        {imageFirst && (
            <Image
                src={image}
                alt={`${name}'s picture`}
                width={500}
                height={500}
            />
        )}
        <div className="p-8">
            <h3 className="text-4xl font-bold">{name}</h3>
            <p className="text-xl text-gray-800 m-2">{role}</p>
            <p className="mt-2 text-3xl">{description}</p>
        </div>
        {!imageFirst && (
            <Image
                src={image}
                alt={`${name}'s picture`}
                width={500}
                height={500}
            />
        )}
    </div>
    
    );
}