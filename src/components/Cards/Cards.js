import React from "react";
import Card from "./Card";
import userImage from '../../assets/userImage.png';
import workerImage from '../../assets/workerImage.jpg'

const cards = [
  {
    id: 1,
    title: "I need help!",
    text:"Find the right worker to begin working on your project.",
    image: userImage,
    url: "/userlogin",
    
  },
  {
    id: 2,
    title: "Become a Worker",
    text:"Find the perfect work and earn money with your valuable knowledge",
    image: workerImage,
    url: "/employeelogin",
    
  }
  ];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, id, text, url }) => (
          <div className="col" key={id}>
            <Card imageSource={image} title={title}  text={text} url={url}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
