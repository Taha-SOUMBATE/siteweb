import Link from "next/link";
import React from "react";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useRouter } from "next/router";

import pich from "../pictures/cropped-big.png.webp"




const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
      >
        {selectedOption.label}{" "}
        <svg
          className="w-4  h-4 ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute z-10  lg:w-40  rounded-lg  shadow my-1 ">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 bg-white max-[492px]:w-[100vw] md:w-[27vw]  hover:bg-gray-100  cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              <Link href={'/'} className="text-gray-700  hover:bg-gray-50 border-b  border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
                {option.titel}{" "}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const options1 = [
  { label: "Formations", value: "1", titel: "Développeur Débutant" },
  { label: "Option 1.2", value: "2", titel: "Développeur Confirmé" },
  { label: "Option 1.3", value: "3", titel: "Développeur Expert" },
  { label: "Option 1.3", value: "4", titel: "Formations conventionnées" },
];

const options2 = [
  { label: "Métiers", value: "1", titel: "Junior", url: "" },
  { label: "Option 2.2", value: "2", titel: "Confirmé", url: "" },
  { label: "Option 2.3", value: "3", titel: "Expert", url: "" },
];

const options3 = [
  { label: "Technologies", value: "1", titel: "Langages", url: "" },
  { label: "Option 2.2", value: "2", titel: "Frameworks et plateformes", url: "" },
  { label: "Option 2.3", value: "3", titel: "Librairies", url: "" },
  { label: "Option 2.3", value: "4", titel: "Outils", url: "" },
];

const options4 = [
  { label: "Entreprise", value: "1", titel: "Recruter un(e) alternant(e)", url: "" },
  { label: "Option 2.2", value: "2", titel: "Publier une offre d'emploi", url: "" },

];


const options5 = [
  { label: "Notre Academy", value: "1", titel: "Nous rencontrer", url: "" },
  { label: "Option 2.2", value: "2", titel: "Nos engagements", url: "" },
  { label: "Option 2.3", value: "3", titel: "Financements", url: "" },
  { label: "Option 2.3", value: "4", titel: "OPCO et entreprises", url: "" },
  { label: "Option 2.3", value: "5", titel: "Reconnaissances professionnelles", url: "" },
  { label: "Option 2.3", value: "6", titel: "Espace presse", url: "" },
];


const options6 = [
  { label: "Villes", value: "1", titel: "Villes & Campus", url: "" },
  { label: "Option 2.2", value: "2", titel: "", url: "" },
  { label: "Option 2.3", value: "3", titel: "", url: "" },
];





const Navbare = () => {
  const router = useRouter();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">3w ademy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 md:gap-1 lg:gap-5 pe-3">
            <Link className={`no-underline py-1 px-2 ${router.pathname === '/' ? 'bg-orange-500 rounded-xl py-1 px-2 text-white' : ''}`} href="/">Home</Link>
            <Link className={`no-underline py-1 px-2 ${router.pathname === '/formation' ? 'bg-orange-500 rounded-xl py-1 px-2 text-white' : ''}`} href="/formation">Formation</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};

export default Navbare;
