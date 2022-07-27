
import styled from 'styled-components'

export const SectionContainer2 = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(80, 78, 78, 0.9);
  border: 1px solid var(--text-color);
  opacity: 1;
  color: var(--text-color);
  width: max-content;
  padding: 0px 20px 0px 20px;

  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 25px;
  }
`


export const SectionContainer = styled.div`
  border-radius: 10px;
  opacity: 1;   
  width: 100%;
`;

export const TitleContent = styled.div`
  z-index: 20;
  width: 100%;

`;

export const CarouselContainer = styled.ul`
  max-width: 100%;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  overflow-x: hidden;


`
export const CarouselMobileScrollNode = styled.div`

`

export const CarouselItem = styled.div`
  border-radius: 3px;
  max-width: 196px;
  
  }
`

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  margin-bottom: 8px;


`
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

`

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  padding-right: 16px;
`
export const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`

export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`
