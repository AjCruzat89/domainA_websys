import Swal from 'sweetalert2';
import axios from 'axios';
import { customHeaders, authHeaders } from './headers';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

const homeAxios = (setUser) => {

    const auth = () => {
        axios.post(`http://${import.meta.env.VITE_IPV4}:3000/user/auth`, {}, { withCredentials: true })
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
                console.log(err);
                window.location.href = '/login';
            });
    };

    const isLoggedIn = localStorage.getItem('isLoggedIn');

    useEffect(() => {
        if (isLoggedIn) {
            auth();
        } else {
            window.location.href = '/login';
        }
    }, [isLoggedIn]);

    useEffect(() => {
        const socket = io(`http://${import.meta.env.VITE_IPV4}:3000`, {
            reconnection: true,
        });

        socket.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        socket.on('logout', () => {
            auth();
        })

        socket.on('disconnect', () => {
            console.log('disconnected');
        });

        socket.on('reconnect_failed', () => {
            console.log('Reconnection failed');
        });

        return () => {
            socket.disconnect();
            socket.off();
        };
    }, []);

    return { auth };

};

export default homeAxios;
