import React from 'react';
import Tittle from '../components/Tittle';
import allBlogs from '../components/allBlogs';

function BlogsPage() {
    return (
        <div >
            <div className="b-title">
                 <Tittle title={'Recent Blogs'} span={'Recent Blogs'} />
            </div>
            <div className="blogPage">
                {
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <div className="inside">
                                    <img src={blog.image} alt="" />
                                </div>
                                <a href={blog.link} className="blog-link" target="_blank">{blog.title}</a>

                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default BlogsPage;