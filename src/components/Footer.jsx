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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6'  className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link href={'/'} className='text-white'>
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link href={'/'} className='text-white'>
                    Link 2
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

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link href={'/'} className='text-white'>
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link href={'/'} className='text-white'>
                    Link 2
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

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link href={'/'} className='text-white'>
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link href={'/'} className='text-white'>
                    Link 2
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

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link href={'/'} className='text-white'>
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link href={'/'} className='text-white'>
                    Link 2
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
        <Link className='text-white' href={'https://mdbootstrap.com/'}>
          MDBootstrap.com
        </Link>
      </div>
    </MDBFooter>
  );
}