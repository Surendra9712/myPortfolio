const FormError = ({message}: { message?:string })=>{
    return (
        <>
            {message &&
                <span className="text-red-500 text-sm">{message}</span>
            }
        </>
    )
}

export default FormError;