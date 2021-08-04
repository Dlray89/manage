import React from "react";
import { primary_data } from "../../data/manage-values.data";

const PrimaryContent = () => {
  return (
    <div className="primary-content">
      <section className="primary-content__question-section">
        <h2 className="primary-content__question-section--title">What's different about manage?</h2>
        <p className="primary-content__question-section--sub">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </section>
      <section className="primary-content__answer-section">
        {primary_data.map((item) => (
          <div key={item.id} className="primary-content__answer-section--values">
            <div className="primary-content__answer-section--values__number-box">
              <p className="primary-content__answer-section--values__number-box--number">{item.id}</p>
            </div>
            <div className="primary-content__answer-section--values__details-section">
                    <h3 className="primary-content__answer-section--values__details-section--title">{ item.title}</h3>
                    <div className="primary-content__answer-section--values__details-section--sub">{ item.details}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PrimaryContent;
