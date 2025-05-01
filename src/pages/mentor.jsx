import React from 'react'
import bg3 from '../assets/images/bg3.jpg'

const Mentor = () => {
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

        <div className="relative w-full min-h-screen bg-cover bg-center md:bg-fixed" style={{ backgroundImage: `url(${bg3})` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-10"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-8 py-10">

                <form onSubmit={onSubmit} className="space-y-5 bg-custom-gradient w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-lg xl:max-w-xl  p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl shadow-black min-h-[60vh] md:min-h-[65vh] lg:min-h-[50vh] xl:min-h-[60vh]"
                >
                    {/* Success Message */}
                    {result && (
                        <p
                            style={{ fontFamily: 'Playfair' }}
                            className="border w-60 h-11 rounded-lg bg-white shadow-white shadow-md text-black pt-1 font-medium text-center"
                        >
                            {result}
                        </p>
                    )}

                    <h2 style={{ fontFamily: 'Playfair' }} className="text-2xl text-[#F9F6E6] text-center">Share Your Expertise</h2>

                    <div className="flex flex-col md:flex-row md:space-x-10 space-y-5 md:space-y-0">
                        {/* Full Name */}
                        <div className="w-full">
                            <label htmlFor="fullname" className="mb-3 block text-base font-medium text-[#BAD8B6]">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fullname"
                                id="fullname"
                                placeholder="Full name"
                                autoComplete="name"
                                className="w-full rounded-md border border-[#585757] bg-white py-3 px-4 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
                            />
                        </div>

                        {/* Email */}
                        <div className="w-full">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#BAD8B6]">
                                Email Address
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                autoComplete="email"
                                className="w-full rounded-md border border-[#585757] bg-white py-3 px-4 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
                            />
                        </div>
                    </div>

                    {/* Expertise & Skills */}
                    <div className="space-y-5">
                        <div className="w-full">
                            <label htmlFor="Expertise" className="block text-base font-medium text-[#BAD8B6]">
                                Field of Expertise
                            </label>
                            <input
                                type="text"
                                name="Expertise"
                                id="Expertise"
                                placeholder="e.g., Technology, Marketing..."
                                className="w-full rounded-md border border-[#585757] bg-white py-3 px-4 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
                            />
                        </div>

                        <div className="w-full">
                            <label htmlFor="skills" className="block text-base font-medium text-[#BAD8B6]">
                                Mentorship Skills
                            </label>
                            <input
                                type="text"
                                id="skills"
                                name="skills"
                                placeholder="Skills you mentor in..."
                                className="w-full rounded-md border border-[#585757] bg-white py-3 px-4 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
                            />
                        </div>
                    </div>

                    {/* Hidden Input */}
                    <input type="hidden" name="subject" value="Mentor Registration" />

                    {/* Submit Button */}
                    <div className="flex  text-left">
                        <button
                            type="submit"
                            style={{ fontFamily: 'Playfair' }}
                            className="border border-[#BAD8B6] text-white w-32 h-8 font-semibold hover:bg-[#DA498D] rounded-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default Mentor