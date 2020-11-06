import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import LayOutPosts from '../components/LayOutPosts';
import Trending from '../components/Trending';
import UserContext from '../contexts/UserContext';
import { Loading, CurrentPage, PostsListContainer } from '../components/SmallerComponents';
import UserInput from '../components/UserInput';

//checar identação do PostsListContainer

import Modal from '../components/Modal';

export default function MyPostsPage () {
    const { header, userData } = useContext(UserContext);
    const [ myPosts, setMyPosts ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
   
    useEffect(getPostsList,[]);

    function getPostsList () {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${userData.user.id}/posts?offset=0&limit=10`,header);
        request.then( response => { 
            setMyPosts([...response.data.posts])
            setIsLoading(false) 
        });
        request.catch( () => alert('There was an error when loading the posts, please refresh the page') );
    }

    return (
        <>
            <Header />

            { isLoading

                ? <Loading />

                : <CurrentPage>
                    <h1>my posts</h1>

                    <div>
                        <PostsListContainer>
                            <UserInput getPostsList={getPostsList}/>
                            
                            {myPosts.length > 0 && myPosts.map( 
                                eachPost => <LayOutPosts post={eachPost} getPostsList={getPostsList} key={eachPost.id} /> 
                            )}
                        </PostsListContainer>
                        
                        <Trending />
                    </div>
                </CurrentPage>
            }
        </>
    );
}