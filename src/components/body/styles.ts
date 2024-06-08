import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    max-width: 30rem;
    display: flex;
    align-items: start;
    justify-content: center;
    
    text-align: start;
    flex-direction: column;

    H2 {
        margin-top: 2rem;
    }

    H3 {
        margin-top: 2rem;
    }

    p {
        margin: 0.5rem 0 1rem 0;
    }

    a {
        font-weight: bold;
        color: var(--blue-500);

        margin-bottom: 1rem;
    }
`