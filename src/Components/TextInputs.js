const TextInput= ({
    label,
    type,
    placeholder,
    className,
    id,
    
}) => {

    return(
    <div>
        <label
        htmlFor={id}
        className={className}
        >{label}</label>
        <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={className}
        
        
        />

    </div>
    )
}
export default TextInput;