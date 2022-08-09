import styled from 'styled-components';


export const Container1 = styled.div`
    height: 40vh;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;

`

export const Container2 = styled.div`
    height: 15vh;
    width: 100%;
    padding: 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0,204,255, 0.9);
    border-radius: 20px;
    backdrop-filter: blur(30px);


    #spanText {
      color: var(--text-color);
      @media (max-width: 960px) {
        display: flex;
        justify-items: flex-start;
        padding-right: 0px;
        padding-left: 0px;
        height: 0vh;
        width: 185px;
        font-size: 20px;
        text-align: center;
      }
    }

    h2 {
      text-align: center;
      padding-top: 10px;
      @media (max-width: 960px) {
        text-align: center;
        font-size: 35px;
        padding-top: 0px;
      }
    }

    @media (max-width: 960px) {
      width: 100%;
      height: 16vh;
      margin-left: -35px;
    }
`
