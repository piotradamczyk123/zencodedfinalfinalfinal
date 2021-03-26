import * as React from "react";
import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";
import Header from "../components/header.js";
import * as introStyles from "../components/intro.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navigate } from "gatsby";
import "../styles/global.css";
gsap.registerPlugin(ScrollTrigger);

// markup
const IndexPage = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const tl = gsap.timeline();

  useEffect(() => {
    const circle = document.getElementById("circle");
    function setAttributes(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }

    function navigateToWhat() {
      tl.to(containerRef.current, {
        x: 0,
        duration: 1.5,
        onComplete: () => {
          navigate("/what/");
        },
      });
    }

    const container = document.getElementById("container");
    const documentWidth = container.offsetWidth;
    const helper = documentWidth / 4;
    tl.to("#redbox", {
      x: 1000,
      rotation: 100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1000",
        scrub: 1.5,
        pin: true,
      },
    });
    tl.to("#blackbox", {
      left: -(helper + 32),
      onComplete: () => {
        setAttributes(circle, { width: "160", height: "160px" });
        navigateToWhat();
      },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300",
        scrub: 1.5,
        pin: true,
      },
    });
    tl.to(textRef.current, {
      x: -800,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300",
        scrub: 2,
        pin: true,
      },
    });
  });

  return (
    <div className={introStyles.global_wrapper} id="container">
      <div className={introStyles.container} ref={containerRef}>
        <Helmet></Helmet>
        <Header />

        <main className={introStyles.global_main}>
          <div ref={textRef} className={introStyles.leftside}>
            <h1>
              <span>zen</span>coded
            </h1>
            <p>we code future</p>
          </div>

          <div className={introStyles.rightside}>
            <div id="redbox" className={introStyles.redbox}>
              <ul>
                <li className={introStyles.redboxtext}>ux</li>
                <li className={introStyles.redboxtext}>web</li>
                <li className={introStyles.redboxtext}>code</li>
              </ul>
            </div>

            <div id="blackbox" className={introStyles.blackbox}>
              <svg
                id="circle"
                className={introStyles.circle}
                width="32px"
                height="32px"
                viewBox="0 0 106 106"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Circle</title>
                <g
                  id="Version4-12.11-(11-name-chose)"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Home-Copy-14"
                    transform="translate(-862.000000, -346.000000)"
                  >
                    <g
                      id="Circle"
                      transform="translate(862.000000, 346.000000)"
                    >
                      <circle
                        id="Oval-Copy"
                        stroke="#FFFFFF"
                        strokeWidth="0.2"
                        cx="53"
                        cy="53"
                        r="52.9"
                      ></circle>
                      <circle
                        id="Oval-Copy-2"
                        stroke="#FFFFFF"
                        strokeWidth="0.2"
                        cx="52.5"
                        cy="53.5"
                        r="46.4"
                      ></circle>
                      <circle
                        id="Oval-Copy-3"
                        stroke="#FFFFFF"
                        strokeWidth="0.2"
                        cx="53"
                        cy="53"
                        r="39.9"
                      ></circle>
                      <circle
                        id="Oval-Copy-4"
                        stroke="#FFFFFF"
                        strokeWidth="0.2"
                        cx="53"
                        cy="53"
                        r="32.9"
                      ></circle>
                      <circle
                        id="Oval-Copy-5"
                        stroke="#FFFFFF"
                        strokeWidth="0.2"
                        cx="52.5"
                        cy="53.5"
                        r="26.4"
                      ></circle>
                      <circle
                        id="Oval-Copy-6"
                        stroke="#FFFFFF"
                        strokeWidth="0.2"
                        cx="53"
                        cy="53"
                        r="19.9"
                      ></circle>
                      <circle
                        id="Oval-Copy-7"
                        stroke="#FFFFFF"
                        strokeWidth="0.2"
                        cx="52.5"
                        cy="53.5"
                        r="13.4"
                      ></circle>
                      <circle
                        id="Oval-Copy-8"
                        stroke="#FFFFFF"
                        strokeWidth="0.2"
                        cx="52.5"
                        cy="53.5"
                        r="6.4"
                      ></circle>
                      <circle
                        id="Oval-Copy-10"
                        fill="#FFFFFF"
                        cx="52.5"
                        cy="53.5"
                        r="1.5"
                      ></circle>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default IndexPage;
