
import Employeemanagement from '../assets/portfolio/employeemanagement.png';
import FinalYearproject from '../assets/portfolio/Final.png';
import ChattingApplication from '../assets/portfolio/socket.png';
import GroceryAndroidApp from '../assets/portfolio/kotlin.jpg';
import Portfolio from "../assets/portfolio/Dipanwita.png";
import Bookhub from "../assets/portfolio/bookhub.png";

// class Portfolio {
//   constructor(img, title, desc, demo, source) {
//     this.img = img;
//     this.title = title;
//     this.desc = desc;
//     this.demo = demo;
//     this.source = source;
//   }
// }

const portfolios =  [
  
  {
    img: Bookhub,
    title: 'BOOKHUB',
    desc: 'Developed a web application for buying and selling books, featuring user and admin roles. Users can add, view, and purchase books, while admins manage inventory and book statuses. Technologies used include HTML, CSS, Bootstrap, JSP, Java, Servlet, and MySQL.',
    // demo: '',
    source: 'https://github.com/dipanwita1405/BookInventorySystem.git',
  },
  {
    img: Portfolio,
    title: 'Portfolio',
    desc: 'Built a dynamic portfolio website using React, Bootstrap, Redux, and React Router. Implemented smooth navigation, efficient state management, and seamless component rendering. Integrated Formspree for secure contact form submissions and added responsive design with a dark/light mode toggle.',
   // demo: '',
    source: 'https://github.com/dipanwita1405/D.git',
  },

  {
    img: FinalYearproject,
    title: 'Modified Multimedia Steganography',
    desc: "Developed a steganography system using Java, AES encryption, and LSB algorithm to securely embed data in images, audio, and text files.  Enhanced security with message division, separate storage/transmission, and image overlaying. Technologies used: Java libraries (javax.crypto, java.awt.image), AES, LSB. ",
   // demo: '',
    source: 'https://github.com/dipanwita1405/finalyear_project',
  },
  {
    img: Employeemanagement,
    title: 'Employeemanagement ',
    desc: 'Developed an employee management system for HR operations. Implemented CRUD functionalities for efficient data management. Technologies: Java, Swing/AWT, MySQL .',
    // demo: '',
    source: 'https://github.com/dipanwita1405/Employee-Management-System',
  },
  {
    img: ChattingApplication,
    title: 'Chatting Application',
    desc: 'Chatting Application is a desktop based application.This client server chat application is based on java swing and used socket package.Technologies used:JAVA,Socket',
    // demo: '',
    source: 'https://github.com/dipanwita1405/Chatting-Application.git',
  },
  {
    img: GroceryAndroidApp,
    title: 'Grocery Android App',
    desc: 'Built a Kotlin-based grocery list app during a SmartBridge Android development internship, enabling users to add, update, delete items, and automatically calculate total prices based on quantity and unit price.',
   // demo: '',
    source: 'https://github.com/smartinternz02/SPSGP-85780-Virtual-Internship---Android-Application-Development-Using-Kotlin.git',
  },
  
];

export default portfolios;