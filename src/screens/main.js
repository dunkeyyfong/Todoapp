import React, { useState, useEffect } from 'react'
import { View, Text } from "react-native";
import DateTime from '../components/date';

export default function MainScreen() {

    return (
        <View className="bg-[#4a3780]">
            <DateTime />
            <Text className="text-center font-bold text-3xl text-neutral-50">My Todo List</Text>
        </View>
    )
}