import React, { useEffect, useState } from 'react';

const UserDetails = ({ accessToken }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch('https://ssocitubfwtlezxetccn.supabase.co/auth/v1/user', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user details');
                }

                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUserDetails();
    }, [accessToken]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    );
};

export default UserDetails;