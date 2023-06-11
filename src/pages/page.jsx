import { card, dipliom, parcour, photo, slides } from '@/Info';
import React from 'react';
import pc from '../pictures/pc.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import dev from "./developweb"
import Contact from '@/components/Contact';
import Image from 'next/image';


const Page = () => {

    return (
        <div className='  overflow-x-hidden   font-bold'>

            <section className="my-5  section">
                <div className="justify-between flex items-center md:items-start px-2  md:px-0 md: lg:px-0 flex-row ">
                    <div className=" text-start w-[50vw] static md:w-[40vw] ">
                        <h2 className='text-xl'>Accélérez votre carrière, formez-vous aux<br /></h2>
                        <h2 className="bg-[#F73F03]  text-white  md:w-[34vw] lg:w-[25.1vw] xl:w-[21.1vw] sm:w-[36vw] p-1 rounded-lg">métiers de la Tech</h2>
                        <p className="text-base">Accédez à de nouvelles opportunités grâce à nos formations immersives en développement web et en data.</p>
                        <Link href={'#form'} className="rounded-md no-underline bg-[#F73F03] py-2 px-4 lg:top-[30vw] lg:left-[20vw] absolute text-white">rejoignez nous</Link>
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
            <section className='section'>
                <h2 className='titel'>On ne naît pas HERO, On le devient.</h2>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    <div className="">
                        <p className='text-9xl '>H</p>
                        <h3 className='text-5xl'>Hustle</h3>
                        <p className='hero'>
                            Sois la meilleure version de toi-même. <br />
                            Poursuis tes rêves. <br />
                            Laisse ton empreinte.</p>
                    </div>
                    <div className="">
                        <p className='text-9xl '>E</p>
                        <h3 className='text-5xl'>Evolve</h3>
                        <p className='hero'>
                            Essaies de nouvelles choses. <br />
                            Adopte le changement. <br />
                            Sois prêt.</p>
                    </div>
                    <div className="">
                        <p className='text-9xl '>R</p>
                        <h3 className='text-5xl'>Rise</h3>
                        <p className='hero'>
                            Surpasse la concurrence.<br />
                            Surpasse tes attentes. <br />
                            Surpasse l'ordinaire. <br />
                            Surpasse 'TOI'.<br />
                        </p>
                    </div>
                    <div className="">
                        <p className='text-9xl '>O</p>
                        <h3 className='text-5xl'>Obtain</h3>
                        <p className='hero'>
                            Saisis chaque opportunité.<br />
                            Prépare toi à relever les défis et à réaliser tes rêves les plus audacieux.
                        </p>
                    </div>
                </div>
            </section>
            <section className='my-5 section'>
                <h2 id='form' className='titel  '>Nos formation </h2>
                <p className='text-center'>Des programmes qui ont aidé des milliers d'étudiants à se lancer dans de nouvelles carrières dans l'industrie tech.</p>

                <div className="grid  lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-5">

                    <div class="card" >
                        <img src="https://dummyimage.com/100/300/fff" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Développeur Débutant</h5>
                            <p class="card-text">Acquérir les 5 langages et technologies pour devenir développeur web</p>
                            <Link href="./developweb" class="rounded-md no-underline bg-[#F73F03] py-2 px-1 text-white">Développeur Débutant</Link>
                        </div>
                    </div>
                    <div class="card" >
                        <img src="https://dummyimage.com/100/300/fff" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Développeur Confirmé</h5>
                            <p class="card-text">Vous spécialiser sur des technologies et des frameworks actuels</p>
                            <Link href="./developweb" class=" rounded-md no-underline bg-[#F73F03] py-2 px-1 text-white">Développeur Confirmé</Link>
                        </div>
                    </div>
                    <div class="card" >
                        <img src="https://dummyimage.com/100/300/fff" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Développeur Confirmé</h5>
                            <p class="card-text">Vous spécialiser sur des technologies et des frameworks actuels</p>
                            <Link href="./developweb" class="rounded-md no-underline bg-[#F73F03] py-2 px-1 text-white">Développeur Confirmé</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section '>
                <h2 className='titel md:w-[90vw] lg:w-[88vw] xl:w-[88vw] mx-auto  text-center my-5  p-1 rounded-lg'>Pourquoi notre méthodologie est efficace ?</h2>
                <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ">
                    {/* {
                        parcour.map((parcours) => (
                            <div className="  ">
                                <div class="card " key={parcours.id}>
                                    <div class="card-body md:h-[40vh] lg:h-[50vh] xl:h-[45vh] h-[30vh] flex flex-col  gap-10">
                                        <h5 class="card-title md:text-lg text-center font-bold xl:text-[21px] lg:text-[17px]">{parcours.nom}</h5>

                                        <p class="card-text w-[18vw] ">{parcours.time}</p>



                                    </div>
                                </div>
                            </div>
                        ))
                    } */}
                    <div className="  ">
                        <div class="card " >
                            <div className=" w-[5vw] mx-auto">
                                <Image src={pc} class="card-img-top text-[#F73F03]" alt="img" />
                            </div>
                            <div class="card-body cardes ">
                                <h5 class="card-title md:text-lg text-center font-bold xl:text-[18px] lg:text-[17px]">90% PRACTICE, 10% THEORY</h5>

                                <p class="card-text w-[28vw] ">Maîtrise le code.<br />
                                    Apprends en pratiquant.<br />
                                    Deviens un expert du code.</p>
                            </div>
                        </div>
                    </div>
                    <div className="  ">
                        <div class="card " >
                            <div className=" w-[5vw] mx-auto">
                                <Image src={pc} class="card-img-top " alt="img" />
                            </div>
                            <div class="card-body cardes">
                                <h5 class="card-title md:text-lg text-center  font-bold xl:text-[18px] lg:text-[17px]">A LEARNING JOURNEY WITH OVER 35 PROJECTS</h5>

                                <p class="card-text w-[29vw] ">Expérimente.<br />
                                    Recommence.<br />
                                    Apprends de tes échecs.<br />
                                    Recommence.<br />
                                    Atteins le succès.<br />
                                </p>



                            </div>
                        </div>
                    </div>
                    <div className="  ">
                        <div class="card " >
                            <div className=" w-[5vw] mx-auto">
                                <Image src={pc} class="card-img-top " alt="img" />
                            </div>
                            <div class="card-body cardes">
                                <h5 class="card-title md:text-lg text-center font-bold xl:text-[18px] lg:text-[17px]">INSTRUCTOR-LED = NO TIME TO WASTE</h5>

                                <p class="card-text w-[30vw] ">Maximise ton potentiel.<br /> Minimise ton temps perdu.</p>



                            </div>
                        </div>
                    </div>
                    <div className="  ">
                        <div class="card " >
                            <div className=" w-[5vw] mx-auto">
                                <Image src={pc} class="card-img-top " alt="img" />
                            </div>
                            <div class="card-body cardes">
                                <h5 class="card-title md:text-lg text-center font-bold xl:text-[18px] lg:text-[17px]">INDIVIDUAL CAREER COACHING </h5>

                                <p class="card-text w-[25vw] ">Dévoile ton talent grâce à un accompagnement professionnel personnalisé.</p>



                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-5 section'>
                <h2 className='  titel md:w-[90vw]  lg:w-[88vw] lg:text-[16px] xl:w-[85vw]  font-bold mx-auto  text-center my-5   px-1 py-2 rounded-lg'>Des formations diplômantes faites par des experts plus que passionnés
                    pour vous mener au succès professionnel.</h2>
                <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-2">

                    {
                        dipliom.map((diplioms) => (

                            <div className=" ">
                                <div class="card  " key={diplioms.id}>
                                    <div className=" xl:w-[4vw] lg:w-[5vw] md:w-[7vw] mt-2 mx-auto">
                                        <Image src={diplioms.img} class="card-img-top h-[6vh]" alt="..." />
                                    </div>
                                    <div class="card-body h-[20vh] xl:h-[15vw]  text-center flex  flex-col justify-between lg:h-[20vh] md:h-[20vh]">
                                        <h4 class="card-title text-xl xl:text-[25px]  lg:text-[20px] md:text-[18px]  font-bold">{diplioms.titel}</h4>
                                        <p class="card-text">{diplioms.text}</p>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </section>
            <section className=''>
                <p className="titel xl:w-[81vw] lg:w-[88vw] md:w-[78vw] my-5 w-[87vw]">Partenaires recruteurs<br />Rejoignez les meilleures entreprises tech</p>
                <p className=' titel md:w-[80vw] lg:w-[88vw] xl:w-[81vw] mx-auto  text-center   sm:px-2 lg:px-1 rounded-lg'>Dès la fin de la formation, notre équipe Carrières vous accompagnera dans votre recherche d'emploi pour trouver le job de vos rêves.</p>


                <div id="carouselExampleAutoplaying" className="carousel slide flex     " data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {slides.map((slide, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className="flex flex-wrap justify-center">
                                    {slide.map((imgSrc, imgIndex) => (
                                        <div key={imgIndex} className=" lg:w-[17vw] xl:w-[24vw]  md:mx-3 md:w-[24vw]   my-3 w-[20vw]">
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
            </section>

            <Contact />

        </div>
    );
}

export default Page;
