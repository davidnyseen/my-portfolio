import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          During my time as a Full stack Engineer at Imprint, I had the opportunity to work on some exciting projects that allowed me to showcase my skills and make a significant impact:
          Successfully developed a political party website for elections, resulting in 1 million
          website visits during the campaign.
        </p>

        <br />

  
      </div>
    </div>
  );
};

export default About;
