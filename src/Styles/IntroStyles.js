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
    border-radius: 20px;
    padding: 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    backdrop-filter: blur(30px);
		box-shadow: 0 0 20px rgba(80, 78, 78, 0.9);
    border: 0.5px solid var(--text-color);

    #spanText {
      color: var(--text-color);
    }

`
