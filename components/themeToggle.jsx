import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    useEffect(() => {
        document.body.classList.toggle('light-theme', !isDarkTheme);
    }, [isDarkTheme]);

    const handleToggle = () => {
        setIsDarkTheme((prev) => !prev);
    };

    return (
        <div className="themeToggle">
            <label className="switch">
                <input
                    type="checkbox"
                    checked={isDarkTheme}
                    onChange={handleToggle}
                />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default ThemeToggle;
