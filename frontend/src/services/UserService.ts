import axios, { AxiosError } from 'axios';
import {useEffect, useState} from "react";
import bcrypt from 'bcryptjs';

export const registerUser = async (email: string, password: string) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    try {
        const response = await axios.post('http://localhost:8000/api/register', { email, password: hashedPassword });
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
        const response = await axios.post('http://localhost:8000/api/login/', { username: email, password }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });

        if (response.data.token) {
            localStorage.clear();
            localStorage.setItem('access_token', response.data.token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

            return { success: true };
        } else {
            return { success: false, message: response.data.detail || 'Network Error.1' };
        }
    } catch (error) {
        console.log(error);
        if (axios.isAxiosError(error)) {
            if (!error.response) {
                return { success: false, message: 'Network Error.2' };
            }
            return { success: false, message: error.response?.data.detail || 'Network Error3.' };
        }
        return { success: false, message: 'Network Error4.' };
    }
};

export const logoutUser = async () => {
    try {
        const token = localStorage.getItem('access_token');
        console.log('Sending request with headers:', {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        await axios.post('http://localhost:8000/api/logout/', {}, {
            headers: { 
                'Content-Type': 'application/json' ,
                'Authorization': `Token ${token}`
            },
            
        });
        localStorage.clear();
        delete axios.defaults.headers.common['Authorization'];
        window.location.href = '/login';
    } catch (e) {
        console.log('logout not working', e);
    }
}