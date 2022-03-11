import {Table} from 'react-bootstrap';
export default function Statistics({display, registrations}) {
    return (
      <div className="statistics">
        {display ? 
          <Table striped bordered hover>
            <thead>
              <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map ((regis) => 
                <tr key={regis.id}>
                  <td>{regis.id}</td>
                  <td>{regis.name}</td>
                  <td>{regis.email}</td>
                  <td>{regis.date}</td>
                  <td>{regis.time}</td>
                </tr>)}
            </tbody>
          </Table>
          :
          null
        }

      </div>
    )
}