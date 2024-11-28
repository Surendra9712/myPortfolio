import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {cva, type VariantProps} from "class-variance-authority";


const buttonVariants = cva(
    "flex items-center justify-center rounded font-medium transition-colors focus-visible:outline-none group focus-visible:ring-1 focus-visible:ring-ring disabled:bg-surface-200 disabled:text-300 disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                solid: "dark:text-black text-white",
                outline: "border",
                subtle: "sub",
            },
            shade: {
                primary: "",
                success: "",
                danger: "",
                gray: "",
                info: "",
                warning: "",
                accent: "",
            },
            size: {
                default: "h-10 gap-2 text-lg px-4",
                sm: "h-8 px-3 gap-1 text-md",
                lg: "h-12 gap-2 text-lg px-6",
                icon: "h-10 w-10",
            },
        },
        compoundVariants: [
            {
                variant: "solid",
                shade: "primary",
                className: "bg-primary hover:bg-primary-600 ",
            },
            {
                variant: "solid",
                shade: "success",
                className: "bg-green-500 hover:bg-green-600",
            },
            {
                variant: "solid",
                shade: "info",
                className: "bg-cyan-500 hover:bg-cyan-600",
            },
            {
                variant: "solid",
                shade: "danger",
                className: "bg-red-500 hover:bg-red-600",
            },
            {
                variant: "solid",
                shade: "gray",
                className: "bg-gray-500 hover:bg-gray-600",
            },
            {
                variant: "solid",
                shade: "warning",
                className: "bg-yellow-500 hover:bg-yellow-600",
            },
            {
                variant: "solid",
                shade: "accent",
                className: "bg-indigo-700 hover:bg-indigo-800",
            },
            {
                variant: "outline",
                shade: "primary",
                className: "border-primary text-primary hover:bg-slate-200",
            },
            {
                variant: "outline",
                shade: "success",
                className: "border-green-600 text-green-600 hover:bg-green-100",
            },
            {
                variant: "outline",
                shade: "danger",
                className: "border-red-500 text-red-500 hover:bg-red-100",
            },
            {
                variant: "outline",
                shade: "gray",
                className: "border-gray-500 text-gray-500 hover:bg-gray-100",
            },
            {
                variant: "outline",
                shade: "info",
                className: "border-cyan-500 text-cyan-500 hover:bg-cyan-100",
            },
            {
                variant: "outline",
                shade: "warning",
                className: "border-yellow-500 text-yellow-500 hover:bg-yellow-100",
            },
            {
                variant: "outline",
                shade: "accent",
                className: "border-indigo-500 text-indigo-500 hover:bg-indigo-100",
            },
            {
                variant: "subtle",
                shade: "primary",
                className: "text-primary dark:hover:bg-slate-700 hover:bg-slate-100",
            },
            {
                variant: "subtle",
                shade: "success",
                className: "text-green-500 hover:bg-green-100",
            },
            {
                variant: "subtle",
                shade: "danger",
                className: "text-red-500 hover:bg-red-100",
            },
            {
                variant: "subtle",
                shade: "gray",
                className: "text-gray-500 hover:bg-gray-100",
            },
            {
                variant: "subtle",
                shade: "info",
                className: "text-cyan-500 hover:bg-cyan-100",
            },
            {
                variant: "subtle",
                shade: "warning",
                className: "text-yellow-500 hover:bg-yellow-100",
            },
            {
                variant: "subtle",
                shade: "accent",
                className: "text-indigo-500 hover:bg-indigo-100",
            },
        ],
        defaultVariants: {
            variant: "solid",
            shade: "primary",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, variant, shade, size, asChild = false, ...props}, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={`${buttonVariants({variant, shade, size, className})}`}
                ref={ref}
                {...props}
            >
            </Comp>
        );
    }
);
Button.displayName = "Button";

export {Button, buttonVariants};

