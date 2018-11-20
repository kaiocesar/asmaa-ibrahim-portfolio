import React, { Component } from 'react';

class Blog extends Component{

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            dataRoute: 'http://api.asmaaibrahim.com/wp-json/wp/v2/posts?categories=3',
        }
    }

    render(){
        return (
            <main role="main" className="starter-template">
                <h1 className="cover-heading">Blog</h1>
                <div className="row">
                    {this.state.posts.map((post)=>
                        <div className="" key={`post-${post.id}`}>
                            {/* <img className="card-img-right flex-auto d-none d-md-block" src="https://picsum.photos/g/150/150" data-holder-rendered="true" alt="test"></img> */}
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-primary"></strong>
                                <h3 className="mb-0">
                                    <a className="text-dark" href="/#">{post.title}</a>
                                </h3>
                                <div className="mb-1 text-muted">{ post.created_at }</div>
                                <p className="card-text mb-auto" dangerouslySetInnerHTML={{__html: post.text_short }} />
                                <a href="/#/blog">Continue reading</a>
                            </div>
                            
                        </div>    
                    )} 
                </div>
            </main>
        )
    };

    componentDidMount(){
        fetch(this.state.dataRoute)
        .then(res => res.json())
        .then(posts => this.setState((preState, props)=>{
            return { posts: posts.map(this.mapPost)};
        }));
    }

    mapPost(post){
        return {
            id: post.id,
            created_at: post.date,
            title: post.title.rendered,
            image: post.acf.image.url,
            text_full: post.content.rendered,
            text_short: post.excerpt.rendered
        }
    }

}

export default Blog