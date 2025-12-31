import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext({
    user: null,
    userAppointment: [],
});

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userAppointments, setUserAppointments] = useState(null);

    const login = async (userData) => {

        try {
        
                    const response = await axios.post(`https://centrodesaludappturnos.onrender.com/users/login`, userData);

                    setUserAppointments(response.data.user.appointments);
        
                    setUser(response.data.user);
                    return response.data;
        
                } catch (error) {
                    return {login: false, message: error.response.data.message};
                    }
       
    }

    const logout = () => {
        setUser(null);
    };

    
    const getAppointments = async () => {
                const res = await axios.get(`https://centrodesaludappturnos.onrender.com/appointments/${user.id}`);
                setUserAppointments(res.data);
            };

    const createAppointment = async (data) => {
        try {
            const response = await axios.post(`https://centrodesaludappturnos.onrender.com/appointments/schedule`, {...data, userId: user.Id});
            setUserAppointments((prevState) => [...prevState, response.data])
        } catch (error) {
            console.log(error);
            
        }

    }

    const cancelAppointment = async (id) => {
        await axios.put(`https://centrodesaludappturnos.onrender.com/appointments/cancel/${id}`);
        
        setUserAppointments((prevState) => prevState.map((elem) => {
            if(elem.id == id){
                elem.status = "cancelled";
            }
            return elem;
        }))
    }
    

    const value = {user, userAppointments, login, logout, getAppointments, cancelAppointment, createAppointment};
    return <UserContext.Provider value ={value}>{children}</UserContext.Provider>;
}