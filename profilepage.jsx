
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './profilepage.css';

const Profile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [profilePictureUrl, setProfilePictureUrl] = useState('');
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const fileInputRef = useRef(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/secure', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const userData = response.data?.user;
                if (userData) {
                    setFirstName(userData.firstName);
                    setLastName(userData.lastName);
                    if (userData.profile_picture) {
                        setProfilePictureUrl(userData.profile_picture);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };
        fetchUserData();
    }, []);

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (firstName && !/^[A-Za-z]{3,15}$/.test(firstName)) {
            newErrors.firstName = 'First name must contain only letters and be between 3 to 15 characters';
        }

        if (lastName && !/^[A-Za-z]{0,15}$/.test(lastName)) {
            newErrors.lastName = 'Last name must contain only letters and be up to 15 characters';
        }

        if (newPassword && !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(newPassword)) {
            newErrors.newPassword = 'Password must contain at least 8 characters, one letter, one number, and one special character';
        }

        if (newPassword !== confirmNewPassword) {
            newErrors.confirmNewPassword = 'Passwords do not match';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const formData = new FormData();
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('current_password', currentPassword);
            if (newPassword) {
                formData.append('new_password', newPassword);
            }
            if (profilePicture) {
                formData.append('profile_picture', profilePicture);
            }

            try {
                const token = localStorage.getItem('token');
                const response = await axios.post('http://localhost:5000/update_profile', formData, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                setMessage(response.data.message);
                if (profilePicture) {
                    setProfilePictureUrl(URL.createObjectURL(profilePicture));
                }
            } catch (error) {
                setMessage(error.response?.data?.message || 'Error updating profile');
            }
        }
    };

    const handleProfilePictureChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfilePicture(e.target.files[0]);
            setProfilePictureUrl(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleRemovePicture = () => {
        setProfilePicture(null);
        setProfilePictureUrl('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>My Profile</h1>
            </div>
            <div className="profile-content">
                <div className="profile-picture">
                    {profilePictureUrl && (
                        <img src={profilePictureUrl} alt="Profile" className="profile-picture-image" />
                    )}
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        className="profile-picture-input"
                        onChange={handleProfilePictureChange}
                        ref={fileInputRef}
                    />
                    <div className="profile-picture-actions">
                        <button
                            className="profile-picture-button"
                            onClick={() => fileInputRef.current && fileInputRef.current.click()}
                        >
                            {profilePictureUrl ? 'Update Pic' : 'Add Pic'}
                        </button>
                        {profilePictureUrl && (
                            <button className="profile-picture-button" onClick={handleRemovePicture}>
                                Remove Pic
                            </button>
                        )}
                    </div>
                </div>
                <div className="profile-details">
                    <label>
                        First name
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors.firstName && <div className="error">{errors.firstName}</div>}
                    </label>
                    <label>
                        Last name
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {errors.lastName && <div className="error">{errors.lastName}</div>}
                    </label>
                    <label>
                        Current password
                        <input
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                        {errors.currentPassword && <div className="error">{errors.currentPassword}</div>}
                    </label>
                    <label>
                        New password
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        {errors.newPassword && <div className="error">{errors.newPassword}</div>}
                    </label>
                    <label>
                        Confirm new password
                        <input
                            type="password"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                        />
                        {errors.confirmNewPassword && <div className="error">{errors.confirmNewPassword}</div>}
                    </label>
                    <button className="save-button" onClick={handleSaveChanges}>
                        Save changes
                    </button>
                    {message && <div className="message">{message}</div>}
                </div>
            </div>
        </div>
    );
};

export default Profile;
