"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const aboutpage = () => {
    const router = useRouter();
    const isLoggedIn = false;
    const handleClick = () =>{
        if(isLoggedIn){
            router.push('/about/address')
        }
        else{
            router.push('/')
        }
    }
    return (
        <div>
            <h1 className='font-bold text-3xl'>AboutPage</h1>
            <p><Link href='/about/address' className='font-bold text-3xl bg-red-400'>
            AboutPage
            </Link>
            </p>
            <button type='button' onClick={handleClick}>Toggle</button>
        </div>
    );
};

export default aboutpage;