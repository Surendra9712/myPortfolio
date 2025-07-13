"use client"

import {useForm} from "react-hook-form";
import {toast} from "sonner";
import FieldController from "@/src/components/common/FieldController";
import {Button} from "@/src/components/ui/button";
import {useState} from "react";

export interface IContactForm {
    name: string,
    email: string,
    subject: string,
    message: string
}

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {control, reset, handleSubmit} = useForm(
        {
            defaultValues: {
                name: "",
                email: "",
                subject: "",
                message: ""
            }
        }
    );

    const onSend = async (e: IContactForm) => {
        try {
            setIsLoading(true);
            toast.success("Message sent successfully!", {
                description: "Thanks for reaching out. I'll get back to you soon!",
            });
            reset();
            setIsLoading(false);
        } catch {
            setIsLoading(false);
        }

    }
    return (
        <form className="space-y-6" onSubmit={handleSubmit(onSend)}>
            <div className="grid md:grid-cols-2 gap-6">
                <FieldController
                    control={control}
                    name="name"
                    placeholder="Enter full name"
                    label="Name"
                    rules={{
                        required: "Name is required",
                        maxLength: {value: 100, message: "Name should not be greater than 100 characters"}
                    }}
                />
                <FieldController
                    control={control}
                    name="email"
                    placeholder="Enter email"
                    label="Email"
                    rules={{
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Please enter a valid email address",
                        },
                    }}
                />
            </div>
            <FieldController
                control={control}
                name="subject"
                placeholder="Enter subject"
                label="Subject"
                rules={{
                    required: "Subject is required",
                    maxLength: {
                        value: 250,
                        message: "Subject should not be greater than 250 characters"
                    }
                }}
            />
            <FieldController
                control={control}
                as={'textarea'}
                name="message"
                placeholder="Enter your message.."
                label="Message"
                rules={{
                    required: "Message is required",
                    maxLength: {
                        value: 1000,
                        message: "Message should not be greater than 1000 characters"
                    }
                }}
            />
            <Button
                disabled={isLoading}
                type="submit"
                className="w-full py-3 text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
            >
                Send Message
            </Button>
        </form>
    )
}

export default ContactForm