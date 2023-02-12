import React from "react";
import Image from "next/image";

const skills = [
{ skill: "Data Analytics" },
{ skill: "Blockchain Analytics" },
{ skill: "Product Management" },
{ skill: "SQL" },
{ skill: "Python" },
{ skill: "Looker ML" },
{ skill: "Design" },
{ skill: "Solidity" },

];

const AboutSection = () => {
return (
<section id="about">
<div className="my-12 pb-12 md:pt-16 md:pb-48">
<h1 className="text-center font-bold text-4xl">
About Me
<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
</h1>
<div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
<div className="md:w-1/2">
<h1 className="text-center text-2xl font-bold mb-6 md:text-left">
Get to know me!
</h1>
<p>
{" "}
<span className="font-bold"> Ikechukwu</span>,{" "}
means "God's Stregth", (for the curious). Based in Lagos, Nigeria and Bridgetown, Barbados.
</p>
<br />
<p>
I am an{" "}
<span className="font-bold"> ambitious</span>,{" "}
<span className="font-bold">self-motivated</span>, and{" "}
<span className="font-bold">driven</span> product owner and business leader with expertise across E-commerce, crypto and supplychain. 
My goal is to build products that redefine the way we create value and enagage with commerce in Nigeria.
</p>
<br />
<p>
I graduated from the University of Sheffield, United Kingdom in 2019 with a BEng in
Electronic and Communications Engineering. I have since taken academic interest in Blockchain and the EVM while building a career 
in solving problems, developing products and growing businesses.
</p>
<br />
<p>
If you'd like to reach out/grab a cup of coffee, please send me an email:{" "}
<span className="font-bold text-teal-500">
ik.abuah@gmail.com
</span>{" "}
</p>
</div>
<div className="text-center md:w-1/2 md:text-left">
<h1 className="text-2xl font-bold mb-6">My Skills</h1>
<div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
{skills.map((item, idx) => (
<p
               key={idx}
               className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
             >
{item.skill}
</p>
))}
</div>
<Image
           src="/hero-image.png"
           alt=""
           width={325}
           height={325}
           className="hidden md:block md:relative md:bottom-100 md:left-0 md:z-0"
           
         />
</div>
</div>
</div>
</section>
);
};

export default AboutSection;