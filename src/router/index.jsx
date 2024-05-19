import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoryListContainer from '../containers/storyListContainer/StoryListContainer';
import StoryViewerContainer from '../containers/storyViewerContainer/StoryViewerContainer';


const AppRoutes= () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StoryListContainer />} />
                <Route path="/stories/:userId/:storyId" element={<StoryViewerContainer />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;