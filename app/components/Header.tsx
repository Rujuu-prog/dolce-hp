"use client";
import Image from "next/image";
import styled from "styled-components";
import { Link as Scroll } from "react-scroll";

import { inter, roboto_mono, noto_sans_jp } from "./Font";

export function Header() {
  return (
    <SContainer>
      <Scroll to={"top"} smooth offset={-80} style={{ cursor: "pointer" }}>
        <Image
          src="/dlogo_rep3.png"
          alt="Dolce Logo"
          width={140}
          height={80}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Scroll>
      <SRight className={noto_sans_jp.className}>
        <SScroll to={"layoutImg"} smooth offset={-80}>
          <SP>Picture</SP>
        </SScroll>
        <SScroll to={"detail"} smooth offset={-80}>
          <SP>Detail</SP>
        </SScroll>
        <SScroll to={"price"} smooth offset={-80}>
          <SP>Price</SP>
        </SScroll>
      </SRight>
    </SContainer>
  );
}

const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* 半透明な背景 */
  /* background-color: rgba(255, 255, 255, 0.9); */
  background-color: #fff;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 0 40px;
  box-shadow: rgba(30, 4, 4, 0.09) 0px 0px 10px 0px;
`;

const SRight = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const SScroll = styled(Scroll)`
  cursor: pointer;
  border-radius: 20px;
  padding: 0 10px;
  &:hover {
    color: #fff;
    background-color: #333;
  }
`;

const SP = styled.p``;
