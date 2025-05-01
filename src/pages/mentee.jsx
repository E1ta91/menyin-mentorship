import React from 'react'
import bg3 from '../assets/images/bg3.jpg'

const Mentee = () => {

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


        <div className="relative w-full min-h-screen bg-cover bg-center md:bg-fixed" style={{ backgroundImage: `url(${bg3})` }} >

            <div className="absolute inset-0 bg-black z-0 opacity-10 "></div>

            <div className="relative z-10 flex items-center justify-center min-h-screen px-8 py-10">

                <form onSubmit={onSubmit}  className="space-y-5 bg-custom-gradient w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-lg xl:max-w-xl  p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl shadow-black min-h-[60vh] md:min-h-[65vh] lg:min-h-[50vh] xl:min-h-[60vh]">

                    {/* Success Message */}
                    {result && (
                        <p style={{ fontFamily: 'Playfair' }} className=" border w-60 h-11 rounded-lg bg-white shadow-white shadow-md text-black pt-1 font-medium text-center">
                            {result}
                        </p>
                    )}



                    <h2 style={{ fontFamily: 'Playfair' }} className='text-2xl text-[#F9F6E6] '>Ready to Grow? Register to Find Your Mentor</h2>

                    <div className="flex flex-col md:flex-row md:space-x-10 space-y-5 md:space-y-0">

                        <div className="w-full">
                            <label htmlFor='name' className="mb-3 block text-base font-medium text-[#BAD8B6]">
                                Full Name
                            </label>
                            <input 
                            type="name" 
                            name="name" 
                            id="name" 
                            placeholder="Full name" 
                            autoComplete='name' 
                            className="w-full rounded-md border border-[#585757] bg-white py-3 px-4 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md" />
                        </div>

                        <div className="w-full">
                            <label htmlFor='email' className="mb-3 block text-base font-medium text-[#BAD8B6]">
                                Email Address
                            </label>
                            <input 
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder="Email Address" 
                            autoComplete='email'
                            className="w-full rounded-md border border-[#585757] bg-white py-3 px-4 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md" />
                        </div>

                    </div>

                    <div className="space-y-3">
                        <div className="">
                            <label htmlFor='mentorship-field' className=" block text-base font-medium text-[#BAD8B6]">
                                Mentorship Area
                            </label>
                            <input type="text" name="mentorship-field" id="mentorship-field" placeholder="e.g., Technology, Marketing....." autoComplete='name' className="w-full rounded-md border border-[#585757] bg-white py-3 px-4 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md" />
                        </div>

                        <div className="">
                            <label for="career-goals" className=" block text-base font-medium text-[#BAD8B6]">Career Goals</label>
                            <input
                                id="career-goals"
                                name="careerGoals"
                                rows="4"
                                placeholder="Areas you need guidance in..."
                               className="w-full rounded-md border border-[#585757] bg-white py-3 px-4 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
                            ></input>
                        </div>

                        <div className="">
                            <label for="skills" className=" block text-base font-medium text-[#BAD8B6]">Skills</label>
                            <input
                                id="skills"
                                name="skills"
                                rows="4"
                                placeholder="skills you need guidance in..."
                                className="w-full rounded-md border border-[#585757] bg-white py-3 px-4 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
                            ></input>
                        </div>
                        {/* <!-- Hidden input for the predefined subject --> */}
                        <input type="hidden" name="subject" value="Mentee Registration" />

                    </div>

                    <button type='submit' style={{ fontFamily: 'Playfair' }} className='border border-[#BAD8B6] text-white w-32 h-8 font-semibold hover:bg-[#DA498D] rounded-lg'>Submit</button>

                </form>
            </div>


        </div>




    )
}

export default Mentee