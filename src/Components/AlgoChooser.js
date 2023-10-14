import { Component } from 'react';
import {Container,Form, FormGroup, Input} from 'reactstrap';

class Chooser extends Component {
   render(){
       return(
        <Container>
            <div className="container">
                <div className="row">
                    <Form>
                        <FormGroup>Algorithm Visualizer
                            <Input type='select' name='algo' value=''>
                                <option>Algo chooser</option>
                            </Input>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </Container>
       );
   }
}

export default Chooser;