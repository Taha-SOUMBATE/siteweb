import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../pictures/wa.png'

export default function Footer() {
  return (
    // <MDBFooter className='text-center' color='white' bgColor='dark'>
    //   <MDBContainer className='p-4'>
    //     <section className='mb-4'>
    //       <MDBBtn outline color="light" floating className='' href={'/'} role='button'>

    //         <Link href={'https://icons.getbootstrap.com/icons/facebook/'}><MDBIcon fab icon='bi bi-facebook' /></Link>
    //       </MDBBtn>

    //       <MDBBtn outline color="light" floating className='m-1' href={'/'} role='button'>
    //       <Link href={'https://icons.getbootstrap.com/icons/facebook/'}><MDBIcon fab icon='bi bi-instagram' /></Link>
    //       </MDBBtn>

    //       <MDBBtn outline color="light" floating className='m-1' href={'/'} role='button'>
    //       <Link href={'https://icons.getbootstrap.com/icons/facebook/'}><MDBIcon fab icon='bi bi-linkedin' /></Link>
    //       </MDBBtn>

    //       <MDBBtn outline color="light" floating className='m-1' href={'/'} role='button'>
    //       <Link href={'https://icons.getbootstrap.com/icons/facebook/'}><MDBIcon fab icon='bi bi-github' /></Link>
    //       </MDBBtn>

    //     </section>



    //     <section className='mb-4'>

    //     </section>

    //     <section className=''>
    //       <MDBRow>
    //         <MDBCol lg='12' md='12'  className='mb-4 mb-md-0'>
    //           <h5 className='text-uppercase'>Links</h5>

    //           <ul className='list-unstyled mb-0 flex justify-center gap-5'>
    //             <li>
    //               <Link href={'/'} className='no-underline text-white'>
    //                 Home
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href={'/formation'} className='no-underline text-white'>
    //               Formation
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href={'/'} className='text-white'>
    //                 Link 3
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href={'/'} className='text-white'>
    //                 Link 4
    //               </Link>
    //             </li>
    //           </ul>
    //         </MDBCol>


    //       </MDBRow>
    //     </section>
    //   </MDBContainer>

    //   <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    //     © 2020 Copyright:
    //     <Link className='text-white' href={'/'}>
    //       3w academy
    //     </Link>
    //   </div>
    // </MDBFooter>
    <>
      <div className="grid xl:grid-cols-4  mx-6 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
        <div className="">
          <Image src={logo} height={40} />
          <p>
            Préparez-vous à transformer votre avenir avec 3W Academy Maroc.
            Rejoignez notre communauté d'apprenants ambitieux dès aujourd'hui et laissez-nous vous guider vers le succès.
            N'attendez plus pour commencer votre voyage.
          </p>
          <span className='flex gap-2'>
            <Link href={"#"}><i class="bi bi-facebook text-[#F73F03] text-[30px]"></i></Link>
            <Link href={"#"}><i class="bi bi-instagram text-[#F73F03] text-[30px]"></i></Link>
            <Link href={"#"}><i class="bi bi-twitter text-[#F73F03] text-[30px]"></i></Link>
            <Link href={"#"}><i class="bi bi-linkedin text-[#F73F03] text-[30px]"></i></Link>
          </span>
        </div>
        <div className=' mx-auto '>
          <h2>Liens</h2>
          <span className='flex flex-col '>
            <Link href={'#'} className='no-underline text-lg text-gray-500'>Home</Link>
            <Link href={'#'} className='no-underline text-lg text-gray-500'>Formation</Link>
            <Link href={'#'} className='no-underline text-lg text-gray-500'>Blog</Link>
          </span>
        </div>
        <div className=' lg:place-self-stretch place-self-center'> 
          <h2>Contactez-Nous</h2>
          <i class="bi bi-envelope-fill"></i>
          <Link href={'mailto:hello@3wa.io'}  className='text-black ms-2  no-underline'>Email: hello@3wa.io</Link>
          <div className='box'></div>
          <i class="bi bi-telephone-fill"></i>
          <Link className='text-black ms-2  no-underline' href={"tel:+212 707-143777"}>Phone: +212 707-143777</Link>
        </div>
        <div className=''>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13293.397558589171!2d-7.612677000000001!3d33.596238!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3731f922c01%3A0x5e46c1e1fc83142d!2s3W%20Academy%20Maroc!5e0!3m2!1sen!2sus!4v1686501093460!5m2!1sen!2sus"  
        className='rounded-xl drop-shadow-xl shadow-orange-200 h-[35vh] w-[100%]   '   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <h2 className='titel'>© 3W Academy Maroc 2023</h2>

    </>
  );
}