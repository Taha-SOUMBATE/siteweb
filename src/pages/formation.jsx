import { card } from '@/Info';
import Contact from '@/components/Contact';
import Navbare from '@/components/Navbare';
import Link from 'next/link';
import React from 'react';

const Formation = () => {
    return (
        <div>
            <Navbare />
            <section className='my-5 '>
                <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 px-5 grid-cols-2 gap-4">

                    {
                        card.map((cards) => (
                            <div class="card " key={cards.id}>
                                <img src={cards.img} class="card-img-top" alt="..." />
                                <div class="card-body lg:h-[37vh] xl:h-[29vh] md:h-[25vh] flex flex-col justify-between ">
                                    <h5 class="card-title text-lg">{cards.title}</h5>
                                    <p class="card-text text-sm">{cards.dsck}</p>
                                    {cards.lin ? (
                                        <Link href={cards.lin} class="bg-orange-300 p-1 text-center no-underline text-white rounded-lg dec">{cards.btne}</Link>
                                    ) : (
                                        <p>No link available</p>
                                    )}
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

export default Formation;
