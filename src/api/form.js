import axios from "axios";

const serverURL = "https://api.consx.io";

export const addForm = async (formData) => {
    const { data } = await axios.post(
        `${serverURL}/form`,
        { formData }
    );

    return data;
}