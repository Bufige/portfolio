import React from 'react';

import {Container} from './styles';


export default function Footer() {
    return <Container>
        <div className="copyright">
            © 2020<a href="https://github.com/bufige" target="_blank" rel="noopener noreferrer">Leonardo Igor.</a>All Rights Reserved.
        </div>
        <div className="contact">
            <div>
                Email: <a href="mailto:bufige1434@gmail.com">bufige1434@gmail.com</a>
            </div>
            <div>
                Phone: <a href="tel: +55849874613984">+55 (84) 9874613984</a>
            </div>
        </div>
    </Container>
}