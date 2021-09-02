import React, { useRef, useState } from "react";
import "../../css/InfoLayout.css";
import fadeIn from "react-animations/lib/fade-in";
import Radium, { StyleRoot } from "radium";

const FaqAccordion = () => {
  const [activeIndex, setIndex] = useState(null);
  const accord = useRef(null);

  const toggleTab = (index) => {
    if (index === activeIndex) {
      setIndex(null);
    } else {
      setIndex(index);
    }
  };

  return (
    <div className="accordion" id="accordionExample" ref={accord}>
      <div className="accordion-item">
        <h2 className="accordion-header" id="0" onClick={() => toggleTab(0)}>
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What is Netflix?
          </button>
        </h2>
        <StyleRoot
          id="collapseOne"
          className={`accordion-collapse collapse ${
            activeIndex === 0 && "show"
          }`}
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={styles.fadeIn}>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices. You can watch as much as
            you want, whenever you want without a single commercial – all for
            one low monthly price. There's always something new to discover and
            new TV shows and movies are added every week!
          </div>
        </StyleRoot>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="1" onClick={() => toggleTab(1)}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            How much does Netflix cost?
          </button>
        </h2>
        <StyleRoot
          id="collapseTwo"
          className={`accordion-collapse collapse ${
            activeIndex === 1 && "show"
          }`}
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={styles.fadeIn}>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from
            $8.99 to $17.99 a month. No extra costs, no contracts.
          </div>
        </StyleRoot>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="2" onClick={() => toggleTab(2)}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Where can I watch?
          </button>
        </h2>
        <StyleRoot
          id="collapseThree"
          className={`accordion-collapse collapse ${
            activeIndex === 2 && "show"
          }`}
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={styles.fadeIn}>
            Watch anywhere, anytime, on an unlimited number of devices. Sign in
            with your Netflix account to watch instantly on the web at
            netflix.com from your personal computer or on any internet-connected
            device that offers the Netflix app, including smart TVs,
            smartphones, tablets, streaming media players and game consoles.{" "}
            <br />
            You can also download your favorite shows with the iOS, Android, or
            Windows 10 app. Use downloads to watch while you're on the go and
            without an internet connection. Take Netflix with you anywhere.
          </div>
        </StyleRoot>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="3" onClick={() => toggleTab(3)}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            How do I cancel?
          </button>
        </h2>
        <StyleRoot
          id="collapseThree"
          className={`accordion-collapse collapse ${
            activeIndex === 3 && "show"
          }`}
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={styles.fadeIn}>
            Netflix is flexible. There are no pesky contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </div>
        </StyleRoot>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="4" onClick={() => toggleTab(4)}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            What can I watch on Netflix?
          </button>
        </h2>
        <StyleRoot
          id="collapseThree"
          className={`accordion-collapse collapse ${
            activeIndex === 4 && "show"
          }`}
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={styles.fadeIn}>
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </div>
        </StyleRoot>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="5" onClick={() => toggleTab(5)}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Is Netflix good for kids?
          </button>
        </h2>
        <StyleRoot
          id="collapseThree"
          className={`accordion-collapse collapse ${
            activeIndex === 5 && "show"
          }`}
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={styles.fadeIn}>
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and movies
            in their own space. Kids profiles come with PIN-protected parental
            controls that let you restrict the maturity rating of content kids
            can watch and block specific titles you don’t want kids to see.
          </div>
        </StyleRoot>
      </div>
    </div>
  );
};

const styles = {
  fadeIn: {
    animation: "x 0.5s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

export default FaqAccordion;
