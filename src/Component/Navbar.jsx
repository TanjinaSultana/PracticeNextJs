"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname, pathname.includes("dashboard"));
    if(!pathname.includes("dashboard")){

        return (
            <div className=''>
                <ul className='flex justify-center align-center'>
    <Link href='/'>
               <li className='w-1/2'>Home</li>
    </Link>
    <Link href='/about'>
               <li className='w-1/2'>About</li>
    </Link>
    <Link href='/service'>
               <li className='w-1/2'>Service</li>
    </Link>
    <Link href='/posts'>
               <li className='w-1/2'>Post</li>
    </Link>
                </ul>
            </div>
        );
    }
    else{
        return <></>
    }
};

export default Navbar;