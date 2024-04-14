import React from "react"
import { useRoutes, navigate } from 'hookrouter';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import {
    Divider, Grid
} from '@material-ui/core';
import Register from './Local/register';
import Login from './Local/login';
import Verification from './Local/verification';
import ResetPassword from './Local/resetPassword';
import ForgotPassword from './Local/forgotPassword';
import Navbar from '../Navigation/navbar/navbar';

import GoogleAuth from './google';
import FacebookAuth from './facebook';

import './style.css'
import { HTML404 } from '../ErrorPage/Error';
import { responsive } from '../utils/data.json';

// Styled Components =====================================================

let AuthPage = styled.div`
    width: 100%;
    min-height: 100%;
    display: grid;
    margin-top: 100px;
    font-family: SF Pro;
    font-style: normal;

    .auth-container{
        margin-bottom: 10em;
        background: #FFFFFF;
        border-radius: 10px;
        box-sizing: border-box;
        max-width: 800px;
        width: 90%;
        place-self: center;
        padding: 35px 50px 35px 50px;

        @media(max-width:${responsive.small}){
            font-size: 10px;
        }

        .heading{
            display: flex;
            justify-content: space-evenly;
            margin-top: 10px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #7e7e7e;
            cursor: pointer;
            .chng-btn{
                width: 40%;
                height: 3em;
                text-align: center;
                border-radius: 5px;
                border-style: none;
                color: #050831;
                background-color: #eeeeee;
            }
            .active{
                    background-color: #43b9dd;
                }
        }
    }
`;

let OrBlock = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin: 20px 0 20px 0;
    align-items: center;
    grid-column-gap: 30px;
    span{
        align-self: center;
        font-size: 2em;
    }

    .MuiDivider-root{
        background-color: rgba(66, 66, 89, 0.2);
        /* background-color: red; */
    }
`;

let OtherAuthMethods = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    .google-btn{
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;

        .google-btn-img{
            width: 100%;
            box-sizing: border-box;
        }
    }

    >*{
        margin-top: 5px;
    }
`;
// ========================================================================



const routes = {
    '/': () => ({ obj: <Login />, str: 'login' }),
    '/login': () => ({ obj: <Login />, str: 'login' }),
    '/register': () => ({ obj: <Register />, str: 'register' }),
    '/send-verification': () => ({ obj: <Verification />, str: 'verification' }),
    '/forgot-password': () => ({obj: <ForgotPassword />, str: 'forgot-password'}),
    '/reset-password': () => ({obj: <ResetPassword />, str: 'reset-password'})
}

function Auth() {
    let page = useRoutes(routes);

    return (
        (page && 
            <AuthPage>
            <div className="auth-container">
                {/* <div className="heading">
                    <Button active={page.str === 'register'} className="chng-btn" onClick={()=>navigate('/auth/register')}>Register</Button>
                    <Button active={page.str === 'login'} className="chng-btn" onClick={()=>navigate('/auth/login')}>Login</Button>
                </div> */}
                { page.obj }
                <OrBlock>
                    {/* <div></div> */}
                    <Divider light/>
                    <span>Or</span>
                    <Divider light />
                    {/* <div></div> */}
                </OrBlock>

                <Grid container xs={12} spacing={3} >
                    <Grid item sm={12} md={6}>
                        <GoogleAuth />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <FacebookAuth />
                    </Grid>
                </Grid>
          </div>
            </AuthPage>) || <HTML404 />
  );
}
export default Auth;