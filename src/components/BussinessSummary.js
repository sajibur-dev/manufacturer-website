import {
    faBook,
    faFontAwesome,
    faThumbsUp,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BussinessSummary = () => {
  const success = [
    {
      id: 1,
      successIcon: faFontAwesome,
      quantity: 60,
      name: "countries",
    },
    {
      id: 2,
      successIcon: faBook,
      quantity: 545,
      name: "complete projects",
    },
    {
      id: 3,
      successIcon: faUsers,
      quantity: 280,
      name: "happy clients",
    },
    {
      id: 4,
      successIcon: faThumbsUp,
      quantity: 290,
      name: "feedback",
    },
  ];
  return (
    <div className="p-5 text-center space-y-10">
      <div>
        <h1 className="text-primary font-bold text-4xl uppercase">
          Our Succuss
        </h1>
        <p className="text-accent">Customer experience</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {success.map((s) => (
          <div key={s.id} className="space-y-3 text-primary mb-10">
            <p className="text-5xl">
              <FontAwesomeIcon icon={s.successIcon} />
            </p>
            <h4 className="text-2xl font-bold text-accent">{s.quantity}+</h4>
            <p className="text-sm ">{s.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BussinessSummary;
