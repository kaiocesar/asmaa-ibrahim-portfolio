import React, { Component } from 'react';

class Contacts extends Component{
    render(){
        return (
            <main role="main" className="starter-template">
                <h1 className="cover-heading">Contacts</h1>
                <div className="row">
                    <div className="col-md-5">
                        <form method="GET" action="/contacts">
                            <div className="form-group">
                                <label for="inputName">Name:</label>
                                <input type="text" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter your name"></input>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email"></input>
                            </div>

                            <div className="form-group">
                                <label for="inputEmail">Message</label>
                                <textarea className="form-control" placeholder="Enter your message"></textarea>
                            </div>
                            
                            <button type="submit" className="btn btn-primary btn-salmon">Submit</button>
                        </form>
                    </div>
                </div>

            </main>                        
        );
    }
}

export default Contacts;