import { useEffect, useState } from "react"

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
}

type TrafficLightColor = keyof typeof colors;


export const useTrafficLight = () => {
    const [light, setLight] = useState<TrafficLightColor>('red')
    const [countdown, setCountdown] = useState(5)

    useEffect(() => {
        if (countdown === 0) return

        const intervalId = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [countdown])

    useEffect(() => {
        if (countdown > 0) return

        setTimeout(() => {
            setCountdown(5)
        }, 1000)

        if (light === 'red') {
            setTimeout(() => {
                setLight('green')
            }, 1000)
            return
        }

        if (light === 'yellow') {
            setTimeout(() => {
                setLight('red')
            }, 1000)
            return
        }

        if (light === 'green') {
            setTimeout(() => {
                setLight('yellow')
            }, 1000)
            return
        }


    }, [light, countdown])

    return {
        countdown,
        light,
        colors,

        percentage: (countdown / 5) * 100,
        greenLight: light === 'green' ? colors[light] : 'bg-gray-500',
        redLight: light === 'red' ? colors[light] : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors[light] : 'bg-gray-500',
    }
}
