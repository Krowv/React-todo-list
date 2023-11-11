export function Button({value, onClick}){
    return <div>
        <button type="button" className="btn btn-primary" onClick={(e) => onClick(e.target.value)}>{value}</button>
    </div>
}