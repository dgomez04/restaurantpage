
import './styles.css'

// Create the main container
const gridcontainer = document.createElement("div");
gridcontainer.classList.add("gridcontainer");

// Create the header section
const header = document.createElement("header");
const logo = document.createElement("img");
logo.id = "logo";
logo.src = "/home/dgomezm/repos/restaurantpage/src/LOGO.png";
logo.alt = "";
header.appendChild(logo);

const nav = document.createElement("nav");

// Create the "CONTACT" link
const contactLink = document.createElement("a");
contactLink.href = "#";
contactLink.textContent = "CONTACT";
const contactDiv = document.createElement("div");
contactDiv.classList.add("test");
contactDiv.appendChild(contactLink);
nav.appendChild(contactDiv);

// Create the "PRODUCTOS" link
const productosLink = document.createElement("a");
productosLink.href = "#";
productosLink.textContent = "PRODUCTOS";
const productosDiv = document.createElement("div");
productosDiv.classList.add("test");
productosDiv.appendChild(productosLink);
nav.appendChild(productosDiv);

header.appendChild(nav);

// Create the main container section
const maincontainer = document.createElement("div");
maincontainer.classList.add("maincontainer");

const maintext = document.createElement("div");
maintext.classList.add("maintext");
maintext.innerHTML = "Trayendo el sabor <br> <span class='gradient'>venezolano</span> <br> a tu cocina.";
maincontainer.appendChild(maintext);

const flexcontainer = document.createElement("div");
flexcontainer.classList.add("flexcontainer");

// Create the "CONTACTANOS" link
const contactanosLink = document.createElement("a");
contactanosLink.href = "#";
contactanosLink.textContent = "CONTACTANOS";
const contactanosDiv = document.createElement("div");
contactanosDiv.classList.add("test");
contactanosDiv.appendChild(contactanosLink);
flexcontainer.appendChild(contactanosDiv);

// Create the "VER MENU" link
const verMenuLink = document.createElement("a");
verMenuLink.href = "#";
verMenuLink.textContent = "VER MENU";
const verMenuDiv = document.createElement("div");
verMenuDiv.classList.add("test");
verMenuDiv.appendChild(verMenuLink);
flexcontainer.appendChild(verMenuDiv);

maincontainer.appendChild(flexcontainer);

gridcontainer.appendChild(header);
gridcontainer.appendChild(maincontainer);

// Append the entire gridcontainer to the document body or any other container element
document.body.appendChild(gridcontainer);
