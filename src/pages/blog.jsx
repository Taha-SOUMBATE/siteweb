import Navbare from '@/components/Navbare';
import Image from 'next/image';
import React from 'react';
import image from '../pictures/campus-habous.jpeg'
import { hero, news } from '@/Info';
import Footer from '@/components/Footer';
const Blog = () => {
    return (
        <>
            <Navbare />
            <section className='section '>
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
                <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-4">
                    {
                        hero.map((heros, index) => (
                            


                                <div className="card  xl:w-[20vw] text-center " key={index}>
                                    <Image className="mx-auto rounded-full bg-black " src={heros.img} height={100} alt="Card image cap" />
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
            <section className='section'>
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
