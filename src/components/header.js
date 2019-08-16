import React from "react"
import "../App.css";
import { Container, Header } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

function PageHeader() {
    return (
      <Container text style={{ margin: '2rem 0' }}>
        <Header as='h1' textAlign='center' padding>
            NASA's Photo of the Day
        </Header>
          </Container>
    )
}

export default PageHeader
