import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Form_Group = {
  margin: '5px 10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  textAlign: 'center'
}

const Form_Time_Group = {
  display: 'flex',
}

export default function FormInternal({handleSubmit}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState();
    const [time, setTime] = useState();

    const handleNameInput = (event) => {
      setName(event.target.value);
    }

    const handleEmailInput = (event) => {
      setEmail(event.target.value);
    }

    const handleDateInput = (event) => {
      setDate(event.target.value);
    }

    const handleTimeInput = (event) => {
      setTime(event.target.value);
    }

    return (
        <Form >
          <div className="registration-form">
            <div className="left-form">
              <Form.Group className="mb-3">
                <div style={Form_Group}>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="input" placeholder="Name" onChange={handleNameInput}/>
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <div style={Form_Group}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" onChange={handleEmailInput}/>
                </div>
              </Form.Group>
              <div style={Form_Time_Group}>
                <Form.Group className="mb-3">
                  <div style={Form_Group}>
                    <Form.Label>Date</Form.Label>
                    <div className="date-picker">
                      <Form.Control  type="date" onChange={handleDateInput}/>
                    </div>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <div style={Form_Group}>
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="input" placeholder="hh:mm" onChange={handleTimeInput}/>
                  </div>
                </Form.Group>
              </div>
            </div>
            <div className="right-form">
              <Button variant="primary" style={{width: '150px', height: '50px', borderRadius: '15px'}} onClick={() => handleSubmit({name, email, date, time})}>
                  Submit
              </Button>
            </div>
          </div>
        </Form>
    )
}