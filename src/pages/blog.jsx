import Navbare from '@/components/Navbare';
import Image from 'next/image';
import React from 'react';
import image from '../pictures/campus-habous.jpeg'
import { hero } from '@/Info';
const Blog = () => {
    return (
        <div>
            <Navbare />
            <section className='section'>
                <h2 className='titel'>Au-delà d'un Simple Programme</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className="relative">
                        <span className='img' >
                            <Image src={image} height={500} width={500} alt="img" />

                        </span>
                    </div>
                    <div className="relative">
                        <span className='img2' >
                            <Image src={image} height={500} width={500} alt="img" />

                        </span>
                    </div>
                    <div className="relative">
                        <span className='img3' >
                            <Image src={image} height={500} width={500} alt="img" />

                        </span>
                    </div>
                </div>
            </section>
            <section className='section'>
                <h2 className='titel'>MEET THE HEROES</h2>
                <div className="row">
                        {
                            hero.map((heros, index) => (
                                <div className="col">


                                <div className="card  xl:w-[20vw] text-center " key={index}>
                                    <Image className="mx-auto rounded-full bg-black " src={heros.img} height={100} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{heros.title}</h5>
                                        <p className="card-text text-[#F73E03] text-[25px] font-bold">{heros.slides} </p>
                                        <a href={heros.link} target='_blank' className=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                    </div>
                            ))
                        }
                </div>
            </section>
        </div>
    );
}

export default Blog;
