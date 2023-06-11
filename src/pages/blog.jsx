import Navbare from '@/components/Navbare';
import Image from 'next/image';
import React from 'react';
import image from '../pictures/campus-habous.jpeg'
const Blog = () => {
    return (
        <div>
            <Navbare />
            <section className='section'>
                <h2 className='titel'>Au-delà d'un Simple Programme</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className="relative">
                        <span  className='img' >
                        <Image src={image} height={500} width={500} alt="img" />

                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Blog;
