import React, { useState, useEffect } from 'react';

const AccountPage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/protected_user');
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                } else {
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData(); // Вызов функции fetchUserData
    }, []); // Пустой массив зависимостей означает, что эффект будет выполняться только один раз после монтирования компонента

    if (!user) {
        return <div className="justify-content-center">Loading...</div>;
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="box">
                        <h1 className="title text-center">Account Information</h1>
                        <div className="text-center">
                            <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone Number:</strong> {user.phone_number}</p>
                            <p><strong>Username:</strong> {user.username}</p>
                        </div>
                    </div>
                    <div className="box">
                        <h1 className="title text-center">Orders</h1>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>2024.05.12-2024.05.15 <a href="/HomePage">Квартира с видом на парк</a></strong>
                                <p></p>
                                <button>Удалить аренду</button>
                                <p></p>
                                <button>Изменить даты аренды</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
