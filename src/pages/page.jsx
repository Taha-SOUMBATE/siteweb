import { photo } from '@/Info';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Page = () => {

    return (
        <div className='w-[70vw] mx-auto font-bold'>

            <section>
                <div className="lg:flex justify-between lg:flex-row md:flex  md:flex-row text-xl">
                    <div className='w-[32vw] text-start '>
                        <h2>Accélérez votre carrière,formez-vous aux<br /></h2>
                        <h2>métiers de la Tech</h2>
                        <p className='text-base'>Accédez à de nouvelles opportunités grâce à nos formations immersives en développement web et en data.</p>
                        <button className='rounded-md bg-orange-400 p-1 text-white'>no formation</button>

                    </div>
                    <div id="carouselExampleRide" class="carousel slide w-[15vw]" data-bs-ride="true">
                        <div class="carousel-inner ">
                            {photo.map((photos, index) => (
                                <div key={photos.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img src={photos.pick} className="d-block " alt="" />
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
                <h2 className='text-center'>Partenaires recruteurs</h2>
                <div>
                    
                </div>
            </section>
        </div>
    );
}

export default Page;
