'use client';
import { Lato, Inter } from 'next/font/google';
import styles from './styles/Register.module.css';
import { useState } from 'react';
import {
    SquareUserRound,
    User,
    Mail,
    MapPin,
    GraduationCap,
    Accessibility,
    Phone,
    Image,
    DollarSign,
} from 'lucide-react';

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

// Reusable InputField Component
const InputField = ({
    icon: Icon,
    id,
    name,
    placeholder,
    value,
    onChange,
    type = 'text',
    required = true,
}) => (
    <div className={styles['input-container']}>
        <div className={styles['input-wrapper']}>
            <Icon className={styles['input-icon']} />
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                className={styles.input}
                aria-label={placeholder}
            />
        </div>
    </div>
);

// Reusable SelectField Component
const SelectField = ({
    icon: Icon,
    id,
    name,
    value,
    onChange,
    options,
    placeholder,
    required = true,
}) => (
    <div className={styles['input-container']}>
        <div className={styles['input-wrapper']}>
            <Icon className={styles['input-icon']} />
            <select
                id={id}
                name={name}
                required={required}
                value={value}
                onChange={onChange}
                className={styles.input}
                aria-label={placeholder}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    </div>
);

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

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? e.target.files[0] : value,
        });
    };

    const validateForm = () => {
        const { email, phone } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return false;
        }

        if (!formData.image) {
            alert('Please upload an image.');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                body: formDataToSend,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Registration failed');
            }

            console.log('Registration successful!');
            setFormData({
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

            alert('Registration Successful!');
        } catch (error) {
            console.error('Registration error:', error);
            alert(error.message);
        } finally {
            setIsSubmitting(false);
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
                            <InputField
                                icon={User}
                                id="firstName"
                                name="firstName"
                                placeholder="First name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={User}
                                id="lastName"
                                name="lastName"
                                placeholder="Last name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={Mail}
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <InputField
                                icon={MapPin}
                                id="location"
                                name="location"
                                placeholder="Location"
                                value={formData.location}
                                onChange={handleChange}
                            />
                            <SelectField
                                icon={GraduationCap}
                                id="module"
                                name="module"
                                value={formData.module}
                                onChange={handleChange}
                                options={[
                                    { value: 'software-development', label: 'Software Development' },
                                    { value: 'data-science', label: 'Data Science' },
                                    { value: 'cloud-computing', label: 'Cloud Computing' },
                                ]}
                                placeholder="Choose module"
                            />
                            <SelectField
                                icon={SquareUserRound}
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                options={[
                                    { value: 'male', label: 'Male' },
                                    { value: 'female', label: 'Female' },
                                ]}
                                placeholder="Gender"
                            />
                            <SelectField
                                icon={Accessibility}
                                id="disabled"
                                name="disabled"
                                value={formData.disabled}
                                onChange={handleChange}
                                options={[
                                    { value: 'yes', label: 'Yes' },
                                    { value: 'no', label: 'No' },
                                ]}
                                placeholder="Disabled"
                            />
                            <InputField
                                icon={Phone}
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <div className={styles['image-upload-container']}>
                                <div className={styles['input-wrapper']}>
                                    <Image className={styles['input-icon']} />
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        required
                                        onChange={handleChange}
                                        className={styles.input}
                                        aria-label="Upload Image"
                                    />
                                </div>
                            </div>
                            <InputField
                                icon={DollarSign}
                                id="amount"
                                name="amount"
                                placeholder="Amount"
                                value={formData.amount}
                                onChange={handleChange}
                            />
                            <div className={styles['description-textarea-container']}>
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder="Description"
                                    rows="4"
                                    required
                                    value={formData.description}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    aria-label="Description"
                                />
                            </div>
                            <button
                                type="submit"
                                className={styles['register-button']}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Registering...' : 'Register'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;