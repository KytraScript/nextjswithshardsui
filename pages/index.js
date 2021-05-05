import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Alert } from 'shards-react';
import Navigation from '../components/Navigation'
import { Container, Row, Col } from "shards-react";
import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    FormInput,
    InputGroup
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

const Home = () => {
    return(
        <>
            <Head>
                <title>NextJS with ShardsUI Boiler</title>
            </Head>
            <>
                <h2>Welcome to your placeholder page!</h2>
                <Alert theme="primary">
                    Alert - Primary Theme (default) -{" "}
                    <a className="alert-link" href="#">
                        Example Link
                    </a>
                </Alert>
                <Navigation />
                </>
            </>
    )
}

export default Home;
