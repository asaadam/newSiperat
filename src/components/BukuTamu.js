import React,{useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { Form, Button } from 'semantic-ui-react'

const FormExampleFieldErrorLabel = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <Form>
            <Form.Input
                fluid
                label='Nama'
                placeholder='Adam S'
                required
            />
            <Form.Input
                fluid
                label='Asal'
                placeholder='Bem Fisip'
                required
            />
            <Form.Input
                fluid
                label='Keperluan'
                placeholder='Mengantar Undangan'
                required
            />
            <Form.Input
                fluid
                label='No hp / line'
                placeholder='08xxx'
                required
                type='number'
            />
            <Form.Field>
            <label>Tanggal Acara </label>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </Form.Field>
            <Button type='submit'>Submit</Button>



        </Form>
    )
}

export default function BukuTamu() {


    return (
        <FormExampleFieldErrorLabel />
    )
}