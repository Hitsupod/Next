import React from "react";
import { Layout, Header, Navigation, Content } from "react-mdl";
import "./App.css";
import Main from "./components/Main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Header
          title={
            <Link
              style={{
                textDecoration: "none",
                color: "white",
              }}
              to="/"
            >
              NEXT
            </Link>
          }
          scroll
        >
          <Navigation className="nav">
            <Link
              style={{
                textDecoration: "none",
                color: "white",
              }}
              to="#"
            >
              Sign in
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
              }}
              to="#"
            >
              Sign up
            </Link>
          </Navigation>
        </Header>

        <Content>
          <div className="page-content" />
          <Main></Main>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
