export function Input({value, onChange, placeholder, id}){
    return <div>
        <input 
            type="text" 
            className="form-control" 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            id={id}
        />
    </div>
}