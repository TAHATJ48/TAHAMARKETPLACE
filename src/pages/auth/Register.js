import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signin } from './API';
import { Form, Button, Container } from 'react-bootstrap';

export default function SignUp() {

    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
    <Container className=''>
    <Form onSubmit={handleSubmit(async (form) => {
            
        let response = await signin(form)

        localStorage.setItem('token', response.data.token)

        navigate('/')

    })}>
        <br/>
        <br/>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label className='label'><h2>FirstName</h2></Form.Label>
            <br/>
            <Form.Control className='form' type="text" placeholder="FirstName" {...register("firstname", { required: true })}  />
            {errors.firstname && <span>This field is required</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label className='label'><h2>LastName</h2></Form.Label>
            <br/>
            <Form.Control className='form' type="text" placeholder="LastName" {...register("lastname", { required: true })} />
            {errors.lastname && <span>This field is required</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='label'><h2>Email</h2></Form.Label>
            <br/>
            <Form.Control className='form' placeholder="Enter email" type="email" 
                {...register("email", { 
                    required: true,  
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format"
                    }
                })}/>
            {errors.email && <span>This field is required</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='label' ><h2>Password</h2></Form.Label>
            <br/>
            <Form.Control className='form' type="password" placeholder="Password" {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}
        </Form.Group>

        <Button  className='submit d' variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    </Container>
    )

}
