import React from "react";
import "../CSS/LaboratoryCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const LaboratoryCard = ({
  imageurl = "",
  labName = "",
  invoiceurl = "",
  labcost = 0,
  description = "",
  use = "",
  itemno = 0,
}) => {
  return (
    <>
      <div
        className="container p-0"
        data-toggle="collapse"
        href={`#collapseExample${itemno}`}
        role="button"
        aria-expanded="false"
        aria-controls={`collapseExample${itemno}`}
      >
        
        <div className="accordion-heading-wrapper">
          <h5>{labName}</h5>
          <FontAwesomeIcon className="accordion-icon" icon={faChevronDown} />
        </div>
      </div>

      <div className="collapse" id={`collapseExample${itemno}`} role="tabpanel">
        <div className="card card-body text-dark w-100">
          <img src={imageurl} alt="Laboratory Imge" className="lab-photo"/>
           <div className="mt-3 lab-description">{description}</div>
           <br/>
         
              <span className="badge badge-info lab-info">USE: </span>
              {use}
          <br/>
          <br/>
          <span className="badge badge-info lab-info">Lab Cost:</span>{" "}
           
          <b>₹{labcost}</b>
          <br/>
          <br/>
        
          <a target="blank" href={invoiceurl}>
            <button className="lab-detail-btn">Details</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default LaboratoryCard;
