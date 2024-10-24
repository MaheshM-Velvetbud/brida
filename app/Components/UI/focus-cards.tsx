
"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/app/lib/utils";  // Assuming this is for class management

// Define the type for card data
type CardData = {
  title: string;
  description: string;
  price: string;
  link: string;
  src: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    expandedCard,
    setExpandedCard,
  }: {
    card: CardData;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    expandedCard: number | null;
    setExpandedCard: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const isExpanded = expandedCard === index;

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setExpandedCard(isExpanded ? null : index)} // Toggle expanded state
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden transition-all duration-300 ease-out cursor-pointer",
          isExpanded ? "h-auto" : "h-60 md:h-96",
          hovered !== null && hovered !== index && !isExpanded && "blur-sm scale-[0.98]"
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end py-8 px-4 transition-opacity duration-300">
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>

          {isExpanded ? (
            <div className="mt-4">
              <p className="text-sm text-white">{card.description}</p>
              <p className="text-base text-white font-semibold mt-2">{card.price}</p>
              {/* You can add more details here */}
            </div>
          ) : (
            <Link href={card.link} passHref>
              <p className="text-sm md:text-base mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                Learn More
              </p>
            </Link>
          )}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardData[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null); // State for expanded card

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
        />
      ))}
    </div>
  );
}
