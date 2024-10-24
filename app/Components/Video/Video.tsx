import { HoverEffect } from "../UI/card-hover-effect";

const CardHoverEffectDemo = () => {
  return (
    <div className="max-w-6xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
};

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    videoUrl: "https://videos.pexels.com/video-files/8776122/8776122-uhd_2560_1440_25fps.mp4", // Example video URL
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    videoUrl: "https://videos.pexels.com/video-files/7305171/7305171-uhd_1440_2732_25fps.mp4",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    videoUrl: "https://videos.pexels.com/video-files/8776122/8776122-uhd_2560_1440_25fps.mp4",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    videoUrl: "https://videos.pexels.com/video-files/7305171/7305171-uhd_1440_2732_25fps.mp4",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    videoUrl: "https://videos.pexels.com/video-files/8776122/8776122-uhd_2560_1440_25fps.mp4",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    videoUrl: "https://videos.pexels.com/video-files/7305171/7305171-uhd_1440_2732_25fps.mp4",
  },
];


export default CardHoverEffectDemo;
