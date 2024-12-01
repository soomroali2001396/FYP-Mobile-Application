const API_KEY = 'AIzaSyD1BEMCfNUT-DIw-4jA5k5kTvGc7hO3u20';
const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

export const generateContent = async (prompt) => {
    try {
        const response = await fetch(`${BASE_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: prompt }],
                    },
                ],
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch the API');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error generating content:', error);
        throw error;
    }
};
