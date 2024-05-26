import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoryList from '../components/storyList/StoryList';
import StoryViewer from '../components/storyViewer/StoryViewer';


const AppRoutes= () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StoryList />} />
                <Route path="/stories/:userId/:storyId" element={<StoryViewer />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;