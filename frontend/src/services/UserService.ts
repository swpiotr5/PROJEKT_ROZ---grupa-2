import axios, { AxiosError } from 'axios';
import {useEffect, useState} from "react";
import bcrypt from 'bcryptjs';

export const registerUser = async (email: string, password: string) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    try {
        const response = await axios.post('http://localhost:8001/api/register', { email, password: hashedPassword });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.code === 'ECONNREFUSED') {
                return { error: true, message: 'Błąd połączenia z serwerem.' };
            }
            return { error: true, message: error.response?.data.message || 'Wystąpił błąd podczas łączenia z systemem.' };
        }
        return { error: true, message: 'Wystąpił błąd podczas łączenia z systemem.' };
    }
};

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await axios.post('http://localhost:8001/token/', { username: email, password }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });

        if (response.data.access) {
            localStorage.clear();
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;

            return { success: true };
        } else {
            return { success: false, message: response.data.detail || 'Network Error.' };
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (!error.response) {
                return { success: false, message: 'Network Error.' };
            }
            return { success: false, message: error.response?.data.detail || 'Network Error.' };
        }
        return { success: false, message: 'Network Error.' };
    }
};

export const Logout = () => {
    useEffect(() => {
    (async () => {
        try {
            const { data } = await axios.post(
                'http://localhost:8001/logout/',
                {
                    refresh_token: localStorage.getItem('refresh_token'),
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );
            localStorage.clear();
            axios.defaults.headers.common['Authorization'] = null;
            window.location.href = '/login';
        } catch (e) {
            console.log('logout not working', e);
        }
    })();
    }, []);
    return null;
}