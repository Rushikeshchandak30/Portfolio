import React from 'react';
import blogx from "../assets//portfolio//blogx.png";
import atm from "../assets//portfolio//atm.jpeg";
import inventory from "../assets/portfolio/inventory.png";

const Portfolio = () => {

const projectdemo =url =>{
    window.open(url,'_blank')
};
   
    const portfolios=[
        {
            id:1,
            src:blogx,
            link:'https://github.com/Rushikeshchandak30/blog-x',
        },
        {
            id:2,
            src:inventory,
            link:'https://github.com/Rushikeshchandak30/Inventory-Management',

        },
        {
            id:3,
            src:atm,
            link:'https://github.com/Rushikeshchandak30/Rushiportfolio',
        },
       
    ]
  return (
    <div name="Portfolio" className="bg bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline-border-b-4 border-gray-500 ">Portfolio</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                
            {
                portfolios.map(({id,src,link})=>(
                    <div
                    key={id}
                    className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src}
                     alt=""
                     className="rounded-md duration-200 hover:scale-105"/>
                    <div className="flex items-center justify-center">
                        <button
                        link={link} 
                        onClick={()=> projectdemo(link)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo </button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                    </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  );
};

export default Portfolio