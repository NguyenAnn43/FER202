import React from "react";
import Title from "./Title";
import Description from "./Description";
import Image from "./Image";

function SimpleCard({ item }) {
  const { title, description, imageUrl } = item;
  return (
    <div className="card">
      <Image url={imageUrl} />
      <div className="card-content">
        <Title text={title} />
        <Description text={description} />
      </div>
    </div>
  );
}

export default SimpleCard;
