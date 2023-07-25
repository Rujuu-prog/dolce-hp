"use client";
import styled from "styled-components";

import { inter, roboto_mono, noto_sans_jp } from "./components/Font";
import { Motion } from "./components/Motion";
import { DefaultTable } from "./components/DefaultTable";
import { SlideImg2 } from "./components/SlideImg2";
import { ThumbsSlideImg } from "./components/ThumbsSlideImg";

import { H2 } from "./components/H2";

const tableData = {
  "0": {
    ご利用目的: "コンサート・ライブ・発表会",
    料金: "¥6000(＠1時間)",
    備考: "席数　最大30席",
  },
  "1": {
    ご利用目的: "作品展",
    料金: "¥50000(5日間)",
    備考: "Open 11:00~18:00",
  },
  "2": {
    ご利用目的: "講演会・会議",
    料金: "¥10000(2時間)",
    備考: "席数　最大30席",
  },
  "3": {
    ご利用目的: "パーティー",
    料金: "¥10000(2時間)",
    備考: "席数　最大20席",
  },
  "4": {
    ご利用目的: "お食事会",
    料金: "お食事代＠¥2500~",
    備考: "席数　最大20席",
  },
};

const heroImage = [
  { src: "/外観.png", alt: "外観" },
  { src: "/店内.png", alt: "店内" },
  { src: "/ピアノ_5x.png", alt: "ピアノ" },
];

const layoutImage = [
  { src: "/外観.png", alt: "外観" },
  { src: "/店内.png", alt: "店内" },
  { src: "/ピアノ_5x.png", alt: "ピアノ" },
  { src: "/ピアノとオルガン_5x.png", alt: "ピアノとオルガン" },
  { src: "/ピアノ無しデュオ_5x.png", alt: "ピアノ無しデュオ" },
  { src: "/会議_5x.png", alt: "会議" },
  { src: "/展示_5x.png", alt: "展示" },
];

export default function Home() {
  return (
    <main id="top" style={{ marginTop: "80px" }}>
      {/* ヒーロー */}
      <Hero>
        <HeroText>
          <HeroContent>ギャラリーサロン</HeroContent>
          <HeroTitle className={roboto_mono.className}>土瑠茶</HeroTitle>
        </HeroText>
        <SlideImg2 imageData={heroImage} />
      </Hero>
      {/* 詳細 */}
      <div style={{ backgroundColor: "#fff", minHeight: "90vh", margin: 0 }}>
        <SSalonDetail>
          <SLayoutImg id="layoutImg">
            <SH2 black={true} className={noto_sans_jp.className}>
              Picture
              <SH2Span>写真</SH2Span>
            </SH2>
            <ThumbsSlideImg imageData={layoutImage} />
          </SLayoutImg>
          <SDetail id="detail">
            <SH2 black={true} className={noto_sans_jp.className}>
              Detail
              <SH2Span>詳細</SH2Span>
            </SH2>
            <DefaultTable />
            <p>※時間や席数は、利用目的によって変動します。</p>
          </SDetail>
        </SSalonDetail>
      </div>
      <SContainer style={{ backgroundColor: "#dbdbdb" }} id="price">
        <Motion>
          <SH2Price black={true} className={noto_sans_jp.className}>
            Price
            <SH2Span>料金</SH2Span>
          </SH2Price>
        </Motion>
      </SContainer>
    </main>
  );
}

// ヒーロー
const HeroText = styled.div`
  color: #fff;
  text-align: center;
  -webkit-text-stroke: 1px #333;
  text-stroke: 1px #333;
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 100%;

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991px) {
    left: 25%;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767px) {
    left: 50%;
  }
`;

const HeroContent = styled.p`
  font-family: "hot-kaishokk", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0;
  font-size: 300%;

  @media (max-width: 991px) {
    font-size: 250%;
  }

  @media (max-width: 767px) {
    font-size: 200%;
  }
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: 500%;
  letter-spacing: 8px;

  @media (max-width: 991px) {
    font-size: 450%;
  }

  @media (max-width: 767px) {
    font-size: 400%;
  }
`;

const Hero = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
`;

const SSalonDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding: 2% 0 0 0;

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767px) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
`;

const SLayoutImg = styled.div`
  width: 45%;
  height: 100%;
`;

const SDetail = styled.div`
  width: 45%;
`;

// 囲い
const SContainer = styled.div`
  /* 中央揃え */
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
`;
const SWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* 小要素の隙間調整 */
  gap: 20px;
`;

// 料金
const SScroll = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  width: 80%;
  min-width: 400px;
  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
`;

// 見出し
const SH1 = styled.h1`
  color: #263140;
`;

const SH3 = styled.h3`
  color: #ffffff;
  text-align: center;
  margin: 10px 0;
`;

const SH2 = styled(H2)`
  font-size: 32px;
`;

const SH2Price = styled(SH2)`
  width: 45%;
  text-align: center;
`;

const SH2Span = styled.span`
  display: inline-block;
  font-size: 18px;
  padding: 1%;
  margin: 0;
`;
