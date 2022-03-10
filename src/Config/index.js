import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUsers } from 'Api'

export const GlobalState = createContext()

export const DataProvider = ({ children }) => {
    const [token, setToken] = useState(false)
    const [clocks, setClocks] = useState('')
    const [week, setWeek] = useState('')
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState({})

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

        const getUserData = () => {
            getUsers({ token })
                .then((res) => {
                    setUserData(res.data.data)
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }

        setTimeout(() => {
            setLoading(false)
        }, 1500)

        setTimeout(() => {
            getToken()
        }, 1000)

        setTimeout(() => {
            getUserData()
        },10030)

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
        userData: [userData, setUserData]
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}