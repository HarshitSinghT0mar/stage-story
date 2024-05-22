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
