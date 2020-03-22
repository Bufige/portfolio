import styled from 'styled-components';


export const Container = styled.button`
    padding: 8px 5px;
    background-color: #313131;
    color: #999;
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: #222;
    border-radius: 5px;

    text-transform: uppercase;
    font-family: MontSerrat,Tahoma,Arial,sans-serif;
    font-weight: 700;
    font-size: .75em;
    line-height: 1em;
    box-shadow: 1px 1px 0 rgba(0,0,0,0.5);

    cursor: pointer;

    user-select: none;
    outline:0;

    transition: all 0.4s ease-in-out;

    opacity: 0.7;

    :hover {
        opacity: 1;
        transform: scale(1.05);
    }
    &.active {
        transition: all 0.3s ease-in-out;
        opacity: 1;
        transform: scale(1.10);

        :hover {
            opacity: 0.7;
            transform: scale(1);
        }
    }
`;