import React from "react";
import Card from "./Card";
import userImage from "../../assets/user2.jpg";
import workerImage from "../../assets/employee2.jpg";

const cards = [
  {
    id: 1,
    title: "I need help!",
    text: "Find the right worker to begin working on your project.",
    image: userImage,
    url: "/userlogin",
    type: "/userlogin",
    message: "Find workers",
  },
  {
    id: 2,
    title: "Become a Worker",
    text: "Find the perfect work and earn money with your knowledge.",
    image: workerImage,
    url: "/employeelogin",
    type: "/employeelogin",
    message: "I want to work",
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
