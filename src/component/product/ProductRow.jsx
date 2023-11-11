export function ProductRow({productName}){
    return <div className="card m-3 w-50">
        <div className="card-body">
            <p>{productName}</p>
        </div> 
    </div>
}