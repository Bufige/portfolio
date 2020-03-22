import styled from 'styled-components';


export const Container = styled.div`
    width:100%;
    margin-top: 5%;
    height: 50px;
    color: #94a4b4;
    display: flex;
    justify-content: center;

    * {
        margin-left: 20px;
    }
    .contact, .copyright {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media(max-width: 600px) {
        display: block;
        .contact, .copyright{
            display: block;
            margin: 0 auto;
            text-align: center;
            margin-bottom: 10px;
        }
    }

    a {
        text-decoration: none;
        color: white;
    }
`;