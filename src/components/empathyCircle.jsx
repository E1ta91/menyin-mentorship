import { X } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form';

const EmpathyCircle = ({ isOpen, onClose }) => {

    const { register, formState: { errors } } = useForm({
        reValidateMode: "onBlur",
        mode: "all",
    });

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
        <div id="empathy">
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4">
                    <div className="bg-white border  p-6 rounded-lg shadow-lg w-[90%] max-w-sm sm:max-w-sm md:max-w-sm lg:max-w-md h-auto min-h-[400px] relative">
                        <button onClick={onClose} className="absolute top-4 right-4">
                            <X className="text-[#382F57] w-6 h-6" />
                        </button>

                        <form onSubmit={onSubmit} className="flex flex-col space-y-5">
                            {/* Success Message */}
                            {result && (
                                <p
                                    style={{ fontFamily: 'Playfair' }}
                                    className=" text-black pt-1 font-medium text-center"
                                >
                                    {result}
                                </p>
                            )}

                            <h2 className="text-2xl  text-[#382F57] font-bold">Register Your Interest</h2>

                            <div className="w-full text-left space-y-2">
                                <input
                                    id="name"
                                    type="text"
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full p-2 border-[0.5px] border-gray-600 rounded-md  text-black"
                                    placeholder="Full Name"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            </div>

                            <div className="w-full text-left space-y-2">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-2 border-[0.5px] border-gray-600 rounded-md  text-black"
                                    placeholder="Email Address"
                                    {...register("email", { required: "Email is required" })}
                                />
                            </div>

                            <div className="w-full text-left space-y-2">
                                <input
                                    id="tel"
                                    type="tel"
                                    {...register("tel", { required: "Phone number is required" })}
                                    className="w-full p-2 border-[0.5px] border-gray-600 rounded-md  text-black"
                                    placeholder=" Phone Number"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            </div>

                            <div className="w-full text-left space-y-2">
                                <input
                                    id="location"
                                    type="text"
                                    {...register("location", { required: "Your Location is required" })}
                                    className="w-full p-2 border-[0.5px] border-gray-600 rounded-md  text-black"
                                    placeholder="Location"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            </div>

                            <div className="w-full text-left space-y-2">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Why do you want to join ?"
                                    className="w-full p-2 border-[0.5px] border-gray-600 rounded-md  text-black"
                                ></textarea>
                            </div>

                            {/* Hidden Input */}
                            <input type="hidden" name="subject" value="E-Circle Registration" />


                            <div className="w-20  md:w-20 lg:w-24">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center items-center h-10 sm:h-9 bg-[#6B3EB7] font-semibold text-white rounded-md"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EmpathyCircle