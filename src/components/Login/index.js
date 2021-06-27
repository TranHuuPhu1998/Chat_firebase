import React from 'react'
import {Row , Col , Button, Typography} from 'antd'
import firebase, {auth} from '../../firebase/config';
import { addDocument , generateKeywords } from '../../firebase/services';

const googleProvider = new firebase.auth.GoogleAuthProvider();

const {Title} = Typography;


const Login = () => {


    const handleLogin = async (provider)=> {
        const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
       
        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName?.toLowerCase()),
              });
        }
    }

    return (
        <div>
            <Row justify="center" style={{height:'80px'}}>
                <Col span={8}>
                    <Title style={{textAlign:'center'}}>FunChat</Title>
                    <Button 
                        onClick={() => handleLogin(googleProvider)}
                        style={{width:'100%',marginBottom:5}}>Đăng nhập bằng Google</Button>

                </Col>
            </Row>
        </div>
    )
}

export default Login
