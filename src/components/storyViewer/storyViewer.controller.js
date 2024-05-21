import { useNavigate, useParams } from "react-router";
import { getMediaType, getNextUserStory } from "../../utils/helper";
import { stories } from "../../data/stories";
import { useEffect, useState } from "react";
import { preloadImage, preloadMedia } from "../../utils/preloadImage";

export const useStoryViewerController = () => {
    const { userId, storyId } = useParams();
    const navigate = useNavigate();
    const [isLoaded,setIsLoaded]=useState(false)
    const [muted, setMuted] = useState(true)
    const userIndex = stories.users.findIndex(user => user.username === userId);
    const user = stories.users[userIndex];
    const storyIndex = user ? user.stories.findIndex(story => story.id === storyId) : -1;
    const story = user.stories[storyIndex];
    const mediaType = getMediaType(story?.mediaUrl)
    const nextUserStory = getNextUserStory(stories, userIndex, storyIndex)?.story
    const nextStoryMediaType=getMediaType(nextUserStory?.mediaType)
    // preloadMedia(story.mediaUrl, mediaType).then(() => {
    //     setIsLoaded(true)
    // })

    mediaType==='image' && preloadImage(story.mediaUrl, mediaType).then(()=>setIsLoaded(true))
    nextStoryMediaType==='image' && preloadMedia(nextUserStory.mediaUrl, nextStoryMediaType)


    const nextStory = () => {
        if (user && storyIndex < user.stories.length - 1) {
            navigate(`/stories/${user.username}/${user.stories[storyIndex + 1].id}`);
        } else if (userIndex < stories.users.length - 1) {
            const nextUser = stories.users[userIndex + 1];
            navigate(`/stories/${nextUser.username}/${nextUser.stories[0].id}`);
        }
    };

    const prevStory = () => {
        if (user && storyIndex > 0) {
            navigate(`/stories/${user.username}/${user.stories[storyIndex - 1].id}`);
        } else if (userIndex > 0) {
            const prevUser = stories.users[userIndex - 1];
            navigate(`/stories/${prevUser.username}/${prevUser.stories[prevUser.stories.length - 1].id}`);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            nextStory();
        }, 5000);

        return () => {
            clearTimeout(timer)
        }
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
        mediaType,
        nextStory,
        prevStory,
        isLoaded
    }
}