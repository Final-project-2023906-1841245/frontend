import React from "react";
import Card from "./Card";
import userImage from "../../assets/userImage.png";
import workerImage from "../../assets/workerImage.jpg";

const cards = [
  {
    id: 1,
    title: "I need help!",
    text: "Find the right worker to begin working on your project.",
    image: userImage,
    url: "/userlogin",
    type: "/userlogin",
    message: "Este mk es usuario",
  },
  {
    id: 2,
    title: "Become a Worker",
    text: "Find the perfect work and earn money with your valuable knowledge",
    image: workerImage,
    url: "/employeelogin",
    
  }
  ];
    type: "/employeelogin",
    message: "Este mk es worker",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, id, text, type, message }) => (
          <div className="col" key={id}>
            <Card
              imageSource={image}
              title={title}
              text={text}
              type={type}
              message={message}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
