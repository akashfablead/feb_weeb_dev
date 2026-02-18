import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/ChatBot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faComments, faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { BASE_URL } from '../utils';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [selectionType, setSelectionType] = useState(null); // To track if user wants products or services
    // const [selectedOption, setSelectedOption] = useState(null); // Will be used in future updates
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Lead data storage
    const [leadData, setLeadData] = useState({
        service: '',
        name: '',
        phone: '',
        email: '',
        budget: '',
        timeline: '',
        city: '',
        requirement: 'No specific requirements provided'
    });

    // Scoring system
    const [leadScore, setLeadScore] = useState(0);

    // Services options
    const services = [
        'Website Development',
        'Mobile App Development',
        'E-commerce Solutions',
        'Digital Marketing',
        'UI/UX Design',
        'CRM Solutions',
        'Cloud Services',
        'IT Consulting',
        'Web Design',
        'App Development',
        'Software Solutions'
    ];

    // Products options
    const products = [
        'Inventory & Billing Software (ERP)',
        'CRM Web & Mobile APP',
        'CMS Sites',
        'Mobile App',
        'Hospital & Clinic Management System (HMS)',
        'E-commerce Web & Mobile App',
        'Real Estate Software',
        'WhatsApp Bulk Messaging Platform'
    ];

    // Budget options
    const budgetOptions = [
        'Under ₹50,000',
        '₹50,000 - ₹1,50,000',
        '₹1,50,000 - ₹3,00,000',
        '₹3,00,000 - ₹5,00,000',
        'Above ₹5,00,000',
        'Not Sure'
    ];

    // Timeline options
    const timelineOptions = [
        'Immediately',
        'Within 1 month',
        '1-3 months',
        '3-6 months',
        '6+ months',
        'Not Decided'
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen, currentStep]);

    const addMessage = (text, isUser = false) => {
        const newMessage = {
            id: Date.now(),
            text,
            isUser,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, newMessage]);
    };

    const startChat = () => {
        setIsOpen(true);
        setMessages([]);
        setCurrentStep(0);
        // Clear the temporary requirement storage
        delete window.currentRequirement;
        setLeadData({
            service: '',
            name: '',
            phone: '',
            email: '',
            budget: '',
            timeline: '',
            city: '',
            requirement: 'No specific requirements provided'
        });
        setSelectionType(null);
        setLeadScore(0);

        // Initial bot message
        setTimeout(() => {
            addMessage('👋 Hello! Welcome to our website.');
        }, 300);

        setTimeout(() => {
            addMessage('Are you interested in our products or services?');
        }, 1000);
    };

    const handleOptionSelect = (option) => {
        // Add visual feedback
        const selectedButton = document.activeElement;
        if (selectedButton && selectedButton.classList.contains('chatbot-option-btn')) {
            selectedButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                selectedButton.style.transform = '';
            }, 150);
        }

        // setSelectedOption(option); // Store for potential future use
        addMessage(option, true);

        // Update lead data based on current step
        switch (currentStep) {
            case 0: // Product or Service selection
                setSelectionType(option.toLowerCase());
                // Move to next step after setting selection type
                setTimeout(() => {
                    proceedToNextStep();
                }, 600);
                break;
            case 1: // Product or Service detail selection
                setLeadData(prev => ({ ...prev, service: option }));
                setLeadScore(prev => prev + 20);
                // Move to next step
                setTimeout(() => {
                    proceedToNextStep();
                }, 600);
                break;
            case 5: // Budget selection
                setLeadData(prev => ({ ...prev, budget: option }));
                setLeadScore(prev => prev + 15);
                // Move to next step
                setTimeout(() => {
                    proceedToNextStep();
                }, 600);
                break;
            case 6: // Timeline selection
                setLeadData(prev => ({ ...prev, timeline: option }));
                setLeadScore(prev => prev + 10);
                // Move to next step
                setTimeout(() => {
                    proceedToNextStep();
                }, 600);
                break;
        }
    };

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        addMessage(userInput, true);
        const currentInput = userInput.trim();

        // After step 9, no input should be processed (restart button is shown instead)
        if (currentStep >= 9) {
            return;
        }

        // Validate input based on current step
        switch (currentStep) {
            case 2: // Name validation
                // Names can be quite varied, basic check
                if (currentInput.length < 2) {
                    addMessage('Please enter a valid name.');
                    setUserInput('');
                    return;
                }
                setLeadData(prev => ({ ...prev, name: currentInput }));
                setLeadScore(prev => prev + 15);
                break;
            case 3: // Phone
                if (validatePhone(currentInput)) {
                    setLeadData(prev => ({ ...prev, phone: currentInput }));
                    setLeadScore(prev => prev + 20);
                } else {
                    addMessage('Please enter a valid phone number.');
                    setUserInput('');
                    return;
                }
                break;
            case 4: // Email
                if (validateEmail(currentInput)) {
                    setLeadData(prev => ({ ...prev, email: currentInput }));
                    setLeadScore(prev => prev + 25);
                } else {
                    addMessage('Please enter a valid email address.');
                    setUserInput('');
                    return;
                }
                break;
            case 7: // City
                if (currentInput.length < 2) {
                    addMessage('Please enter a valid city name.');
                    setUserInput('');
                    return;
                }
                setLeadData(prev => ({ ...prev, city: currentInput }));
                setLeadScore(prev => prev + 5);
                break;
            case 8: // Requirement
                // Make requirement field optional - accept any input including empty
                const requirementValue = currentInput || 'No specific requirements provided';
                setLeadData(prev => ({ ...prev, requirement: requirementValue }));
                setLeadScore(prev => prev + 10);
                // Store the requirement value for immediate use in submit
                window.currentRequirement = requirementValue;
                break;
            default:
                // For other steps, just store the data
                break;
        }

        setUserInput('');
        setTimeout(() => {
            proceedToNextStep();
        }, 500);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const proceedToNextStep = () => {
        // Don't proceed if we're already at the final step
        if (currentStep >= 9) {
            return;
        }

        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);

        // Bot responses based on step
        setTimeout(() => {
            switch (nextStep) {
                case 1:
                    // Debug: log the selection type
                    console.log('Selection type:', selectionType);
                    // Show product or service options based on selection
                    if (selectionType === 'products' || selectionType === 'product') {
                        addMessage('Which product are you interested in?');
                    } else if (selectionType === 'services' || selectionType === 'service') {
                        addMessage('Which service are you interested in?');
                    }
                    break;
                case 2:
                    addMessage('Great! May I know your full name?');
                    break;
                case 3:
                    addMessage('Please share your phone number.');
                    break;
                case 4:
                    addMessage('What is your email address?');
                    break;
                case 5:
                    addMessage('What is your approximate budget?');
                    break;
                case 6:
                    addMessage('When are you planning to start?');
                    break;
                case 7:
                    addMessage('Which city are you located in?');
                    break;
                case 8:
                    addMessage('Please describe your requirement briefly.');
                    break;
                case 9:
                    // Final step - thank you and submit
                    addMessage('Thank you! Our team will contact you shortly.');

                    // Inform user about next steps
                    setTimeout(() => {
                        addMessage('We will review your inquiry and get back to you within 24 hours. You can close this chat now or start a new conversation.');
                    }, 1500);

                    submitLead();
                    break;
            }
        }, 800);
    };

    const submitLead = async () => {
        try {
            // Prepare lead data for submission
            // Map the requirement field to message field as expected by the API
            const requirementValue = window.currentRequirement || leadData.requirement || 'No specific requirements provided';
            console.log('Requirement value:', requirementValue); // Log the requirement value
            const leadSubmission = {
                ...leadData,
                message: requirementValue, // Map requirement to message field
                // score: leadScore,
                timestamp: new Date().toISOString(),
                type: 'chat_bot'
            };

            // Remove the original requirement field since it's now mapped to message
            delete leadSubmission.requirement;

            // Store in localStorage as backup with timestamp
            try {
                const existingLeads = JSON.parse(localStorage.getItem('leads') || '[]');
                existingLeads.push(leadSubmission);
                // Keep only last 100 leads to prevent storage bloat
                if (existingLeads.length > 100) {
                    existingLeads.shift();
                }
                localStorage.setItem('leads', JSON.stringify(existingLeads));
            } catch (storageError) {
                console.warn('Could not save to localStorage:', storageError);
            }

            // Send to backend API
            try {
                const response = await fetch(`${BASE_URL}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'hXuRUGsEGuhGf6KGeereSSas' // Add authorization header like contact form
                    },
                    body: JSON.stringify(leadSubmission)
                });

                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }

                const result = await response.json();
                console.log('Lead submitted successfully:', result);
            } catch (apiError) {
                console.error('Error sending lead to API:', apiError);
                // Still show success to user but log the error
            }

            // Simulate notification to admin
            showNotification(leadSubmission);

        } catch (error) {
            console.error('Error submitting lead:', error);
            addMessage('There was an issue submitting your information. Please try again or contact us directly.');
        }
    };

    const showNotification = (leadData) => {
        // Create notification for admin
        if ('Notification' in window) {
            // Request permission if not granted
            if (Notification.permission === 'default') {
                Notification.requestPermission();
            } else if (Notification.permission === 'granted') {
                new Notification('New Lead Generated', {
                    body: `New lead from ${leadData.name} - Score: ${leadData.score}/100`,
                    icon: '/favicon.ico',
                    tag: 'new-lead'
                });
            }
        }
    };

    // Function to get all stored leads (for admin dashboard)
    const getStoredLeads = () => {
        try {
            return JSON.parse(localStorage.getItem('leads') || '[]');
        } catch (error) {
            console.error('Error retrieving leads:', error);
            return [];
        }
    };

    // Function to clear stored leads
    const clearStoredLeads = () => {
        try {
            localStorage.removeItem('leads');
            return true;
        } catch (error) {
            console.error('Error clearing leads:', error);
            return false;
        }
    };

    const renderOptions = () => {
        switch (currentStep) {
            case 0: // Product or Service selection
                return (
                    <div className="chatbot-options">
                        <button
                            className="chatbot-option-btn"
                            onClick={() => handleOptionSelect('Products')}
                        >
                            Products
                        </button>
                        <button
                            className="chatbot-option-btn"
                            onClick={() => handleOptionSelect('Services')}
                        >
                            Services
                        </button>
                    </div>
                );
            case 1: // Show either products or services based on selection
                if (selectionType === 'products' || selectionType === 'product') {
                    return (
                        <div className="chatbot-options">
                            {products.map((product, index) => (
                                <button
                                    key={index}
                                    className="chatbot-option-btn"
                                    onClick={() => handleOptionSelect(product)}
                                >
                                    {product}
                                </button>
                            ))}
                        </div>
                    );
                } else {
                    return (
                        <div className="chatbot-options">
                            {services.map((service, index) => (
                                <button
                                    key={index}
                                    className="chatbot-option-btn"
                                    onClick={() => handleOptionSelect(service)}
                                >
                                    {service}
                                </button>
                            ))}
                        </div>
                    );
                }
            case 5: // Budget
                return (
                    <div className="chatbot-options">
                        {budgetOptions.map((budget, index) => (
                            <button
                                key={index}
                                className="chatbot-option-btn"
                                onClick={() => handleOptionSelect(budget)}
                            >
                                {budget}
                            </button>
                        ))}
                    </div>
                );
            case 6: // Timeline
                return (
                    <div className="chatbot-options">
                        {timelineOptions.map((timeline, index) => (
                            <button
                                key={index}
                                className="chatbot-option-btn"
                                onClick={() => handleOptionSelect(timeline)}
                            >
                                {timeline}
                            </button>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    const renderInput = () => {
        if (currentStep === 0 || currentStep === 1 || currentStep === 5 || currentStep === 6) {
            return null; // Show options instead
        }

        // After final step, show restart button instead of input
        if (currentStep >= 9) {
            return (
                <div className="chatbot-restart-container">
                    <button
                        className="chatbot-restart-btn"
                        onClick={startChat}
                    >
                        <FontAwesomeIcon icon={faRobot} />
                        Start New Conversation
                    </button>
                </div>
            );
        }

        const inputType = currentStep === 3 ? 'tel' :
            currentStep === 4 ? 'email' : 'text';

        return (
            <form className="chatbot-input-form" onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type={inputType}
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder={
                        currentStep === 2 ? 'Enter your full name' :
                            currentStep === 3 ? 'Enter your phone number' :
                                currentStep === 4 ? 'Enter your email address' :
                                    currentStep === 7 ? 'Enter your city' :
                                        'Describe your requirements (optional)'
                    }
                    className="chatbot-input"
                    autoComplete="off"
                />
                <button type="submit" className="chatbot-send-btn">
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </form>
        );
    };

    if (!isOpen) {
        return (
            <button className="chatbot-toggle" onClick={startChat}>
                <FontAwesomeIcon icon={faComments} />
                <span className="chatbot-toggle-text">Chat with us</span>
            </button>
        );
    }

    // When chat is open, show close button in header
    return (
        <div className={`chatbot-overlay ${isOpen ? 'active' : ''}`} onClick={(e) => {
            // Close chat if clicking on the overlay (background) but not on the chat container
            if (e.target.classList.contains('chatbot-overlay')) {
                setIsOpen(false);
            }
        }}>
            <div className="chatbot-container" onClick={(e) => e.stopPropagation()}>
                <div className="chatbot-header">
                    <div className="chatbot-header-info">
                        <div className="chatbot-avatar">
                            <FontAwesomeIcon icon={faRobot} />
                        </div>
                        <div className="chatbot-header-text">
                            <h4>Lead Assistant</h4>
                            <span className="chatbot-status">Online</span>
                        </div>
                    </div>
                    <button className="chatbot-close" onClick={() => {
                        // Clear temporary storage when closing
                        delete window.currentRequirement;
                        setIsOpen(false);
                    }}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                <div className="chatbot-messages">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`chatbot-message ${message.isUser ? 'user' : 'bot'}`}
                        >
                            {!message.isUser && (
                                <div className="chatbot-message-avatar">
                                    <FontAwesomeIcon icon={faRobot} />
                                </div>
                            )}
                            <div className="chatbot-message-content">
                                <div className="chatbot-message-text">{message.text}</div>
                                <div className="chatbot-message-time">
                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Options appear below messages */}
                    {renderOptions()}

                    <div ref={messagesEndRef} />
                </div>
                {/* Input area */}
                {renderInput()}

                {currentStep > 0 && currentStep < 9 && (
                    <div className="chatbot-progress">
                        <div className="chatbot-progress-bar">
                            <div
                                className="chatbot-progress-fill"
                                style={{ width: `${(currentStep / 9) * 100}%` }}
                            ></div>
                        </div>
                        <span className="chatbot-progress-text">
                            {Math.round((currentStep / 9) * 100)}% Complete
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

// Expose functions for external use (admin dashboard)
window.ChatBotAdmin = {
    getLeads: () => {
        try {
            return JSON.parse(localStorage.getItem('leads') || '[]');
        } catch (error) {
            console.error('Error retrieving leads:', error);
            return [];
        }
    },
    clearLeads: () => {
        try {
            localStorage.removeItem('leads');
            return true;
        } catch (error) {
            console.error('Error clearing leads:', error);
            return false;
        }
    },
    leadCount: () => {
        try {
            return JSON.parse(localStorage.getItem('leads') || '[]').length;
        } catch (error) {
            return 0;
        }
    }
};

export default ChatBot;