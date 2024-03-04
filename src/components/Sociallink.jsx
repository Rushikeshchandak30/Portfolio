import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill } from "react-icons/bs"

const Sociallink = () => {

  const links = [
    {
          id:1,
          child:(
            <>
            Linkden <FaLinkedin size={30} />
            </>
          ),
          href:"https://www.linkedin.com/in/rushikesh-chandak-124302231",
          style:"rounded-tr-md"
    },
    {
      id:2,
      child:(
        <>
       Resume<BsFillPersonLinesFill size={30} />
        </>
      ),
      href:"hhttps://docs.google.com/document/d/1qKWlUuEd1lq1FGt_Ju4UspWNnpCmLGeGWhgZCDRET0c/edit",
      download : true,
      
    },
    {
  id:3,
  child:(
    <>
    Github <FaGithub size={30} />
    </>
  ),
  href:"https://github.com/Rushikeshchandak30",

    },
{
  id:4,
  child:(
    <>
    Mail<HiOutlineMail  size={30} />
    </>
  ),
  href:"mailto:chandakrushikesh30@gmail.com",
  style:"rounded-br-md",
},
  ]

  return (

  
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
        <ul>
          {links.map(({id,child,href,style,download}) =>
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-400 bg-gray-500" + " " + style}>
          <a
          href={href}
          className="flex justify-between items-center w-full text-white"
          download={download}
          target='_blank'
          >
             {child}
          </a>
          </li>
          )}
        </ul>       

    </div>
  )
}

export default Sociallink
