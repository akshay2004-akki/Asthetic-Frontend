import React from "react";
import similing from "../images/HomeScreen-MainImageCropped.jpg";
import award from "../images/Trustedbyawards24-300x85.png";
import multiDevice from '../images/Homepage_Multidevice2.jpg';
// import concent from '../images/Consent-Forms.png'
import before from '../images/BeforeAfterphots.png'
import online from '../images/Online-Booking-2.png'
import reminder from '../images/SMS-and-Email.png'
import record from '../images/Patient-Records-300x300.png'

import { useTypewriter, Cursor } from "react-simple-typewriter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
`;

const Slide = styled.div`
  padding: 20px;
  display : flex;
  gap : 100px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
`;

const Icon = styled.div`
  margin-bottom: 20px;
`;

const FindOutMore = styled.div`
  margin-top: 20px;
  button {
    background-color: #0033A0;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  button:hover {
    background-color: #002080;
  }
`;

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const slidesData = [
    {
      title: "Automated Reminders",
      description: "Say goodbye to no shows and late cancellations.",
      icon: reminder , // Replace with actual icon paths or components
    },
    {
      title: "Before & Afters",
      description: "Keep your patient photos safe and secure.",
      icon: before,
    },
    {
      title: "Patient Records",
      description: "Everything about your patients, in one place.",
      icon: record,
    },
    {
      title: "Online Booking",
      description: "Take bookings 24/7 and collect deposits.",
      icon: online,
    },
  ];

  return (
    <SliderContainer>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <Slide key={index}>
            <Icon style={{display:"flex", justifyContent:"center"}}>
              <img src={slide.icon} alt={slide.title} style={{height:"100px", width:"100px"}}/>
            </Icon>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Slide>
        ))}
      </Slider>
      <FindOutMore style={{transform:"translateY(40px)"}}>
        <button>FIND OUT MORE</button>
      </FindOutMore>
    </SliderContainer>
  );
};

function Home() {
  const [text] = useTypewriter({
    words: ["Nurses.", "Doctors.", "Clinics.", "Dentists."],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <>
      <div>
        <div style={styles.container}>
          <div style={styles.textContainer}>
            <h1
              style={{
                fontSize: "40px",
                lineHeight: 1.6,
                marginBottom: "20px",
                fontWeight: "700",
              }}
            >
              <p>Easy to use,</p> <p>affordable software.</p>{" "}
              <p>
                Designed for{" "}
                <span style={styles.highlight}>Aesthetic {text}</span>
                <Cursor cursorStyle="|" />
              </p>
            </h1>
            <button style={styles.button}>START YOUR FREE TRIAL</button>
            <div style={styles.awardsContainer}>
              <div style={styles.award}>
                <img src={award} alt="Award" style={styles.awardImage} />
              </div>
            </div>
          </div>
          <div style={styles.imageContainer}>
            <img src={similing} alt="Smiling Woman" style={styles.image} />
          </div>
        </div>
        <div style={styles.secondSection}>
          <h2 style={styles.secondSectionHeading}>Everything you need, in one place.</h2>
          <p style={styles.secondSectionSubheading}>
            Document every step of an aesthetic treatment, effortlessly manage your diary and keep all your patient information securely in one place.
          </p>
          <div style={styles.secondSectionImages}>
            <img src={multiDevice} alt="Device 1" style={styles.deviceImage} />
          </div>
        </div>
        <SliderComponent />
        <div>
          
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "50px",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
    fontFamily: "Arial, sans-serif",
  },
  textContainer: {
    flex: 1,
    padding: "50px",
  },
  heading: {
    fontSize: "36px",
    lineHeight: 1.4,
    marginBottom: "20px",
  },
  highlight: {
    color: "#00bfa6",
  },
  button: {
    backgroundColor: "#003366",
    color: "#fff",
    padding: "15px 30px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  awardsContainer: {
    marginTop: "20px",
  },
  award: {
    display: "flex",
    alignItems: "center",
  },
  awardImage: {
    width: "290px",
    height: "100px",
    marginRight: "10px",
  },
  awardText: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  trustedText: {
    marginTop: "10px",
    fontSize: "14px",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  image: {
    borderRadius: "10px",
    maxWidth: "100%",
    height: "auto",
  },
  secondSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: '50px',
    fontFamily: 'Arial, sans-serif'
  },
  secondSectionHeading: {
    fontSize: '39px',
    marginBottom: '10px',
    fontWeight: "700"
  },
  secondSectionSubheading: {
    fontSize: '18px',
    marginBottom: '30px',
    color: '#555',
    width: "47%",
    textAlign: "center"
  },
  secondSectionImages: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  deviceImage: {
    width: "1200px",
    height: "800px"
  }
};

export default Home;
