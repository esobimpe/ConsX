import axios from "axios";

const serverURL = "https://api.consx.io";

export const login = async (email, password) => {
    const { data } = await axios.post(`${serverURL}/auth/login`, { email, password });
    localStorage.setItem("token", data.token);
    return data;
};

export const register = async (name, email, password, role) => {
    const { data } = await axios.post(`${serverURL}/auth/register`, {}, { name, email, password, role });
    localStorage.setItem("token", data.token);
    return data;
};

export const newRegister = async (name, email, password, role) => {
    console.log(serverURL);
    try {
        const response = await axios.post(
            `${serverURL}/auth/register`,
            { name, email, password, role } // Data should be passed as an object here
        );
        return response.data;
    } catch (error) {
        // Handle error appropriately
        console.error('Error in API call:', error);
        throw error; // Optionally rethrow or handle as needed
    }
};

export const logout = () => {
    localStorage.removeItem("token");
    return null;
};

export const loginBack = async () => {
    const token = localStorage.getItem("token");

    const { data } = await axios.get(`${serverURL}/auth/user`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return { user: data, token };
};

export const updatePassword = async (oldPassword, newPassword) => {
    const token = localStorage.getItem("token");

    console.log(oldPassword)
    const { data } = await axios.patch(
        `${serverURL}/auth/password`,
        { oldPassword: oldPassword, newPassword: newPassword },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return data;
}

export const updateUser = async (name, avatar, email) => {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
        `${serverURL}/auth/update-user`,
        { name: name, avatar: avatar, email: email },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return data;
}

export const getUsers = async () => {
    const token = localStorage.getItem("token");

    const { data } = await axios.get(`${serverURL}/auth/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return data;
}