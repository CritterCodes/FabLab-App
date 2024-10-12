import axios from 'axios';

const TimesheetsApi = async () => {
    try {
        const response = await axios.get('/api/timesheets');
        return response.data;
    } catch (error) {
        console.error('Error fetching timesheets:', error);
        throw error;
    }
};

export default TimesheetsApi;