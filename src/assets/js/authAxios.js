import Swal from 'sweetalert2'
import axios from 'axios'
import { customHeaders, authHeaders } from './headers'
const authAxios = () => {

    const registerSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        axios.post(`http://${import.meta.env.VITE_IPV4}:3000/user/register`, formData, { headers: customHeaders })
            .then(res => { window.location.href = '/login'; })
            .catch(err => {
                const errorMessage = Array.isArray(err.response.data.error)
                    ? err.response.data.error[0]
                    : err.response.data.error;
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    timer: 1000,
                    text: errorMessage,
                    showConfirmButton: false,
                    showCancelButton: false,
                    position: 'center',
                })
            })
    }

    const loginSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        axios.post(`http://${import.meta.env.VITE_IPV4}:3000/user/login`, formData, { headers: customHeaders, withCredentials: true })
            .then(res => {
                localStorage.setItem('isLoggedIn', true);
                window.location.href = `/home`;
            })
            .catch(err => {
                const errorMessage = err.response
                    ? (Array.isArray(err.response.data.error)
                        ? err.response.data.error[0]
                        : err.response.data.error)
                    : 'Restricted Domain';

                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    timer: 1000,
                    text: errorMessage,
                    showConfirmButton: false,
                    showCancelButton: false,
                    position: 'center',
                })
            })
    }

    const logoutSubmit = () => {
        axios.post(`http://${import.meta.env.VITE_IPV4}:3000/user/logout`, {}, { withCredentials: true })
            .then(res => {
                localStorage.removeItem('isLoggedIn');
                window.location.href = '/login'
            })
            .catch(err => {
                console.log(err)
            })
    }

    const redirect = () => {
        axios.post(`http://${import.meta.env.VITE_IPV4}:3000/user/redirect`, {}, { withCredentials: true })
            .then(res => {
                localStorage.setItem('isLoggedIn', true);
                window.location.href = `/home`;
            })
            .catch(err => {
                const errorMessage = err.response
                    ? (Array.isArray(err.response.data.error)
                        ? err.response.data.error[0]
                        : err.response.data.error)
                    : 'Restricted Domain';

                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    timer: 1000,
                    text: errorMessage,
                    showConfirmButton: false,
                    showCancelButton: false,
                    position: 'center',
                })
            })
    }

    return { registerSubmit, loginSubmit, redirect, logoutSubmit }

}

export default authAxios