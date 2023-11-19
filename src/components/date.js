import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

export default function DateTime() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000 * 60 * 60 * 24);

        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return `${monthNames[monthIndex]} ${day}, ${year}`;
    }

    return (
        <View>
            <Text className="text-neutral-50 text-sm text-center mb-8">
                {formatDate(currentDate)}
            </Text>
        </View>
    )

}