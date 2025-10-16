import PersonCard from "@/components/personCard";

export default function About() {
    return (
        <>
            <PersonCard 
            name="Hubert Kozicki" 
            role="Team leader" 
            description="He was unanimously selected for this role due to his strong leadership skills and ability to effectively coordinate the team. Hubert oversees task management to ensure a smooth and efficient design process. " 
            image="/hubert.jpg"
            imageFirst={false}/>

            <PersonCard 
            name="Adam Lichnerowicz" 
            role="Communication and software engineer" 
            description="He is the communication and software engineer. He brings in-depth knowledge of communication protocols, networking, and programming languages essential to our project. Additionally, as an experienced FPV pilot, Adam offers valuable practical insights into remote control systems and real-time data transmission, which enhance our project’s communication capabilities. " 
            image="/adam.jpg"
            imageFirst={true}/>

            <PersonCard 
            name="Antoni Mordal"
            role="Project architect" 
            description="His primary responsibility is designing the exterior of the satellite to maximize aerodynamic efficiency and structural integrity. Antoni carefully considers factors such as material selection, weight distribution, and thermal protection to ensure the satellite can withstand the harsh conditions of flight and space. His architectural expertise is essential for balancing functional design with durability, directly impacting the satellite’s optimal performance during launch and operation. " 
            image="/antoni.jpg"
            imageFirst={false}/>

            <PersonCard 
            name="Kajetan Kraska"
            role="Programmer" 
            description="He serves as the team’s lead programmer, overseeing all aspects of software development and data management. He is responsible for designing and maintaining the team’s website, ensuring that it effectively presents project updates and technical documentation. Kajetan also develops and integrates the code for both the Arduino and Raspberry Pi systems, enabling communication between onboard sensors and ground systems. In addition, he manages data acquisition and analysis on the ground, interpreting telemetry to support mission decisions and improve system performance. His technical expertise and problem-solving skills are essential to the success of the team’s hardware and software integration. " 
            image="/kajetan.jpg"
            imageFirst={true}/>
        
            <PersonCard 
            name="Kasia Cichocka"
            role="Social media manager" 
            description="She manages social media and acts as the project ambassador. She is responsible for developing and maintaining the team’s online presence, creating engaging content, and managing communications with external audiences. Katarzyna also handles public relations, promoting the project to stakeholders, sponsors, and the wider community. Her efforts help build awareness, attract support, and foster a positive image for our team and mission." 
            image="/kasia.jpg"
            imageFirst={false}/>
        </>
    );
}