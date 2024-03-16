import axios, { AxiosError } from 'axios';
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
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    try {
        const response = await axios.post('http://localhost:8001/api/verify', { email, password: hashedPassword });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (!error.response) {
                return { success: false, message: 'Network Error.' };
            }
            return { success: false, message: error.response?.data.message || 'Network Error.' };
        }
        return { success: false, message: 'Network Error.' };
    }
};
