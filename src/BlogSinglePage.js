import React, { Component } from 'react';

class BlogSinglePage extends Component {

    constructor(props){
        super(props);

        this.state = {
            posts: [],
            dataRoute: 'http://api.asmaaibrahim.com/wp-json/wp/v2/posts/'
        }
    }


    render(){
        const { match } = this.props;
        const pageId = match.params.id;

        return(
            <main role="main" className="starter-template">
                <h1 className="cover-heading">Blog single</h1>
                <h1>Page ID: { pageId }</h1>
                
            </main>
        );
    }
    
    componentDidMount(){
        const { match } = this.props;
        const pageId = match.params.id;
        
        console.log(this.state.dataRoute + pageId);

        fetch(this.state.dataRoute + pageId)
        .then(res => res.json())
        .then(posts => this.setState((preState, props)=>{
            this.setState({
                posts: posts
            });
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


export default BlogSinglePage;