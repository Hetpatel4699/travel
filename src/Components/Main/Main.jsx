import React, { useEffect } from "react";
import "./main.scss";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "kerala",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "35,000₹",
    description:
      "Kerala is famous for its unique geography, tranquil backwaters, unspoiled beaches, art forms and spices. It is also famous for its charming houseboats, sprawling tea plantations, unique eco-tourism, magnificent architecture, Ayurvedic treatments and unforgettable culinary experiences",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Manali",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "40,000₹",
    description:
      "A gift of the Himalayas to the world, Manali is a beautiful township nestled in the picturesque Beas River valley. It is a rustic enclave known for its cool climate and snow-capped mountains, offering respite to tourists escaping scorching heat of the plains.",
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Ooty",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "37,000₹",
    description:
      "Ooty is a gorgeous hill station in Tamil Nadu, and is considered a haven for nature lovers from all the country. Ensconced in the lap of nature, this town is surrounded on all sides by the towering Nilgiris, evergreen fir trees and of course, lakes small and large.",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Leh Ladakh",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "55,000₹",
    description:
      "Leh, the most accessible town of Ladakh, is an important trade centre located 160 miles (260 km) east of Srinagar. The climate of Ladakh is cold and dry. Average annual precipitation is roughly 3 inches (80 mm); fine, dry, flaked snow is frequent and sometimes falls heavily.",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Goa",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "30,000₹",
    description:
      "The multitude of beaches in Goa offer a range of activities such as beautiful walks along the palm fringed shores sprawled with unique shells and intriguing boat rides. There are range of beach huts where tourist can stay in and restaurants in which one can taste local and delicious sea food.",
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "Darjeeling",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "50,000₹",
    description:
      "Darjeeling is quite famous for mountains and the views of Kanchenjunga, third highest mountain of the world and tea gardens. Darjeeling tea is known all over the world. Also, Darjeeling Himalayan Railways (toy train) is an UNESCO World Heritage Site. Sunrise at Tiger Hill is also a major attraction.",
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "Mussoorie",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "25,000₹",
    description:
      "Mussoorie, the queen of hill stations, is famous for its scenic beauty, good social life and entertainment. The excellent climate makes it an attractive holiday resort. Thronged by holidayers, it vibrates with gaiety and merry making during the summer season.",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Kashmir",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "45,000₹",
    description:
      'Kashmir is the northernmost geographical region of the Indian subcontinent. Until the mid-19th century, the term "Kashmir" denoted only the Kashmir Valley between the Great Himalayas and the Pir Panjal Range.',
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Delhi",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "20,000₹",
    description:
      "Delhi is of great historical significance as an important commercial, transport, and cultural hub, as well as the political centre of India. According to legend, the city was named for Raja Dhilu, a king who reigned in the region in the 1st century bce.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">Most Visited Destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos='fade-up'  className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;

// import React from 'react';
// import './main.css';
// import img from '../../Assets/img.jpg';

// const Data = () => [
//   {
//     id: 1,
//     imgSrc: img,
//     destTitle: 'kerala',
//     location: 'India',
//     grade: 'CULTURAL RELAX',
//     fees: '35,000₹',
//     description: "Kerala, a state in Southern India, is known as a tropical paradise of waving palms and wide, sandy beaches. Kerala is also known as Gods own Country. It is a narrow strip of coastal territory that slopes down the Western Ghats in a cascade of lush, green vegetation and reaches the Arabian sea"
//   },

//   // {
//   //   id:2,
//   //   imgSrc: img2,
//   //   destTitle: 'kerala',
//   //   location: 'India',
//   //   grade: 'CULTURAL RELAX',
//   //   fees: '35,000₹',
//   //   description: 'Kerala is famous for its unique geography, tranquil backwaters, unspoiled beaches, art forms and spices. It is also famous for its charming houseboats, sprawling tea plantations, unique eco-tourism, magnificent architecture, Ayurvedic treatments and unforgettable culinary experiences'
//   // },

//   // {
//   //   id:3,
//   //   imgSrc: img,
//   //   destTitle: 'kerala',
//   //   location: 'India',
//   //   grade: 'CULTURAL RELAX',
//   //   fees: '35,000₹',
//   //   description: 'Kerala is famous for its unique geography, tranquil backwaters, unspoiled beaches, art forms and spices. It is also famous for its charming houseboats, sprawling tea plantations, unique eco-tourism, magnificent architecture, Ayurvedic treatments and unforgettable culinary experiences'
//   // },

//   // {
//   //   id:4,
//   //   imgSrc: img,
//   //   destTitle: 'kerala',
//   //   location: 'India',
//   //   grade: 'CULTURAL RELAX',
//   //   fees: '35,000₹',
//   //   description: 'Kerala is famous for its unique geography, tranquil backwaters, unspoiled beaches, art forms and spices. It is also famous for its charming houseboats, sprawling tea plantations, unique eco-tourism, magnificent architecture, Ayurvedic treatments and unforgettable culinary experiences'
//   // },

//   // {
//   //   id:5,
//   //   imgSrc: img,
//   //   destTitle: 'kerala',
//   //   location: 'India',
//   //   grade: 'CULTURAL RELAX',
//   //   fees: '35,000₹',
//   //   description: 'Kerala is famous for its unique geography, tranquil backwaters, unspoiled beaches, art forms and spices. It is also famous for its charming houseboats, sprawling tea plantations, unique eco-tourism, magnificent architecture, Ayurvedic treatments and unforgettable culinary experiences'
//   // },

//   // {
//   //   id:6,
//   //   imgSrc: img,
//   //   destTitle: 'kerala',
//   //   location: 'India',
//   //   grade: 'CULTURAL RELAX',
//   //   fees: '35,000₹',
//   //   description: 'Kerala is famous for its unique geography, tranquil backwaters, unspoiled beaches, art forms and spices. It is also famous for its charming houseboats, sprawling tea plantations, unique eco-tourism, magnificent architecture, Ayurvedic treatments and unforgettable culinary experiences'
//   // },

//   // {
//   //   id:7,
//   //   imgSrc: img,
//   //   destTitle: 'kerala',
//   //   location: 'India',
//   //   grade: 'CULTURAL RELAX',
//   //   fees: '35,000₹',
//   //   description: 'Kerala is famous for its unique geography, tranquil backwaters, unspoiled beaches, art forms and spices. It is also famous for its charming houseboats, sprawling tea plantations, unique eco-tourism, magnificent architecture, Ayurvedic treatments and unforgettable culinary experiences'
//   // },

//   // {
//   //   id:8,
//   //   imgSrc: img,
//   //   destTitle: 'kerala',
//   //   location: 'India',
//   //   grade: 'CULTURAL RELAX',
//   //   fees: '35,000₹',
//   //   description: 'Kerala is famous for its unique geography, tranquil backwaters, unspoiled beaches, art forms and spices. It is also famous for its charming houseboats, sprawling tea plantations, unique eco-tourism, magnificent architecture, Ayurvedic treatments and unforgettable culinary experiences'
//   // },

//   // {
//   //   id:9,
//   //   imgSrc: img,
//   //   destTitle: 'kerala',
//   //   location: 'India',
//   //   grade: 'CULTURAL RELAX',
//   //   fees: '35,000₹',
//   //   description: 'Kerala is famous for its unique geography, tranquil backwaters, unspoiled beaches, art forms and spices. It is also famous for its charming houseboats, sprawling tea plantations, unique eco-tourism, magnificent architecture, Ayurvedic treatments and unforgettable culinary experiences'
//   // },
// ]

// const Main = () => {
//   return (
//     <section className='main container section'>
//       <div className="secTitle">
//         <h3 className="title">
//           Most Visited Destinations
//         </h3>
//       </div>

//       <div className="secContent grid">

//         {
//           Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
//             return (
//               <div key={id}
//                 className="singleDestination">
//                 <div className="imageDiv">
//                   <img src={imgSrc} alt="" />
//                 </div>
//                 {/*other content*/}
//               </div>
//             )
//           })
//         }
//       </div>
//     </section>
//   )
// }

// export default Main
