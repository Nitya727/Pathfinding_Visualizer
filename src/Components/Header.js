import react,{Component} from 'react';
import {Nav,NavbarBrand,Collapse, NavItem, Navbar,Form, FormGroup, Input} from 'reactstrap';
import './Header.css';

class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            isNavOpen:false,
            algo:'',
            speed:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        console.log(event.target.value)
        this.setState({
            algo:event.target.value,
            name:event.target.name
        })
        console.log(this.state.algo);
        event.preventDefault();
    }
    handleSubmit(event){
        event.preventDefault()

        console.log(this.state.speed)
        if(this.state.speed === 'fast')
        {
            this.props.fast()
        }
        else if(this.state.speed === 'normal')
        {
            this.props.normal()
        }
        else if(this.state.speed === 'slow')
        {
            this.props.slow()
        }

        setTimeout(()=>{
            console.log(this.state.algo)
            if(this.state.algo === 'Dijkstra'){
                this.props.dijkstra()
            }
            else if(this.state.algo === 'BFS'){
                this.props.bfs()
            }
            else if(this.state.algo === 'GBFS'){
                this.props.gbfs()
            }
            else if(this.state.algo === 'DFS'){
                this.props.dfs()
            }
            else if(this.state.algo === 'BBFS'){
                this.props.bbfs()
            }
            else if(this.state.algo === 'A*'){
                this.props.astar()
            }
        },100)
        
        event.preventDefault()
    }


    render( ){
        const val = this.props.dijkstra;

        return(
            <div>
                <Navbar dark expand="md" className="nav-bg">
                    
                    <NavbarBrand className="logo">Pathfinding Visualizer
                    </NavbarBrand>
                                     

                    <div className="container row">

                        <div className="nav">

                        <Collapse isOpen={this.state.isNavOpen} className="collapse navbar-collapse show">
                            <Nav className='head'>
                                <Form className='form' onSubmit={this.handleSubmit}>
                                    <NavItem className="navbar-nav">
                                        <FormGroup className='form-group'>
                                            <Input type='select' className="select" name='algo' onChange={(e) => this.setState({ algo: e.target.value })}>
                                                <option value='null'>Algorithm</option>
                                                <option value='Dijkstra'>Dijkstra</option>
                                                <option value='BFS'>BFS</option>
                                                <option value='GBFS'>Greedy BFS</option>
                                                <option value='DFS'>DFS</option>
                                                <option value='BBFS'>Bi-Directional BFS</option>
                                                <option value='A*'>A star</option>
                                            </Input>
                                        </FormGroup>
                                        <button type="submit" value="submit" style={{color:"white", padding:"10px", fontSize:"17px"}} className="btn btn-outline-info sub-btn"  >{`visualize ${this.state.algo !== 'null'? this.state.algo : '' }`} </button>
                                    </NavItem>
                                </Form>
                                <NavItem className="nav2">
                                    <button className="btn btn-primary btn-1" style={{color:"white", padding:"10px", fontSize:"17px"}} onClick={() => this.props.randomGrid()}>Random Grid</button>
                                </NavItem>
                                <NavItem className="nav2">
                                    <button className="btn btn-primary btn-2" style={{color:"white", padding:"10px", fontSize:"17px"}} onClick={() => this.props.randomWeight()}>Random Weight Grid</button>
                                </NavItem>
                                <NavItem className="nav2">
                                    <button className="btn btn-primary btn-2" style={{color:"white", padding:"10px", fontSize:"17px"}} onClick={() => this.props.clearGrid()}>Clear Grid</button>
                                </NavItem>
                                <NavItem className="nav2">
                                    <Input type='select' className="select speed" name='speed' onChange={(e) => this.setState({ speed: e.target.value })}>
                                        <option value='fast'>fast</option>
                                        <option value='normal'>normal</option>
                                        <option value='slow'>slow</option>
                                    </Input>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        </div>

                    </div>
                </Navbar>
                    
            </div>
        );
    }

}


export default Header;