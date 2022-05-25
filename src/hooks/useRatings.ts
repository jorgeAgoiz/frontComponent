import { useEffect, useState } from 'react';
import { getRatings } from '../services/getRatings';
import { Data } from '../types/types';

interface Response {
    data: Data | undefined;
    isError: boolean;
    isLoading: boolean;
}

const useRatings = (): Response => {
    const [data, setData] = useState<Data>({})
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isError, setIsError] = useState<boolean>(false)

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                setIsLoading(true)
                const data = await getRatings()
                setIsLoading(false)
                setData(data)
                if (!data.recall) {
                    clearInterval(interval)
                }
            } catch (err) {
                setIsLoading(false)
                return setIsError(true)
            }
        }, 3000)
    }, [])

    return {
        data,
        isError,
        isLoading
    }
}

export default useRatings
