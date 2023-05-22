

import { program1 } from '@/Info';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Navbare from '@/components/Navbare';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function FullStackR() {




    return (
        <>
            <Navbare />

            <section className='text-center  border-2 mx-5 my-5 rounded-xl shadow-gray-100 shadow-xl'>

                <h2>Formation Developpeur web Fullstack - JavaScript</h2>
                <div className=''>
                    <div className='mx-[13vw] '>

                        <h5>Acquérir et approfondir des compétences en savoir-faire, savoir-être et savoir-technologiques</h5>
                        <p>Apprenez les langages fondamentaux du développement Wordpress, HTML, CSS, SQL, JavaScript, PHP, React/React Native,jQuery,Bootstrap,PWA,Git,Express</p>
                    </div>
                    <div className=' '>
                        <div className='flex justify-evenly lg:flex-row  md:flex-col '>
                            <div className=''>
                                <p className='border border-indigo-600 p-2 '>3 mois 400h</p>
                            </div>
                            <div className=''>
                                <p className='border border-indigo-600 p-2'>Formation ouverte a tout public, sans prérequis de diplome.</p>
                            </div>
                            <div className=''>
                                <p className='border border-indigo-600 p-2'>en telepresentiel Temps plein</p>
                            </div>
                        </div>

                    </div>
                </div>



                <div className="lg:w-[80vw] md:w-[vw] rounded-lg  mb-5 bg-slate-300 mx-auto">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item >
                                        <Nav.Link eventKey="first" >Module 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Module 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="3">Module 3</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <h1 className='text-lg text-center'>Développement Frontend – 40 jours</h1>
                                        <div className='flex  lg:justify-around lg:text-lg md:text-sm md:text-left md:justify-center'>
                                            <ul>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                            </ul>
                                            <ul>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                            </ul>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <h1 className='text-xl text-center'>Développement Backend – 12 jours</h1>
                                        <div className='flex  lg:justify-around lg:text-lg md:text-sm md:text-left md:justify-center'>
                                            <ul>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                            </ul>
                                            <ul>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                            </ul>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="3">
                                        <h1 className='text-xl text-center'>Gestion de Projet – 30 jours</h1>
                                        <div className='flex  lg:justify-around lg:text-lg md:text-sm md:text-left md:justify-center'>
                                            <ul>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                            </ul>
                                            <ul>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                                <li>Généralités, typographie et texte</li>
                                            </ul>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </section>
            <Contact />
            <Footer />
        </>
    );
}