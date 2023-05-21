import Link from "next/link";
import React from "react";
import { useState } from "react";

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
  { label: "Métiers", value: "1", titel: "Junior",url:"" },
  { label: "Option 2.2", value: "2", titel: "Confirmé",url:"" },
  { label: "Option 2.3", value: "3", titel: "Expert",url:"" },
];

const options3 = [
    { label: "Technologies", value: "1", titel: "Langages",url:"" },
    { label: "Option 2.2", value: "2", titel: "Frameworks et plateformes",url:"" },
    { label: "Option 2.3", value: "3", titel: "Librairies",url:"" },
    { label: "Option 2.3", value: "4", titel: "Outils",url:"" },
  ];

const options4 = [
    { label: "Entreprise", value: "1", titel: "Recruter un(e) alternant(e)",url:"" },
    { label: "Option 2.2", value: "2", titel: "Publier une offre d'emploi",url:"" },
    
  ];
  
 
  const options5 = [
    { label: "Notre Academy", value: "1", titel: "Nous rencontrer",url:"" },
    { label: "Option 2.2", value: "2", titel: "Nos engagements",url:"" },
    { label: "Option 2.3", value: "3", titel: "Financements",url:"" },
    { label: "Option 2.3", value: "4", titel: "OPCO et entreprises",url:"" },
    { label: "Option 2.3", value: "5", titel: "Reconnaissances professionnelles",url:"" },
    { label: "Option 2.3", value: "6", titel: "Espace presse",url:"" },
  ];
  

  const options6 = [
    { label: "Villes", value: "1", titel: "Villes & Campus",url:"" },
    { label: "Option 2.2", value: "2", titel: "",url:"" },
    { label: "Option 2.3", value: "3", titel: "",url:"" },
  ];
  




const Navbare = () => {
  return (
    <>
      <div class=" mx-auto xl:w-[80vw]">
        <nav class="border-gray-200">
          <div class="  flex flex-wrap items-center justify-around xl:justify-between sm:justify-between px-2 lg:justify-evenly">
            <Link  href={'/'} class="flex ">
              <svg
                class="h-10 mr-3"
                width="51"
                height="70"
                viewBox="0 0 51 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z"
                    fill="#76A9FA"
                  ></path>
                  <path
                    d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z"
                    fill="#A4CAFE"
                  ></path>
                  <path
                    d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z"
                    fill="#1C64F2"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="51" height="70" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <span class="self-center text-lg lg:text-xl font-semibold whitespace-nowrap">
                FlowBite
              </span>
            </Link>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              class="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="hidden md:block w-full  md:w-auto" id="mobile-menu">
              <ul class="flex-col md:flex-row lg:text-lg flex md:space-x-1 mt-4 md:mt-0 md:text-sm md:font-medium">
               
                <li>
                  <Dropdown options={options1} />{" "}
                </li>
                <li>
                  <Dropdown options={options2} />{" "}
                </li>
                <li>
                  <Dropdown options={options3} />{" "}
                </li>
                <li>
                  <Dropdown options={options4} />{" "}
                </li>
                <li>
                  <Dropdown options={options5} />{" "}
                </li>
                <li>
                  <Dropdown options={options6} />{" "}
                </li>
                
              </ul>
            </div>
          </div>
        </nav>

       
      </div>

      <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
    </>
  );
};

export default Navbare;
