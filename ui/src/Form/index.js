import { Button, Form } from "react-bootstrap";
import './index.css';

const Form_Style = {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'row wrap',
    height: '300px',
    width: '300px',
    backgroundColor: '#07abf3',
}

const Form_left_Style = {
  width: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'stretch',
  textAlign: 'center'
}

const Form_Right_Style = {
  width: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
}

const Form_Group = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
}

export default function RegistrationForm() {
    return (
        <Form>
          <div style={Form_Style}>
            <div style={Form_left_Style}>
              <Form.Group className="mb-3">
                <div style={Form_Group}>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="input" placeholder="Enter email" />
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <div style={Form_Group}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Password" />
                </div>
              </Form.Group>
            </div>
            <div style={Form_Right_Style}>
              <Button variant="primary" type="submit">
                  Submit
              </Button>
            </div>
          </div>
        </Form>
    )
}