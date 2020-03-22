import styled from 'styled-components';


export const Container = styled.div`
    width: calc(100% - 60px - 55px);
    margin-left: 60px;
    .wrapper {
        max-width: 1010px;
        padding-top: 40px;
        margin: 0 auto;
    }
    .info {
        height: 100%;
        margin: 0 auto;
    }
    .profession {
        color: #cacaca;
        font-size: 28px;
    }
    .description {
        color: #8a8a8a;
        overflow: hidden;
        word-break: break-all;
        word-wrap: break-word;
        font-size: 1.1rem;
    }
    
    @media(max-width: 1100px) {
        .profession {
            font-size: 26px;
        }
    }
    @media(max-width: 1000px) {
        .profession {
            font-size: 24px;
        }
    }
    @media(max-width: 900px) {
        .profession {
            font-size: 22px;
        }
    }
    @media(max-width: 800px) {
        .profession {
            font-size: 20px;
        }
    }
    @media(max-width: 700px) {
        .profession {
            font-size: 18px;
        }
    }
    @media(max-width: 600px) {
        .profession {
            font-size: 16px;
        }
    }
`;