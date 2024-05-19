import React from 'react'
import StoryViewer from '../../components/storyViewer/StoryViewer'
import { stories } from '../../data/stories'

const StoryViewerContainer = () => {

    return (
        
     <StoryViewer stories={stories} />
           
    )
}

export default StoryViewerContainer