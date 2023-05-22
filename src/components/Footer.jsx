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

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='' href={'/'} role='button'>

            <Link href={'https://icons.getbootstrap.com/icons/facebook/'}><MDBIcon fab icon='bi bi-facebook' /></Link>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href={'/'} role='button'>
          <Link href={'https://icons.getbootstrap.com/icons/facebook/'}><MDBIcon fab icon='bi bi-instagram' /></Link>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href={'/'} role='button'>
          <Link href={'https://icons.getbootstrap.com/icons/facebook/'}><MDBIcon fab icon='bi bi-linkedin' /></Link>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href={'/'} role='button'>
          <Link href={'https://icons.getbootstrap.com/icons/facebook/'}><MDBIcon fab icon='bi bi-github' /></Link>
          </MDBBtn>

        </section>

        

        <section className='mb-4'>
          
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='12' md='6'  className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0 flex justify-center gap-5'>
                <li>
                  <Link href={'/'} className='no-underline text-white'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={'/formation'} className='no-underline text-white'>
                  Formation
                  </Link>
                </li>
                <li>
                  <Link href={'/'} className='text-white'>
                    Link 3
                  </Link>
                </li>
                <li>
                  <Link href={'/'} className='text-white'>
                    Link 4
                  </Link>
                </li>
              </ul>
            </MDBCol>

            
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <Link className='text-white' href={'/'}>
          3w academy
        </Link>
      </div>
    </MDBFooter>
  );
}