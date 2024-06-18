import React from "react";
import similing from "../images/HomeScreen-MainImageCropped.jpg";
import award from "../images/Trustedbyawards24-300x85.png";
import multiDevice from "../images/Homepage_Multidevice2.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

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
          <h2 style={styles.secondSectionHeading}>
            Everything you need, in one place.
          </h2>
          <p style={styles.secondSectionSubheading}>
            Document every step of an aesthetic treatment, effortlessly manage
            your diary and keep all your patient information securely in one
            place.
          </p>
          <div style={styles.secondSectionImages}>
            <img src={multiDevice} alt="Device 1" style={styles.deviceImage} />
          </div>
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
    padding: "50px",
    // backgroundColor: '#f9f9f9',
    fontFamily: "Arial, sans-serif",
  },
  secondSectionHeading: {
    fontSize: "39px",
    marginBottom: "10px",
    fontWeight: "700",
  },
  secondSectionSubheading: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#555",
    width: "47%",
    textAlign: "center",
  },
  secondSectionImages: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  deviceImage: {
    width: "1200px",
    height: "800px",
  },
};

export default Home;
