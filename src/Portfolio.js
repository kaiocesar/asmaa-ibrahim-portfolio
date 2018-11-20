import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Portfolio extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          jobs: [],
          dataRoute: 'http://api.asmaaibrahim.com/wp-json/wp/v2/posts?categories=2',
          modal: false,
          title: 'title'
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render(){
        return (
            <main role="main" className="starter-template">

                <h1 className="cover-heading">Portfolio</h1>                        

                <div className="row">
                    {this.state.jobs.map((job)=>
                        <div className="job-card col-4" key={`job-${job.id}`}>
                            
                            <img onClick={this.toggle} className="card-img-top img-fluid img-thumbnail" src={job.image} alt={job.title}></img>
                            
                            <div className="card-body">
                                <h6 class="card-title">{ job.title }</h6>
                            </div>                        
                        </div>
                    )}        
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} id="modal-jobs">
                    <ModalHeader toggle={this.toggle}> Attention </ModalHeader>
                    <ModalBody>
                        <img src="http://via.placeholder.com/480x333?text=Image%20Not%20found" alt="img" className="img-fluid"></img>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>

            </main>
        );
    }

    componentDidMount(){
        fetch(this.state.dataRoute)
        .then(res => res.json())
        .then(jobs => this.setState((preState, props)=>{
            return { jobs: jobs.map(this.mapJob)};
        }));
    }

    mapJob(job){
        return {
            id: job.id,
            title: job.title.rendered,
            image: job.acf.image.url
        }
    }

}

export default Portfolio;