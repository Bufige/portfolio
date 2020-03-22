import styled from 'styled-components';


export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    grid-gap: 2rem;
    grid-auto-flow: dense;

    @media(max-width: 600px) {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
`;