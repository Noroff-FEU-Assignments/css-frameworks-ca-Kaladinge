import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function FormPart() {
    return (
        <>
            <h1>Submit your details</h1>
            <Form className="form">
                <Form.Group className="mb-3 form__group" controlId="exampleForm.ControlInput1">
                    <Form.Label className="form__label">Name</Form.Label>
                    <Form.Control type="name" className="form__control"/>
                </Form.Group>
                <Form.Group className="mb-3 form__group" controlId="exampleForm.ControlInput1">
                    <Form.Label className="form__label">Email</Form.Label>
                    <Form.Control type="email" className="form__control"/>
                </Form.Group>
                <Form.Group className="mb-3 form__group" controlId="exampleForm.ControlInput1">
                    <Form.Label className="form__label">Website</Form.Label>
                    <Form.Control type="website" className="form__control"/>
                </Form.Group>
                <Form.Group className="mb-3 form__group" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="form__label">Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={10} className="form__control"/>
                </Form.Group>
                <Form.Group className="mb-3 form__group" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" 
                                className="form__check"/>
                </Form.Group>
                <Button type="submit" className="btn-primary btn-dark">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default FormPart
