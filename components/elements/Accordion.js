import { useState } from "react";

export default function Accordion({ data }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(1)}>
            <button
              className={
                isActive.key == 1
                  ? "accordion-button"
                  : "accordion-button collapsed"
              }
              type="button"
            >
              {data[0].question1}
            </button>
          </h2>
          <div
            id="collapseOne"
            className={
              isActive.key == 1
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              <p>{data[0].answer1}</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(2)}>
            <button
              className={
                isActive.key == 2
                  ? "accordion-button"
                  : "accordion-button collapsed"
              }
              type="button"
            >
              {data[1].question2}
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={
              isActive.key == 2
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              <p>{data[1].answer2}</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(3)}>
            <button
              className={
                isActive.key == 3
                  ? "accordion-button"
                  : "accordion-button collapsed"
              }
              type="button"
            >
              {data[2].question3}
            </button>
          </h2>
          <div
            id="collapseThree"
            className={
              isActive.key == 3
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              <p>{data[2].answer3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
