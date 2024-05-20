import { Line } from 'rc-progress';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const StoryProgress = ({ user, story }) => {
    const { storyId } = useParams();
    const [progress, setProgress] = useState(0);

    const storyIndex = user ? user.stories.findIndex(s => s.id === storyId) : -1;

    useEffect(() => {
        let interval;
        if (storyIndex !== -1) {
            setProgress(0);
            interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return prev + 2;
                });
            }, 100);
        }
        return () => clearInterval(interval);
    }, [storyIndex]);

    const getProgress = (index) => {
        if (index < storyIndex) return 100;
        if (index === storyIndex) return progress;
        return 0;
    };

    return (
        <div className='w-full flex absolute top-2 px-2'>
            {user?.stories?.map((s, index) => (
                <Line
                    key={s?.id}
                    className='mx-1'
                    percent={getProgress(index)}
                    trailColor='#ccc'
                    strokeColor={"#7C120C"}
                    strokeWidth={2}
                    trailWidth={2}
                    strokeLinecap='square'
                    style={{ flex: 1 }}
                />
            ))}
        </div>
    );
};

export default StoryProgress;
