

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

                <h2>Formation développeur web </h2>
                <div className=''>
                    <div className='mx-[13vw] '>

                        <h5>Maîtrisez les compétences fondamentales d'un.e Développeur.se Web en quelques semaines</h5>
                        <p>Vous apprendrez à travers 6 modules : soit à temps plein pendant 2 mois, soit à temps partiel pendant 6 mois (400 heures de formation).</p>
                    </div>

                </div>



                <div className="lg:w-[80vw] md:w-[vw] rounded-lg  mb-5 bg-orange-50 mx-auto">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column ">
                                    <Nav.Item >
                                        <Nav.Link eventKey="0" className="navlink">Prepwork</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item >
                                        <Nav.Link eventKey="1" className="navlink">Module 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="2" className="navlink">Module 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="3" className="navlink">Module 3</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content  className='h-[22vh]'>
                                    <Tab.Pane eventKey="0">

                                        <div className='flex  lg:justify-around lg:text-lg md:text-sm md:text-left md:justify-center'>
                                            <div className=''>
                                                <p>Prepwork : préparez-vous à la formation<span className='text-gray-500'>  40h</span></p>

                                                <ul style={{ listStyleType: 'circle' }}>
                                                    <li> Web 101, comment fonctionne le web</li>
                                                    <li> Les commandes basiques du terminal et de Git</li>
                                                    <li> Les fondamentaux de HTML, CSS et JavaScript</li>
                                                    <li> Les workflows tech et outils des startups</li>
                                                </ul>

                                            </div>
                                            <div>
                                                <p>Ce que l’on attend de vous :</p>
                                                <ul style={{ listStyleType: 'disc' }}>
                                                    <li> 40h de travail préparatoire en ligne</li>
                                                    <li> Validation des fondamentaux du web via un quiz en ligne</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="1">
                                        <div className='flex  lg:justify-around lg:text-lg md:text-sm md:text-left md:justify-center'>
                                            <div className='w-[30vw]'>
                                                <p>Fondamentaux : codez vos premiers programmes<span className='text-gray-500'> 56h</span></p>

                                                <ul style={{ listStyleType: 'circle' }}>
                                                    <li> Outils du développeur</li>
                                                    <li> Bases de la programmation (variables, boucles, fonctions, structures de données)</li>
                                                    <li> Lecture/écriture à partir de fichiers (CSV, JSON, etc.)</li>
                                                    <li> Extraction de données via web scraping ou APIs</li>
                                                </ul>

                                            </div>
                                            <div>
                                                <p>Ce que vous allez réaliser en pratique</p>
                                                <ul style={{ listStyleType: 'disc' }}>
                                                    <li> Des scripts qui détectent les emails et les numéros de téléphone valides</li>
                                                    <li> Collecter de la donnée via le web scraping</li>
                                                    <li> Apprivoiser votre ligne de commande</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2">
                                        <div className='flex  lg:justify-around lg:text-lg md:text-sm md:text-left md:justify-center'>
                                            <div className='w-[30vw]'>
                                                <p>Architecture logicielle : créez vos premières applications<span className='text-gray-500'> 48h</span></p>

                                                <ul style={{ listStyleType: 'circle' }}>
                                                    <li> Modèles de conception de logiciels (MVC)</li>
                                                    <li> Écriture d'un code robuste et facile à maintenir</li>
                                                    
                                                </ul>

                                            </div>
                                            <div>
                                                <p>Ce que vous allez réaliser en pratique</p>
                                                <ul style={{ listStyleType: 'disc' }}>
                                                    <li> Logiciel MVC de A à Z</li>
                                                    <li> Une application de livraison de repas dans votre terminal</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="3">
                                        <div className='flex  lg:justify-around lg:text-lg md:text-sm md:text-left md:justify-center'>
                                            <div className='w-[30vw]'>
                                                <p>Base de données et SQL : stocker et extraire des données<span className='text-gray-500'> 32h</span></p>

                                                <ul style={{ listStyleType: 'circle' }}>
                                                    <li> Bases de données relationnelles</li>
                                                    <li> SQL (CRUD, JOIN)</li>
                                                    
                                                    <li> Utiliser un ORM (Active Record)</li>
                                                </ul>

                                            </div>
                                            <div>
                                                <p>Ce que vous allez réaliser en pratique</p>
                                                <ul style={{ listStyleType: 'disc' }}>
                                                    <li>Une app de blogging simple avec une database</li>
                                                    <li>Des scripts pour extraire de la data depuis une base de données de musique</li>

                                                </ul>
                                            </div>
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