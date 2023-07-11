import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                    About Me
                </p>
            </div>
            <p className="text-xl mt-20">
            As a young college student passionate about web development, I am enthusiastic about leveraging various technologies to build innovative and user-friendly websites. My primary focus lies in utilizing Git, React, Tailwind CSS, MySQL, and MongoDB to create robust and dynamic web applications.

I am driven by a desire to continuously learn and improve my skills, exploring the latest trends and best practices in the field
            </p>
            <br />
            <p className="text-xl">
            As a young professional, I am eager to apply my knowledge and skills in real-world scenarios. I am open to challenging opportunities that will allow me to grow and make a meaningful impact in the field of web development. By combining my technical expertise with a strong work ethic and a passion for continuous learning, I am confident in building a successful career in the web development industry.
            </p>
        </div>
    </div>
  )
}

export default About