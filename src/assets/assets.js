import gallerimg2 from './gallerimg2.png';
import gallerimg3 from './gallerimg3.png';
import gallerimg1 from './gallerimg1.png';
import gallerimg4 from './gallerimg4.png';
import gallerimg5 from './gallerimg5.png';
import roomimg from "../assets/roomimg.png";
import sketch from "../assets/sketch.jpg";
import room from "../assets/room.png"


export const stats = [
  {
    title: "Quality",
    value: "95%",
    description: "Client satisfaction rate",
  },
  {
    title: "Concept",
    value: "48h",
    description: "Initial design proposal",
  },
  {
    title: "Detail",
    value: "∞",
    description: "Attention to every element",
  },
  {
    title: "Style",
    value: "100%",
    description: "Custom interior solutions",
  },
];

export const reviews = [
  {
    id: 1,
    quote: "Velora transformed our apartment into a space that feels both elegant and deeply personal.",
    name: "Elena Moretti",
    location: "Milan, Italy"
  },
  {
    id: 2,
    quote: "Working with them was a seamless experience. They understood our vision and executed it flawlessly.",
    name: "Marcus Chen",
    location: "London, UK"
  },
  {
    id: 3,
    quote: "The attention to detail and creative approach made our new house truly feel like home.",
    name: "Sarah Jenkins",
    location: "New York, USA"
  },
  {
    id: 4,
    quote: "A perfect balance of aesthetics and functionality. We couldn't be happier with the outcome.",
    name: "David Silva",
    location: "Lisbon, Portugal"
  },
  {
    id: 5,
    quote: "Their team brought a fresh perspective to our space. Every room now has a unique story to tell.",
    name: "Aisha Patel",
    location: "Toronto, Canada"
  },
  {
    id: 6,
    quote: "Professionalism at its best. They delivered on time and exceeded all our expectations.",
    name: "Julian Brooks",
    location: "Sydney, Australia"
  },
  {
    id: 7,
    quote: "We love the sustainable materials and modern touches they incorporated into the design.",
    name: "Sophie Laurent",
    location: "Paris, France"
  },
  {
    id: 8,
    quote: "Exceptional service from start to finish. Our office space is now a place where creativity thrives.",
    name: "Kenji Sato",
    location: "Tokyo, Japan"
  }
];


export const portfolioProjects = [
  {
    id: 1,
    title: "CASA VELLUTO",
    location: "Milan, Italy",
    area: "120 m²",
    type: "Residential",
    description: "A refined Milan apartment focused on texture and warm minimalism.",
    image: roomimg
  },
  {
    id: 2,
    title: "VILLA SERENA",
    location: "Lake Como, Italy",
    area: "350 m²",
    type: "Residential",
    description: "A serene lakeside retreat blending natural stone with modern elegance.",
    image: gallerimg2
  },
  {
    id: 3,
    title: "STUDIO LUMIERE",
    location: "Paris, France",
    area: "85 m²",
    type: "Commercial",
    description: "A chic creative studio designed for maximum natural light and flow.",
    image: gallerimg3
  },
  {
    id: 4,
    title: "THE HEIGHTS",
    location: "New York, USA",
    area: "210 m²",
    type: "Residential",
    description: "An urban penthouse featuring bold architectural lines and luxury finishes.",
    image: gallerimg1
  },
  {
    id: 5,
    title: "OAK & IRON",
    location: "London, UK",
    area: "180 m²",
    type: "Commercial",
    description: "A boutique restaurant combining industrial elements with warm oak.",
    image: gallerimg4
  },
  {
    id: 6,
    title: "CASA BIANCA",
    location: "Ibiza, Spain",
    area: "420 m²",
    type: "Residential",
    description: "A minimalist Mediterranean villa with sweeping ocean views.",
    image: gallerimg5
  }
];




export const cards = [
  {
    id: "01",
    title: "Task",
    image: sketch,
    text: "The goal of the project was to design a modern, high-end landing page that communicates elegance, clarity, and professionalism.",
  },
  {
    id: "02",
    title: "Solution",
    image: room,
    text: "The solution was to develop a clean and structured layout where each section acts as a visual composition.",
  },
];