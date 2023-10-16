export default {
    postData: async (url:string, data: any) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers you need, e.g., authorization headers
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();
                return responseData;
            } else {
                // Handle the error response
                console.error('POST request failed:', response.status, response.statusText);
            }
        } catch (error) {
            // Handle any network or other errors
            console.error('POST request error:', error);
        }
    }
}