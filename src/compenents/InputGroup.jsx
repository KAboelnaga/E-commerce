export default function InputGroup({ input, form, errors, handleChange }) {
    return (
        <div className="form-group" key={input.name}>
            <label htmlFor={input.name}>{input.label}</label>
            <div className="input-group mb-2">
                <span className="input-group-text">
                    <i className={`bi bi-${input.icon}`}></i>
                </span>
                <input
                    type={input.type}
                    className="form-control"
                    id={input.name}
                    name={input.name}
                    placeholder={input.label}
                    value={form[input.name]}
                    onChange={handleChange}
                />
            </div>
            {errors[input.name] && <div className="text-danger mb-2">{errors[input.name]}</div>}
        </div>
    );
}
