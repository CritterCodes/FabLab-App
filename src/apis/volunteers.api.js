import axios from 'axios';

const VolunteerApi = async () => {
    try {
        const response = await axios.get('/api/volunteer');
        return response.data;
    } catch (error) {
        console.error('Error fetching volunteer:', error);
        throw error;
    }
};

export default VolunteerApi;