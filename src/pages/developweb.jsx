import { coure } from '@/Info';
import React from 'react';


const Developweb = () => {
    return (
        <div>
            jvkhg
            {
                coure.map((coures)=>(
                    <div className="flex">
                        <div className=""></div>
                        <div className="">
                            <img src="https://dummyimage.com/300/300/fff" alt="" />
                        </div>

                    </div>
                ))
            }
        </div>
    );
}

export default Developweb;
