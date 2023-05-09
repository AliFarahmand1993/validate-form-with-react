
const FormInput = (props) => {
    const { label, onChange, id, ...inputProps } = props;
    return (
        <div className="p-2 my-1 flex flex-col w-64 text-gray-500 text-lg">
            <label>{label}</label>
            <input className="p-3 my-2 border-solid border-2"{...inputProps} onChange={onChange} />
        </div>
    )
}

export default FormInput