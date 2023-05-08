
const FormInput = (props) => {
    const { label, onChange, id, ...inputProps } = props;
    return (
        <div>
            <label>{label}</label>
            <input className="p-5 my-4 bg-slate-100"
                {...inputProps} onChange={onChange} />
        </div>
    )
}

export default FormInput