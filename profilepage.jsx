import React, { useState, useRef } from 'react';
import './profilepage.css';

const Profile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [errors, setErrors] = useState({});

    const fileInputRef = useRef(null);

    const handleSaveChanges = () => {
        const newErrors = {};

        if (!firstName) {
            newErrors.firstName = 'First name is required';
        } else if (!/^[A-Za-z]+$/.test(firstName)) {
            newErrors.firstName = 'First name must contain only letters';
        }

        if (!lastName) {
            newErrors.lastName = 'Last name is required';
        } else if (!/^[A-Za-z]+$/.test(lastName)) {
            newErrors.lastName = 'Last name must contain only letters';
        }

        if (!oldPassword) {
            newErrors.oldPassword = 'Old password is required';
        }

        if (!newPassword) {
            newErrors.newPassword = 'New password is required';
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(newPassword)) {
            newErrors.newPassword = 'Password must contain at least 8 characters, one letter, one number, and one special character';
        }

        if (!confirmNewPassword) {
            newErrors.confirmNewPassword = 'Confirm new password is required';
        } else if (newPassword !== confirmNewPassword) {
            newErrors.confirmNewPassword = 'Passwords do not match';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Add save logic here if no errors
            console.log('Form is valid. Submitting data...');
        }
    };

    const handleProfilePictureChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfilePicture(event.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleRemovePicture = () => {
        setProfilePicture(null);
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
                    <div className="profile-picture-placeholder">
                        {profilePicture ? (
                            <img src={profilePicture} alt="Profile" className="profile-picture-image" />
                        ) : (
                            <div className="profile-picture-placeholder-text">No profile picture</div>
                        )}
                    </div>
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
                            {profilePicture ? 'Update Pic' : 'Add Pic'}
                        </button>
                        {profilePicture && (
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
                        Old password
                        <input
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                        {errors.oldPassword && <div className="error">{errors.oldPassword}</div>}
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
                </div>
            </div>
        </div>
    );
};

export default Profile;
