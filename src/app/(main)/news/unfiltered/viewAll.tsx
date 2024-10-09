'use client'
import { useState } from "react";

type Props = {
    greetingObj: {
        _id: string;
        greeting: string;
    }
};

const EditNews = ({ greetingObj }: Props) => {
    const [greeting, setGreeting] = useState("");
    const [loading, setLoading] = useState(false);  // Track loading state
    const [error, setError] = useState<string | null>(null);  // Track error state
    const [successMessage, setSuccessMessage] = useState<string | null>(null);  // Track success state

    const changeGreeting = async () => {
        setLoading(true);  // Start loading
        setError(null);  // Reset error before request
        setSuccessMessage(null);  // Reset success message
        try {
            const response = await fetch('/api', {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ greeting, id: greetingObj._id })
            });

            if (!response.ok) {
                // Handle non-2xx responses
                const message = `Error: ${response.status} - ${response.statusText}`;
                throw new Error(message);
            }

            const result = await response.json();
            setSuccessMessage("Greeting updated successfully!");  // Show success message
        } catch (err) {
            setError(err.message || "Something went wrong. Please try again.");  // Set error message
        } finally {
            setLoading(false);  // Stop loading
        }
    };

    return (
        <div key={greetingObj._id.toString()}>
            <h1> {greetingObj.greeting} </h1>
            <input
                value={greeting}
                onChange={(e) => setGreeting(e.target.value)}
                placeholder="Update greeting..."
            ></input>
            <button onClick={changeGreeting} disabled={loading}>
                {loading ? "Updating..." : "Change this greeting"}
            </button>

            {/* Display error message if exists */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Display success message if exists */}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    );
};

export default EditNews;
