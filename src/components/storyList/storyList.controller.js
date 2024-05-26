import { useNavigate } from "react-router"
import { stories } from "../../data/stories"

export const useStoryListController = () => {
    const navigate = useNavigate()

    const handleStoryClick = (user) => {
        navigate(`/stories/${user?.username}/${user?.stories[0]?.id}`)
    }


    return {
        stories,
        handleStoryClick
    }
}