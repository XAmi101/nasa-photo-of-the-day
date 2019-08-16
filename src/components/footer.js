import React from "react";
import "../App.css";
import { Container } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

function Footer() {
    return (
        <Container className="footer" text style={{ marginTop: '15.5rem' }}>
            "© NASA"
        </Container>
    );
}
export default Footer;
