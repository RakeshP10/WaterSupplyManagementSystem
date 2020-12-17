import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,Form, FormGroup, Input, Label,Button  } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends Component { 
    constructor(props) {
        super(props);
    this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render()
    {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Login</BreadcrumbItem>
                </Breadcrumb>
                <div class="container">
                <div class="row">
                <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>   
                    </div>               
                </div>
            </div>
        </div>
    );
    }
}
export default Login;
