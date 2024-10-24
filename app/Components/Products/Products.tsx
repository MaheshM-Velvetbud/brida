import React from "react";
import { FocusCards } from "@/app/Components/UI/focus-cards";

const FocusCardsDemo = () => {
 
  const cards = [
    {
      title: "Forest Adventure",
      src: "/images/dummy.jpg",
      link: "/products_details/card1",
      price: "$150",
      description: "Explore the deep forests with this exciting adventure."
    },
    {
      title: "Ocean Dive",
      src: "/images/dummy.jpg",
      link: "/ocean-dive",
      price: "$200",
      description: "Dive into the oceans and explore marine life like never before."
    },
    {
      title: "Forest Adventure",
      src: "/images/dummy.jpg",
      link: "/products_details/card1",
      price: "$150",
      description: "Explore the deep forests with this exciting adventure."
    },
    {
      title: "Ocean Dive",
      src: "/images/dummy.jpg",
      link: "/ocean-dive",
      price: "$200",
      description: "Dive into the oceans and explore marine life like never before."
    },
    {
      title: "Forest Adventure",
      src: "/images/dummy.jpg",
      link: "/products_details/card1",
      price: "$150",
      description: "Explore the deep forests with this exciting adventure."
    },
    {
      title: "Ocean Dive",
      src: "/images/dummy.jpg",
      link: "/ocean-dive",
      price: "$200",
      description: "Dive into the oceans and explore marine life like never before."
    },
    // Other cards...
  ];
  

  return (
    <div className="max-w-5xl mx-auto px-4 pt-32">
      <FocusCards cards={cards} />
    </div>
  );
};

export default FocusCardsDemo;
