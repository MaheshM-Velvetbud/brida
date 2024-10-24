
"use client"
import React from "react";
import styled, { keyframes, css } from "styled-components";

function App() {
  const row1 = [
    "https://static.wixstatic.com/media/bd2170_f4326653bcb6427c9544916bc43dfd12~mv2.png/v1/fill/w_236,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bd2170_f4326653bcb6427c9544916bc43dfd12~mv2.png",
    "https://static.wixstatic.com/media/bd2170_6f1bf7244afb4440b0d8f5437e171ad8.jpg/v1/fill/w_169,h_55,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bd2170_6f1bf7244afb4440b0d8f5437e171ad8.jpg",
    "https://static.wixstatic.com/media/bd2170_d048bef38b2c4c3f939fa447aac85c69.jpg/v1/fill/w_161,h_83,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bd2170_d048bef38b2c4c3f939fa447aac85c69.jpg",
    "https://static.wixstatic.com/media/bd2170_70f67064b333417a8e1f5b0c1f9fd241.png/v1/fill/w_176,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bd2170_70f67064b333417a8e1f5b0c1f9fd241.png",
    "https://static.wixstatic.com/media/bd2170_745382fd427b41da81d9ece66bd5ea84.png/v1/fill/w_193,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bd2170_745382fd427b41da81d9ece66bd5ea84.png",
    "https://static.wixstatic.com/media/bd2170_957ee10bf8374c90a2fa5df504ff056e~mv2.png/v1/fill/w_381,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bd2170_957ee10bf8374c90a2fa5df504ff056e~mv2.png",
  ];

  const row2 = [
    "https://static.wixstatic.com/media/bd2170_b0e41ef1a0a348d69b46ec96327964f7~mv2.png/v1/crop/x_0,y_0,w_375,h_107/fill/w_355,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tarik%20EDIZ%20logo.png",
    "https://static.wixstatic.com/media/bd2170_6ccd5870e763425ca37cd6e68b627f1e~mv2.jpg/v1/crop/x_0,y_177,w_1064,h_933/fill/w_303,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PenultimateFullSizeRender.jpg",
    "https://static.wixstatic.com/media/bd2170_f6e289add747457db1f1f81a79c85439~mv2.png/v1/crop/x_0,y_19,w_180,h_141/fill/w_245,h_193,al_c,lg_1,q_85,enc_auto/Pollardi%20logo.png",
    "https://static.wixstatic.com/media/bd2170_a7b90d1593a446a2b3e95e7f41610c86~mv2.jpg/v1/crop/x_0,y_154,w_600,h_292/fill/w_250,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/wilvorst%20logo.jpg",
    "https://static.wixstatic.com/media/bd2170_b105b6e52948414eb20f5739b0b048ac~mv2.jpg/v1/crop/x_14,y_33,w_122,h_98/fill/w_171,h_134,al_c,lg_1,q_80,enc_auto/Nina%20Sarkisyants%20logo.jpg",
  ];

  return (
    <AppContainer>
      <Wrapper>
        <Text>Our Brands</Text>
        <Note>Our customers have gotten offers from awesome companies.</Note>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt="Brand Logo" />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt="Brand Logo" />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt="Brand Logo" />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt="Brand Logo" />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;