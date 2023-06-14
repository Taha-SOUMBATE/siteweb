import Navbare from '@/components/Navbare';
import Image from 'next/image';
import React from 'react';
import image from '../pictures/campus-habous.jpeg'
import { hero, news } from '@/Info';
import Footer from '@/components/Footer';
import Link from 'next/link';
const Blog = () => {
    return (
        <>
            <Navbare />
            <section className='section my-10'>
                <h2 className='titel'>Au-delà d'un Simple Programme</h2>
                <div className="grid md:grid-cols-3  content-center gap-4">
                    <div className="relative">
                    <Link href="https://goo.gl/maps/KP1j26peSsFknvjz9"
                            target='_blank'
                            >
                        <span className='img' >
                            
                            <Image src={image} height={500} width={500} alt="img" />
                            

                        </span>
                        </Link>
                    </div>
                    <div className="relative">
                        <Link href="https://goo.gl/maps/Mb5rvX37fdBQPwCU9" target='_blank'>
                        <span className='img2' >
                            <Image src={image} height={500} width={500} alt="img" />

                        </span>
                        </Link>
                    </div>
                    <div className="relative">
                        <span className='img3' >
                            <Image src={image} height={500} width={500} alt="img" />

                        </span>
                    </div>
                </div>
            </section>
            <section className='section mb-10'>
                <h2 className='titel'>MEET THE HEROES</h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-4">
                    {
                        hero.map((heros, index) => (
                            


                                <div className="card  xl:w-[20vw] text-center py-1 " key={index}>
                                    <Image className="mx-auto rounded-full p-[0.1px] bg-black " src={heros.img} height={100} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{heros.title}</h5>
                                        <p className="card-text text-[#F73E03] text-[25px] font-bold">{heros.slides} </p>
                                        <a href={heros.link} target='_blank' className=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            
                        ))
                    }
                </div>
            </section>
            <section className='section mb-10'>
                <h2 className='titel'>NEWS</h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">

                {
                    news.map((newss, index) => (
                        

                            <div className="card  xl:w-[20vw]  pt-4 text-center  relative" key={index}>
                                <Image className='mx-auto' src={newss.pick} height={100} />
                                <h2>{newss.titel} </h2>
                                <p>{newss.subtitel} </p>
                                <div className="content">
                                    <h2>{newss.titel}</h2>
                                    <p>{newss.info}</p>
                                </div>
                            </div>
                        
                    ))
                }
                </div>

            </section>
            <Footer/>
        </>
    );
}

export default Blog;
