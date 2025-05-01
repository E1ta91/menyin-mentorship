import React, { useState } from 'react';

const Intern = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "44810d29-bc2f-43be-8af0-f611e475d343");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult(" Registered Successfully");
            event.target.reset();


            setTimeout(() => {
                setResult("");
            }, 5000);

        } else {
            console.log("Error", data);
            setResult(data.message);

            setTimeout(() => {
                setResult("");
            }, 5000);
        }
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">

                {/* Success Message */}
                {result && (
                    <p style={{ fontFamily: 'Playfair' }} className=" border w-60 h-11 rounded-lg bg-white shadow-white shadow-md text-black pt-1 font-medium text-center">
                        {result}
                    </p>
                )}

                <h2 className="text-2xl font-bold mb-4">Internship Interest Form</h2>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete='name'
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete='email'
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete='phone'
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700">Area of Interest</label>
                    <select
                        id="interest"
                        name="interest"
                        autoComplete='interest'
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    >
                        <option value="">Select an area of interest</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Project Management">Project Management</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                    </select>
                </div>

                {/* <!-- Hidden input for the predefined subject --> */}
                <input type="hidden" name="subject" value="Internship Registration" />

                <button
                    type="submit"
                    className="w-32 sm:w-40 md:w-[10vw] bg-[#8064C1] text-white py-1 px-2 rounded-md transition duration-300"
                >
                    Submit
                </button>

            </form>
        </div>
    );
};

export default Intern