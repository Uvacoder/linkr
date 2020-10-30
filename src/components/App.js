import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HashtagPage from '../pages/HashtagPage';
import LoginPage from '../pages/LoginPage';
import MyPostsPage from '../pages/MyPostsPage';
import TimelinePage from '../pages/TimelinePage';
import UserPage from '../pages/UserPage';
import { UserContextProvider } from '../contexts/UserContext';

export default function App () {
    
    return (    
        <Router basename='/Linkr'>
            <Switch>
                <UserContextProvider>
                    <Route path='/' exact component={LoginPage} />
                    <Route path='/timeline' exact component={TimelinePage} />
                    <Route path='/my-posts' exact component={MyPostsPage} />
                    <Route path='/user/:id' exact component={UserPage} />
                    <Route path='/hashtag/:hashtag' exact component={HashtagPage} />
                </UserContextProvider>
            </Switch>
        </Router>
    );
}