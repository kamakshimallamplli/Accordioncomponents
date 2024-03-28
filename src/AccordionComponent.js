import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Accordion from 'react-bootstrap/Accordion';
import './Accordion.css';

function AccordionComponent() {
 
 
 
    return (
       
            <Accordion>
      <Accordion.Item eventKey="0" className='spacecss'>
        <Accordion.Header>Here's the first Title</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
      </Accordion.Item>
            <div>
      <Accordion.Item eventKey="1" className='spacecss'>
        <Accordion.Header  >Here's the Second Title</Accordion.Header>
        <Accordion.Body >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </Accordion.Body>
      </Accordion.Item>
      </div>
      <div>
      <Accordion.Item eventKey="2" className='spacecss'>
        <Accordion.Header>Here's the Third Title</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Accordion.Body>
      </Accordion.Item>
      </div>
    </Accordion>
 
 
           
 
       
    );
}
 
export default AccordionComponent;