import { useNavigate, useParams } from "react-router";
import { getNextUserStory } from "../../utils/helper";
import { stories } from "../../data/stories";
import { useEffect, useState } from "react";
import {preloadMedia } from "../../utils/preloadImage";

export const useStoryViewerController = () => {
    const { userId, storyId } = useParams();
    const navigate = useNavigate();
    const [isLoaded,setIsLoaded]=useState(false)
    const [muted, setMuted] = useState(true)

    // find current user and story
    const userIndex = stories.users.findIndex(user => user.username === userId);
    const user = stories.users[userIndex];
    const storyIndex = user ? user.stories.findIndex(story => story.id === storyId) : -1;
    const story = user.stories[storyIndex];

    //find next user in order to preload for smooth interaction
    const nextUserStory = getNextUserStory(stories, userIndex, storyIndex)?.story

    //check if its the last story in the database
    const isLastUserLastStory = () => {
        return userIndex === stories.users.length - 1 && storyIndex === user.stories.length - 1;
    };

    //preload media beforehand

    if (story) {
        preloadMedia(story?.mediaUrl, story?.type).then(() => setIsLoaded(true)) 
    }
    if (nextUserStory) {
        preloadMedia(nextUserStory?.mediaUrl, nextUserStory?.type)
    }


   //navigates users to the next story's route
    const nextStory = () => {
        if (isLastUserLastStory()) {
            return
        }
        if (user && storyIndex < user.stories.length - 1) {
            navigate(`/stories/${user.username}/${user.stories[storyIndex + 1].id}`);
        } else if (userIndex < stories.users.length - 1) {
            const nextUser = stories.users[userIndex + 1];
            navigate(`/stories/${nextUser.username}/${nextUser.stories[0].id}`);
        }
    };

    //navigates users to the previous story's route
    const prevStory = () => {
        if (user && storyIndex > 0) {
            navigate(`/stories/${user.username}/${user.stories[storyIndex - 1].id}`);
        } else if (userIndex > 0) {
            const prevUser = stories.users[userIndex - 1];
            navigate(`/stories/${prevUser.username}/${prevUser.stories[prevUser.stories.length - 1].id}`);
        }
    };

    // move to next story every 5 seconds
    
    useEffect(function autoMoveToNextStory() {
        const timer = setTimeout(() => {
            if (!isLastUserLastStory()) {
                nextStory();
            }
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [userIndex, storyIndex]);

    return {
        userId,
        storyId,
        navigate,
        muted,
        setMuted,
        userIndex,
        user,
        story,
        nextUserStory,
        nextStory,
        prevStory,
        isLoaded
    }
}