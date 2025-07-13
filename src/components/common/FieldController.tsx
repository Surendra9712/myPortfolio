import {HTMLInputTypeAttribute} from 'react';
import {Control, Controller, FieldValues, Path, RegisterOptions} from 'react-hook-form';
import {Textarea} from "@/src/components/ui/textarea";
import {Input} from "@/src/components/ui/input";
import FormError from "@/src/components/common/FormError";

export interface IFormControllerProps<TFieldValues extends FieldValues = FieldValues> {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    placeholder?: string;
    label?: string;
    className?: string;
    type?: HTMLInputTypeAttribute;
    as?: "input" | "textarea";
    rules?: RegisterOptions<TFieldValues>
}

const FieldController = <TFieldValues extends FieldValues>({
                                                               control,
                                                               name,
                                                               placeholder = "Enter value",
                                                               label,
                                                               className,
                                                               type = 'text',
                                                               as = "input",
                                                               rules
                                                           }: IFormControllerProps<TFieldValues>) => {
    const FieldComponent = as === 'textarea' ? Textarea : Input;
    return (
        <div className={`flex flex-col gap-1 relative ${className ?? ''}`}>
            {label && <label htmlFor={name}
                             className="text-sm font-medium mb-2 text-foreground">
                {label}
            </label>}
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({field, fieldState: {error}}) => (
                    <>
                        <FieldComponent
                            {...field}
                            type={as === 'input' ? type : undefined}
                            rows={as === 'textarea' ? 4 : undefined}
                            id={name}
                            placeholder={placeholder}
                            data-error={error && true}
                        />
                        <FormError message={error?.message}/>
                    </>
                )}
            />
        </div>
    );
};

export default FieldController;