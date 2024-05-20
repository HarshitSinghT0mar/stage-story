export const getMediaType = (url) => {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
    const videoExtensions = ['mp4', 'webm', 'ogg', 'mov'];

    const extension = url?.split('.')?.pop()?.toLowerCase();

    if (imageExtensions.includes(extension)) {
        return 'image';
    } else if (videoExtensions.includes(extension)) {
        return 'video';
    } else {
        return 'image';
    }
};

export const getNextUserStory = (stories, userIndex, storyIndex) => {
    if (userIndex === -1 || storyIndex === -1) return null;

    const user = stories.users[userIndex];

    if (storyIndex < user.stories.length - 1) {
        return { user, story: user.stories[storyIndex + 1], userIndex, storyIndex: storyIndex + 1 };
    } else if (userIndex < stories.users.length - 1) {
        const nextUser = stories.users[userIndex + 1];
        return { user: nextUser, story: nextUser.stories[0], userIndex: userIndex + 1, storyIndex: 0 };
    }else
    return null;
};
