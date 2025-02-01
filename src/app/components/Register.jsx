'use client';
import { Lato, Inter } from 'next/font/google';
import styles from './styles/Register.module.css';
import { useState } from 'react';
import { SquareUserRound, User, Mail, MapPin, GraduationCap, Accessibility, Phone, Image, DollarSign } from 'lucide-react'; // Import all icons

const lato = Lato({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-lato',
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '600'],
    variable: '--font-inter',
});

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        module: '',
        gender: '',
        disabled: '',
        phone: '',
        image: null,
        amount: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? e.target.files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/register', { // Replace with your API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Registration failed');
            }

            console.log('Registration successful!');
            setFormData({ // Reset the form
                firstName: '',
                lastName: '',
                email: '',
                location: '',
                module: '',
                gender: '',
                disabled: '',
                phone: '',
                image: null,
                amount: '',
                description: '',
            });

            alert("Registration Successful!"); // User feedback

        } catch (error) {
            console.error('Registration error:', error);
            alert(error.message); // User-friendly error message
        }
    };

    return (
        <section className={styles.register}>
            <div className={styles['register-container']}>
                <div className={styles['register-steps']}>
                    {/* ... steps content ... */}
                </div>

                <div className={styles['register-form-container']}>
                    <h2 className={styles.registerHeading}>Register</h2>
                    <form className={styles['register-form']} onSubmit={handleSubmit}>
                        <div className={styles['form-row']}>
                            <div className={styles['form-group']}>
                                <div className={styles['input-container']}>
                                    <div className={styles['input-wrapper']}>
                                        <User className={styles['input-icon']} />
                                        <input type="text" id="firstName" name="firstName" placeholder="First name" required value={formData.firstName} onChange={handleChange} className={styles.input} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles['form-group']}>
                                <div className={styles['input-container']}>
                                    <div className={styles['input-wrapper']}>
                                        <User className={styles['input-icon']} />
                                        <input type="text" id="lastName" name="lastName" placeholder="Last name" required value={formData.lastName} onChange={handleChange} className={styles.input} />
                                    </div>
                                </div>
                            </div>

                            <div className={styles['form-group']}>
                                <div className={styles['input-container']}>
                                    <div className={styles['input-wrapper']}>
                                        <Mail className={styles['input-icon']} />
                                        <input type="text" id="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className={styles.input} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles['form-group']}>
                                <div className={styles['input-container']}>
                                    <div className={styles['input-wrapper']}>
                                        <MapPin className={styles['input-icon']} />
                                        <input type="text" id="location" name="location" placeholder="Location" required value={formData.location} onChange={handleChange} className={styles.input} />
                                    </div>
                                </div>
                            </div>

                            <div className={styles['form-group']}>
                                <div className={styles['input-container']}>
                                    <div className={styles['input-wrapper']}>
                                        <GraduationCap className={styles['input-icon']} />
                                        <select name="module" required value={formData.module} onChange={handleChange} className={styles.input}>
                                            <option value="">Choose module</option>
                                            <option value="software-development">Software Development</option>
                                            <option value="data-science">Data Science</option>
                                            <option value="cloud-computing">Cloud Computing</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className={styles['form-group']}>
                                <div className={styles['input-container']}>
                                    <div className={styles['input-wrapper']}>
                                        <SquareUserRound className={styles['input-icon']} />
                                        <select name="gender" required value={formData.gender} onChange={handleChange} className={styles.input}>
                                            <option value="">Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className={styles['form-group']}>
                                <div className={styles['input-container']}>
                                    <div className={styles['input-wrapper']}>
                                        <Accessibility className={styles['input-icon']} />
                                        <select name="disabled" required value={formData.disabled} onChange={handleChange} className={styles.input}>
                                            <option value="">Disabled</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className={styles['form-group']}>
                                <div className={styles['input-container']}>
                                    <div className={styles['input-wrapper']}>
                                        <Phone className={styles['input-icon']} />
                                        <input type="text" id="phone" name="phone" placeholder="Phone" required value={formData.phone} onChange={handleChange} className={styles.input} />
                                    </div>
                                </div>
                            </div>

                            {/* Full-width elements */}
                            <div className={styles['image-upload-container']}>
                                <div className={styles['input-wrapper']}>
                                    <Image className={styles['input-icon']} />
                                    <input type="file" id="image" name="image" required onChange={handleChange} className={styles.input} aria-label="Upload Image" />
                                </div>
                            </div>

                            <div className={styles['amount-input-container']}>
                                <div className={styles['input-wrapper']}>
                                    <DollarSign className={styles['input-icon']} />
                                    <input type="text" id="amount" name="amount" placeholder="Amount" required value={formData.amount} onChange={handleChange} className={styles.input} />
                                </div>
                            </div>

                            <div className={styles['description-textarea-container']}>
                                <textarea id="description" name="description" placeholder="Description" rows="4" required value={formData.description} onChange={handleChange} className={styles.textarea} aria-label="Description"></textarea>
                            </div>

                            <button type="submit" className={styles['register-button']}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;
