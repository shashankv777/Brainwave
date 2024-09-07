import React from 'react'
import {collabApps} from '../constants'

function CompanyLogo({className}) {
  return (
    <div className={className}>
        <h4 className='text-md tagline mb-6 text-center text-n-1/50'>
            Helping people create beautiful content at
        </h4>
        <ul className='flex gap-1 '>
            {collabApps.map((item,index)=>(index<5 ?
                <li className="flex items-center justify-center flex-1  h-[6.5rem]" key={index}>
                    <img
                    src={item.icon}
                    width={60}
                    height={50}
                    alt='logo'
                    />
                </li>

            :[]))}
        </ul>
      
    </div>
  )
}

export default CompanyLogo
