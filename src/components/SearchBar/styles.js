import styled from 'styled-components';


export const Container = styled.div`
    margin: 25px 0 25px 0;

    .showing {
        margin-left: 5px;
        margin-top: 20px;
        small {
            color: #8a8a8a;
            transition: all 0.5 ease-in-out;
            font-size: .75em;
            line-height: 1em;
        }
    }
    .tags {
        * { 
            margin: 0 8px 8px 8px;
        }
    }
`;