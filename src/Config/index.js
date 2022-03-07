import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GlobalState = createContext()

export const DataProvider = ({ children }) => {
    const [token, setToken] = useState(false)
    const [clocks, setClocks] = useState('')
    const [week, setWeek] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setWeek(day)
    }, [])

    useEffect(() => {
        const getToken = async () => {
            try {
                const value = await AsyncStorage.getItem('token')
                if (value !== null) {
                    setToken(value)
                }
            } catch (err) {
                console.log(err);
            }
        }

        setTimeout(() => {
            setLoading(false)
        }, 2500)

        setTimeout(() => {
            getToken()
        }, 1000)

    }, [token])


    const clock = () => {
        let hours = new Date().getHours()
        let minutes = new Date().getMinutes()
        let secunt = new Date().getSeconds()

        setClocks(hours + ':' + minutes + ':' + secunt)
    }
    const day = new Date().toDateString()

    setInterval(clock, 1000)

    const state = {
        token: [token, setToken],
        clocks: [clocks, setClocks],
        week: [week, setWeek],
        loading: [loading, setLoading],

    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}