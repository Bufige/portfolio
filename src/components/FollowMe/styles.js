import styled from 'styled-components';

export const Container = styled.div`
    z-index: 1001;
    position: fixed;
    top: calc(50% - 75px);
    width: 55px;
    background: white;

    ul >li  {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
            display: flex;
            text-decoration: none;
        }
        
        transition: width .3s ease-in-out;
        &:hover {
            width: 250%;
        }
    }
    .resume, .github, .linkedin, .email {
        display: flex;
        justify-content: center;
        span {
            font-size: 1.2rem;
            letter-spacing: 1px;
            margin-top: 5px;
            margin-right: 10px;
            color:white;
            width: 0;
            visibility: hidden;
            transition: 
                width .1s ease-in-out,
                visibility 0.095s ease-in-out
            ;
        }
        :hover {
            span {
                visibility: visible;
                width: 65px;
            }
        }
    }
    .resume {
        background-color: #565f69;
    }
    .github {
        background-color: #4e545a;
    }
    .linkedin {
        background-color: #0077ba;
    }
    .email {
        background-color: #6fc2b0;
    }
    .icon {
        width: 100%;
        height: 100%;
        &.resume {
            color: white;
        }
        &.github {
            color: white;
        }
        &.linkedin {
            color: white;
        }
        &.email {
            color: white;
        }
    }
`;