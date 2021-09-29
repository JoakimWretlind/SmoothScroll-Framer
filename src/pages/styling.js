import styled from 'styled-components';

export const ScrollContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    will-change: transform;
`;

export const Section = styled.section`
    position: relative;
    height: 100%;
    min-height: 100vh;
    width: 100%;
`;

export const Page1Img = styled.img`
    position: absolute;
    top: 10rem;
    right: 10%;
    width: 60vw;
    min-width: 28rem;
    max-width: 70rem;
`;

export const Page1Text = styled.div`
  position: absolute;
  top: 35vh;
  left: 30%;
  width: 30vw;
  z-index: 2;
  background: #fff;
  padding: 6rem 2rem;
  border-left: .6rem solid #F0BA00;
`;

export const PTag = styled.p`
    font-size: clamp(1.2rem, 2vw, 1.4rem);
    line-height: 1.4;
    letter-spacing: .1rem;    
`;

export const Page2Img = styled.img`
    position: absolute;
    top: 40vh;
    left: 10%;
    height: 60vh;
`;
export const Page2Text = styled.div`
  position: absolute;
  top: 96vh;
  left: 12%;
  width: 30vw;
  z-index: 2;
  background: #fff;
  padding: 6rem 2rem;
  border-bottom: .6rem solid #710B23;
`;

export const Page3Img = styled.img`
    position: absolute;
    top: -24vh;
    left: 46%;
    height: 80vh;
`;

export const Page4Img1 = styled.img`
    position: absolute;
    top: -10vh;
    right: 10%;
    height: 60vh;
`;

export const Page4Img2 = styled.img`
    position: absolute;
    bottom: 14vh;
    left: 24%;
    height: 80vh;
`;

export const ToTopButton = styled.button`
    margin-bottom: 3rem;
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 1rem 1.8rem;
    outline: none;
    background: transparent;
    border: .1rem solid rgba(0,0,0,.3);
    transition: .3s ease-out;
    &:hover{
        cursor: pointer;
        border: .1rem solid #9ECD01;
    }
`;