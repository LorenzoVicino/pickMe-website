import React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import { Container } from "../components/styled";
import HomeBody from "../components/HomeBody";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  return (
    <Layout>
      <Container size='fullwidth'>
        <Hero />
        <HomeBody />
        <ToastContainer/>
      </Container>
    </Layout>
  );
};

export default HomePage;
