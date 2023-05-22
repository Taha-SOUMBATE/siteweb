import { card, dipliom, parcour, photo, slides } from '@/Info';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import dev from "./developweb"
import Contact from '@/components/Contact';


const Page = () => {

    return (
        <div className='md:w-[95vw] md:ps-[5vw] lg:w-[95vw] lg:ps-[7vw] w-full xl:w-[96vw] overflow-x-hidden xl:ps-[11vw]  font-bold'>

            <section className="my-5 section1">
                <div className="justify-between flex items-center md:items-start px-2 md:px-0 md: lg:px-0 flex-row ">
                    <div className=" text-start w-[50vw] md:w-[40vw] ">
                        <h2 className='text-xl'>Accélérez votre carrière, formez-vous aux<br /></h2>
                        <h2 className="text-orange-400 hover:text-orange-100 bg-orange-100 hover:bg-orange-400 md:w-[34vw] lg:w-[25.1vw] xl:w-[21.1vw] sm:w-[36vw] p-1 rounded-lg">métiers de la Tech</h2>
                        <p className="text-base">Accédez à de nouvelles opportunités grâce à nos formations immersives en développement web et en data.</p>
                        <Link href={'#form'} className="rounded-md no-underline bg-orange-400 p-1 text-white">no formation</Link>
                    </div>
                    <div id="carouselExampleRide" class="carousel slide w-[30vw]" data-bs-ride="true">
                        <div class="carousel-inner">
                            {photo.map((photos, index) => (
                                <div key={photos.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img src={photos.pick} className="d-block w-100" alt="" />
                                </div>
                            ))}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </section>


            <section>
                <h2 className="text-center text-orange-400 hover:text-orange-100 bg-orange-100 hover:bg-orange-400 lg:w-[52.3vw] md:w-[78vw] w-[87vw] mx-auto  p-1 rounded-lg">Partenaires recruteurs</h2>
                <div id="carouselExampleAutoplaying" className="carousel slide flex xl:w-[90vw]  lg:w-[78vw] mx-auto" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {slides.map((slide, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className="flex flex-wrap justify-center">
                                    {slide.map((imgSrc, imgIndex) => (
                                        <div key={imgIndex} className=" lg:w-[17vw] xl:w-[20vw]  md:mx-7 md:w-[21vw] mx-7  my-3 w-[20vw]">
                                            <img src={imgSrc} className="mx-auto w-full" alt="..." />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-black" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <h2 className='text-2xl text-orange-400 hover:text-orange-100 bg-orange-100 hover:bg-orange-400 md:w-[80vw] lg:w-[50vw] sm:w-[70vw] mx-auto  text-center   p-1 rounded-lg'>Rejoignez les meilleures entreprises tech</h2>
                <p className='text-lg md:w-[80vw] lg:w-[55vw] xl:w-[80vw] mx-auto  text-center   sm:px-2 lg:px-1 rounded-lg'>Dès la fin de la formation, notre équipe Carrières vous accompagnera dans votre recherche d'emploi pour trouver le job de vos rêves.</p>
            </section>

            <section className='my-5'>
                <h2 id='form' className='text-2xl text-orange-400 hover:text-orange-100 bg-orange-100 hover:bg-orange-400 md:w-[80vw] lg:w-[80vw] xl:w-[85vw] mx-auto  text-center   p-1 rounded-lg'>Nos formation </h2>
                <p>Des programmes qui ont aidé des milliers d'étudiants à se lancer dans de nouvelles carrières dans l'industrie tech.</p>

                <div className="grid  lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4">

                    <div class="card" >
                        <img src="https://dummyimage.com/100/300/fff" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Développeur Débutant</h5>
                            <p class="card-text">Acquérir les 5 langages et technologies pour devenir développeur web</p>
                            <a href="./developweb" class="btn btn-primary">Développeur Débutant</a>
                        </div>
                    </div>
                    <div class="card" >
                        <img src="https://dummyimage.com/100/300/fff" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Développeur Confirmé</h5>
                            <p class="card-text">Vous spécialiser sur des technologies et des frameworks actuels</p>
                            <a href="./developweb" class="btn btn-primary">Développeur Confirmé</a>
                        </div>
                    </div>
                    <div class="card" >
                        <img src="https://dummyimage.com/100/300/fff" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Développeur Confirmé</h5>
                            <p class="card-text">Vous spécialiser sur des technologies et des frameworks actuels</p>
                            <a href="./developweb" class="btn btn-primary">Développeur Confirmé</a>
                        </div>
                    </div>


                </div>

                <Link href={'./formation'} class="bg-orange-300 p-1 block mx-auto xl:w-[8vw] lg:w-[9vw] md:w-[13vw] w-[14vw]   my-4 text-center no-underline text-white rounded-lg dec">seee more</Link>


            </section>
            <section className='my- '>
                <h2 className='text-2xl text-orange-400 hover:text-orange-100 bg-orange-100 hover:bg-orange-400 md:w-[90vw] lg:w-[88vw] xl:w-[85vw] mx-auto  text-center   p-1 rounded-lg'>Pourquoi notre méthodologie est efficace ?</h2>
                <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                    {
                        parcour.map((parcours) => (
                            <div className="  mb-3">
                                <div class="card " key={parcours.id}>
                                    <div class="card-body md:h-[40vh] lg:h-[40vh] xl:h-[32vh] h-[30vh] flex flex-col gap-10">
                                        <h5 class="card-title md:text-lg font-bold xl:text-[21px] lg:text-[17px]">{parcours.nom}</h5>
                                        <p class="card-text">Durée {parcours.time}</p>


                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className='my-5'>
                <h2 className='  text-base mb-3  text-orange-400 hover:text-orange-100 bg-orange-100 hover:bg-orange-400 md:w-[90vw] md:text-[12.8px] lg:w-[88vw] lg:text-[16px] xl:w-[85vw] xl:text-[20px] font-bold mx-auto  text-center   px-1 py-2 rounded-lg'>Des formations diplômantes faites par des experts plus que passionnés
                    pour vous mener au succès professionnel.</h2>
                <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4">

                    {
                        dipliom.map((diplioms) => (

                            <div className=" ">
                                <div class="card  " key={diplioms.id}>
                                    <img src={diplioms.img} class="card-img-top h-[20vh]" alt="..." />
                                    <div class="card-body h-[20vh] xl:h-[13vw] text-center flex  flex-col justify-between lg:h-[25vh] md:h-[16vh]">
                                        <h4 class="card-title text-xl xl:text-[25px]  lg:text-[20px]  font-bold">{diplioms.titel}</h4>
                                        <p class="card-text">{diplioms.text}</p>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </section>

           <Contact/>

        </div>
    );
}

export default Page;
