import React from "react";
import "./blob.css";

export default function Blob() {
  return (
    <section className="sectionClass">
      <div className="blob">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0B3AF2" transform="translate(100 100)">
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M45.7,-45.2C62.2,-29.2,80.6,-14.6,82.7,2.1C84.7,18.7,70.4,37.4,53.9,50.7C37.4,64,18.7,71.9,0.4,71.5C-18,71.2,-35.9,62.5,-43.3,49.2C-50.6,35.9,-47.4,18,-45.8,1.6C-44.2,-14.8,-44.2,-29.6,-36.9,-45.6C-29.6,-61.6,-14.8,-79,-0.1,-78.9C14.6,-78.8,29.2,-61.3,45.7,-45.2Z;
              
              M36.5,-33C53,-20,76,-10,77.7,1.7C79.5,13.4,59.9,26.9,43.4,39.5C26.9,52.2,13.4,64.1,-1.4,65.5C-16.3,66.9,-32.6,57.9,-43.1,45.2C-53.6,32.6,-58.3,16.3,-55.8,2.6C-53.2,-11.2,-43.4,-22.4,-32.9,-35.4C-22.4,-48.5,-11.2,-63.4,-0.6,-62.7C10,-62.1,20,-46,36.5,-33Z;
              M34.9,-30.7C45.8,-24,55.6,-12,54.3,-1.3C53,9.4,40.6,18.8,29.7,25.8C18.8,32.7,9.4,37.3,-4.4,41.7C-18.2,46.1,-36.4,50.4,-51.6,43.4C-66.8,36.4,-78.9,18.2,-80.1,-1.2C-81.2,-20.6,-71.5,-41.2,-56.3,-47.9C-41.2,-54.5,-20.6,-47.3,-4.3,-43C12,-38.7,24,-37.4,34.9,-30.7Z;
              M52.8,-53.6C64.1,-41.6,65.8,-20.8,64.5,-1.2C63.3,18.3,59.2,36.7,47.9,49.6C36.7,62.5,18.3,70,1.5,68.5C-15.4,67,-30.8,56.6,-39.6,43.7C-48.5,30.8,-50.8,15.4,-54.4,-3.7C-58.1,-22.7,-63.1,-45.5,-54.3,-57.5C-45.5,-69.5,-22.7,-70.8,-1,-69.8C20.8,-68.8,41.6,-65.6,52.8,-53.6Z;
              M46.4,-47.8C55.7,-37,56,-18.5,56,0C56,18.5,55.7,36.9,46.3,50.3C36.9,63.6,18.5,71.9,-2.3,74.2C-23.1,76.5,-46.2,72.9,-60.2,59.5C-74.2,46.2,-79.2,23.1,-79.3,-0.1C-79.5,-23.3,-74.7,-46.7,-60.7,-57.5C-46.7,-68.4,-23.3,-66.7,-2.4,-64.3C18.5,-61.8,37,-58.7,46.4,-47.8Z;


              M45.7,-45.2C62.2,-29.2,80.6,-14.6,82.7,2.1C84.7,18.7,70.4,37.4,53.9,50.7C37.4,64,18.7,71.9,0.4,71.5C-18,71.2,-35.9,62.5,-43.3,49.2C-50.6,35.9,-47.4,18,-45.8,1.6C-44.2,-14.8,-44.2,-29.6,-36.9,-45.6C-29.6,-61.6,-14.8,-79,-0.1,-78.9C14.6,-78.8,29.2,-61.3,45.7,-45.2Z;"
            ></animate>
          </path>
        </svg>
      </div>
      <div className="blob">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0B3AF2" transform="translate(100 100)">
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M45.7,-45.2C62.2,-29.2,80.6,-14.6,82.7,2.1C84.7,18.7,70.4,37.4,53.9,50.7C37.4,64,18.7,71.9,0.4,71.5C-18,71.2,-35.9,62.5,-43.3,49.2C-50.6,35.9,-47.4,18,-45.8,1.6C-44.2,-14.8,-44.2,-29.6,-36.9,-45.6C-29.6,-61.6,-14.8,-79,-0.1,-78.9C14.6,-78.8,29.2,-61.3,45.7,-45.2Z;
              
              M36.5,-33C53,-20,76,-10,77.7,1.7C79.5,13.4,59.9,26.9,43.4,39.5C26.9,52.2,13.4,64.1,-1.4,65.5C-16.3,66.9,-32.6,57.9,-43.1,45.2C-53.6,32.6,-58.3,16.3,-55.8,2.6C-53.2,-11.2,-43.4,-22.4,-32.9,-35.4C-22.4,-48.5,-11.2,-63.4,-0.6,-62.7C10,-62.1,20,-46,36.5,-33Z;
              M34.9,-30.7C45.8,-24,55.6,-12,54.3,-1.3C53,9.4,40.6,18.8,29.7,25.8C18.8,32.7,9.4,37.3,-4.4,41.7C-18.2,46.1,-36.4,50.4,-51.6,43.4C-66.8,36.4,-78.9,18.2,-80.1,-1.2C-81.2,-20.6,-71.5,-41.2,-56.3,-47.9C-41.2,-54.5,-20.6,-47.3,-4.3,-43C12,-38.7,24,-37.4,34.9,-30.7Z;
              M52.8,-53.6C64.1,-41.6,65.8,-20.8,64.5,-1.2C63.3,18.3,59.2,36.7,47.9,49.6C36.7,62.5,18.3,70,1.5,68.5C-15.4,67,-30.8,56.6,-39.6,43.7C-48.5,30.8,-50.8,15.4,-54.4,-3.7C-58.1,-22.7,-63.1,-45.5,-54.3,-57.5C-45.5,-69.5,-22.7,-70.8,-1,-69.8C20.8,-68.8,41.6,-65.6,52.8,-53.6Z;
              M46.4,-47.8C55.7,-37,56,-18.5,56,0C56,18.5,55.7,36.9,46.3,50.3C36.9,63.6,18.5,71.9,-2.3,74.2C-23.1,76.5,-46.2,72.9,-60.2,59.5C-74.2,46.2,-79.2,23.1,-79.3,-0.1C-79.5,-23.3,-74.7,-46.7,-60.7,-57.5C-46.7,-68.4,-23.3,-66.7,-2.4,-64.3C18.5,-61.8,37,-58.7,46.4,-47.8Z;

              
              M45.7,-45.2C62.2,-29.2,80.6,-14.6,82.7,2.1C84.7,18.7,70.4,37.4,53.9,50.7C37.4,64,18.7,71.9,0.4,71.5C-18,71.2,-35.9,62.5,-43.3,49.2C-50.6,35.9,-47.4,18,-45.8,1.6C-44.2,-14.8,-44.2,-29.6,-36.9,-45.6C-29.6,-61.6,-14.8,-79,-0.1,-78.9C14.6,-78.8,29.2,-61.3,45.7,-45.2Z;"
            ></animate>
          </path>
        </svg>
      </div>
    </section>
  );
}
