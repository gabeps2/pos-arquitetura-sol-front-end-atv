import styled from 'styled-components'

export const Container = styled.div`
    background-color: var(--blue-500);
    
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    
    align-items: center;
    justify-content: center;
`

export const ImageContent = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 10rem;
        height: 10rem;

        margin: 5rem;

        border-radius: 50%;
    }
`

export const Content = styled.div`
    max-width: 30rem;
    display: flex;

    align-items: start;
    flex-direction: column;

    height: 100%;

    color: var(--white);

    h1 {
        margin-top: 2.5rem;
        font-size: 3.5rem;
    }

    p {
        margin-top: 1rem;
        font-size: .8rem;
    }

`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: start;

    
    a {
        margin-top: 1rem;
        margin-right: 1rem;
    }
`