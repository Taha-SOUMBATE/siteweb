import { card, dipliom, parcour, photo, slides } from '@/Info';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';



const Page = () => {

    return (
        <div className='md:w-[80vw] lg:w-[90vw] lg:ps-[12vw] w-full  mx-auto font-bold'>

            <section className="my-5 section1">
                <div className="justify-between flex items-center md:items-start px-2 md:px-0 md: lg:px-0 flex-row ">
                    <div className=" text-start w-[50vw] md:w-[40vw] ">
                        <h2 className='text-base'>Accélérez votre carrière, formez-vous aux<br /></h2>
                        <h2 className="text-orange-400 hover:text-orange-100 bg-orange-100 hover:bg-orange-400 md:w-[34vw] lg:w-[18vw]   p-1 rounded-lg">métiers de la Tech</h2>
                        <p className="text-base">Accédez à de nouvelles opportunités grâce à nos formations immersives en développement web et en data.</p>
                        <a className="rounded-md no-underline bg-orange-400 p-1 text-white">no formation</a>
                    </div>
                    <div id="carouselExampleRide" className="carousel slide w-[40vw]  md:w-[25vw] " data-bs-ride="true">
                        <div className="carousel-inner">
                            {photo.map((photos, index) => (
                                <div key={photos.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img src={photos.pick} className="d-block" alt="" />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>


            <section>
                <h2 className="text-center text-orange-400 hover:text-orange-100 bg-orange-100 hover:bg-orange-400 lg:w-[52.3vw] md:w-[62.3vw] w-[87vw] mx-auto  p-1 rounded-lg">Partenaires recruteurs</h2>
                <div id="carouselExampleAutoplaying" className="carousel slide flex  lg:w-[73vw]" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {slides.map((slide, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className="flex flex-wrap justify-center">
                                    {slide.map((imgSrc, imgIndex) => (
                                        <div key={imgIndex} className=" lg:w-[10vw]  md:mx-8 md:w-[15vw] mx-7  my-3 w-[20vw]">
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
                <h2 className='text-2xl text-orange-400 hover:text-orange-100 bg-orange-100 hover:bg-orange-400 md:w-[80vw] lg:w-[50vw] mx-auto  text-center   p-1 rounded-lg'>Rejoignez les meilleures entreprises tech</h2>
                <p className='text-lg md:w-[80vw] lg:w-[55vw] mx-auto  text-center   p-1 rounded-lg'>Dès la fin de la formation, notre équipe Carrières vous accompagnera dans votre recherche d'emploi pour trouver le job de vos rêves.</p>
            </section>

            <section className=''>
                <h2 className='text-2xl text-orange-400 hover:text-orange-100 bg-orange-100 hover:bg-orange-400 md:w-[80vw] lg:w-[80vw] mx-auto  text-center   p-1 rounded-lg'>Nos bootcamps immersifs en Web </h2>
                <p>Des programmes qui ont aidé des milliers d'étudiants à se lancer dans de nouvelles carrières dans l'industrie tech.</p>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4">

                    {
                        card.map((cards) => (
                            <div class="card " key={cards.id}>
                                <img src={cards.img} class="card-img-top" alt="..." />
                                <div class="card-body lg:h-[20vh] md:h-[25vh] flex flex-col justify-between ">
                                    <h5 class="card-title text-lg">{cards.title}</h5>
                                    <p class="card-text text-sm">{cards.dsck}</p>
                                    <a href="#" class="btn btn-primary">{cards.btne}</a>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </section>
            <section className=''>
                <h2 className='text-2xl text-orange-400 hover:text-orange-100 bg-orange-100 hover:bg-orange-400 md:w-[80vw] lg:w-[78vw] mx-auto  text-center   p-1 rounded-lg'>Pourquoi notre méthodologie est efficace ?</h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ">
                    {
                        parcour.map((parcours) => (
                            <div className="  mb-3">
                                <div class="card " key={parcours.id}>
                                    <div class="card-body md:h-[33vh] lg:h-[28vh] h-[20vh] flex flex-col justify-between">
                                        <h5 class="card-title md:text-lg lg:text-lg">{parcours.nom}</h5>
                                        <p class="card-text">Durée {parcours.time}</p>


                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className=''>
                <h2 className='lg:text-2xl md:text-lg text-base  text-orange-400 hover:text-orange-100 bg-orange-100 hover:bg-orange-400 md:w-[80vw] lg:w-[78vw] mx-auto  text-center   p-1 rounded-lg'>Des formations diplômantes faites par des experts plus que passionnés
                    pour vous mener au succès professionnel.</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4">

                    {
                        dipliom.map((diplioms) => (

                            <div className=" mb-3">
                                <div class="card " key={diplioms.id}>
                                    <img src={diplioms.img} class="card-img-top h-[20vh]" alt="..." />
                                    <div class="card-body  lg:h-[15vh] md:h-[16vh]">
                                        <h4 class="card-title text-xl font-bold">{diplioms.titel}</h4>
                                        <p class="card-text">{diplioms.text}</p>
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

export default Page;
