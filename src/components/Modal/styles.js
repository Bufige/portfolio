import styled from 'styled-components';


export const Container = styled.div`
    z-index: 10001;
    
    .modal {
        position: fixed;
        width: 500px;
        height: 600px;
        top: calc(5%);
        margin: 0 auto;
        left: 0;
        right: 0;

        &.show {
            visibility: visible;
            opacity: 1;
            /*background-color: rgba(0, 0, 0, 0.6);*/
            background-color: #343a41;
        }
        &.hide {
            visibility: hidden;
            opacity: 0;
        }

        transition: 
            visibility 1s ease-in-out,
            opacity 1s  ease-in-out,
            background-color 1s ease-in-out
        ;

        transition: all 1s ease-in-out;
    }
    .header {
        display: block;
    }
    .close {
        cursor: pointer;
        position: absolute;
        left: calc(100% - 30px);
        top: 0;
        color: #94a4b4;
        :hover {
            transform: scale(1.2);
        }
        transition: transform .2s ease-in-out;
    }
    .commands {
        position: absolute;
    }
    .content {
        width: 100%;
        height: 100%;
        .slideshow {
            height: 200px;
            width: 100%;
        }
    }

    .details {
        width: calc(100% - 10px);
        height: calc(100% - 200px);
        margin-left: 10px;
        background-color: #343a41;
        .project-name {
            h1 {
                font-size: 2.5rem;
                color: #fff;
                letter-spacing: 1px;
                font-weight: lighter;
            }
        }
        .tags {
            * { 
                margin: 0 8px 8px 8px;
            }
        }
        .about {
            color: #94a4b4;
            font-size: 1.6rem;
            letter-spacing: 1px;
        }
        .project-summary {
            width: 100%;
            height: 180px;
            word-wrap: break-word;
            margin-top: 1rem;
            font-family: Inconsolata,sans-serif;
            font-size: 1.2rem;
            line-height: 1.5;
            color: #94a4b4;
            overflow-y: scroll;
            white-space: pre-line;
        }

        .links {
            margin-left: -15px;
            display: flex;
            justify-content: center;
            *:not(:first-child) {
                margin-left: 10px; 
            } 
            a {
                padding: 5px 2px 5px 2px;
                text-decoration: none;
                color: #22262a;
                font-size: 1.1rem;
                letter-spacing: 1px;
                background-color: rgba(255,255,255,.7);
                border-radius: 8px;
                cursor: pointer;
                box-shadow: 3px 3px 0 rgba(0,0,0,0.5);
                transition: all .2s;
                
            }
        }
    }

    @media(max-width: 1100px) {
        .modal {
            width: 400px;
            .project-summary {
                height: 180px;
            }
        }
    }
    @media(max-width: 600px) {
        .modal {
            top: calc(6%);
			margin-left: 50px;
            width: 310px;
            .project-summary {
                height: 100px;
                font-size: 0.8rem; 
            }
        }
    }
`;