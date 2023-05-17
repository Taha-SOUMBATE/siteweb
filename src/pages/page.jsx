import { card, dipliom, parcour, photo } from '@/Info';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Page = () => {

    return (
        <div className='w-[70vw] h-[500vh] mx-auto font-bold'>

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
                <div className='flex justify-between'>
                    <img src="https://dummyimage.com/150x100/000/fff" alt="" />
                    <img src="https://dummyimage.com/150x100/000/fff" alt="" />
                    <img src="https://dummyimage.com/150x100/000/fff" alt="" />
                    <img src="https://dummyimage.com/150x100/000/fff" alt="" />
                    <img src="https://dummyimage.com/150x100/000/fff" alt="" />
                    <img src="https://dummyimage.com/150x100/000/fff" alt="" />
                    <img src="https://dummyimage.com/150x100/000/fff" alt="" />
                    <img src="https://dummyimage.com/150x100/000/fff" alt="" />

                </div>
            </section>
            <section>
                <h2>Nos bootcamps immersifs en Web </h2>
                <p>Des programmes qui ont aidé des milliers d'étudiants à se lancer dans de nouvelles carrières dans l'industrie tech.</p>

                <div className="row">

                    {
                        card.map((cards) => (

                            <div className="col-3 mb-3">
                                <div class="card " key={cards.id}>
                                    <img src={cards.img} class="card-img-top" alt="..." />
                                    <div class="card-body h-52">
                                        <h5 class="card-title">{cards.title}</h5>
                                        <p class="card-text">{cards.dsck}</p>
                                        <a href="#" class="btn btn-primary">{cards.btne}</a>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>


            </section>
            <section>
                <h2>Démarrer votre parcours</h2>
                <div className="row ">
                    {
                        parcour.map((parcours) => (
                            <div className="col-4  mb-3">
                                <div class="card" key={parcours.id}>
                                    <div class="card-body ">
                                        <h5 class="card-title text-center ">{parcours.nom}</h5>
                                        <p class="card-text">Durée {parcours.time}</p>
                                        <div className=" flex justify-around">
                                            <a href="#" class="btn btn-primary ">form</a>
                                            <a href="#" class="btn btn-primary ">contact</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section>
                <h2 className='text-2xl'>Des formations diplômantes faites par des experts plus que passionnés
                    pour vous mener au succès professionnel.</h2>
                    <div className="row">

{
    dipliom.map((diplioms) => (

        <div className="col-4 mb-3">
            <div class="card " key={diplioms.id}>
                <img src={diplioms.img} class="card-img-top" alt="..." />
                <div class="card-body h-28 ">
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
