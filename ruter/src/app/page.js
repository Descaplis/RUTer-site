import HomePageCard from "@/components/homePageCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl mt-2 mb-14">
        We are a team united by a passion for space and programming skills. In this project, we combine knowledge from various subjects such as physics, mathematics, and engineering. This knowledge has helped us create a model of a miniature satellite in the shape of a can. Our desire to develop our technical skills, collaboration, and communication has driven us to participate in the CanSat project.
      </h2>

      <HomePageCard 
      title="Our primary mission" 
      description="The primary mission is the same for all teams: to design and build a functional CanSat, measure air temperature and air pressure and transmit the data to the ground station."
      imageUrl="/primary mission image.jpg"/>
      
      <HomePageCard 
      title="Our secondary mission" 
      description="The secondary mission is chosen by each team individually. Our secondary mission is to transmit a live video of the sight of our satellite throughout the whole fall of the aircraft using an FPV camera and a VTX. The data would be then received using a Software Defined Radio (SDR) connected to a computer on the ground station."
      imageUrl="/secondary mission image.jpg"
      />
    </div>
 );
}