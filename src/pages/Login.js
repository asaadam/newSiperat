import React from 'react';
import { Button, Form } from 'semantic-ui-react'


export default function Login(props) {
    return (
        <div style={{display:"flex",justifyContent:'center'}}>
            <Form style={{width:'50vw'}}>
                <Form.Field>
                    <label>Username</label>
                    <input placeholder="Admin Id's" />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder="Admin password" />
                </Form.Field>
                <Button type='submit'>Login</Button>
            </Form>
        </div>
    )
}
