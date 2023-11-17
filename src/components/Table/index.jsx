import React from 'react'
import TableRow from '../TableRow'
const Table = ({data, deleteItem}) => {
  return (
    <div style={{width: "100%", overflowX: "scroll"}}>
    <table className="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                {/* <th>Supplier ID</th> */}
                {/* <th>Category ID</th> */}
                <th>Quantity Per Unit</th>
                <th>Unit Price</th>
                <th>Units In Stock</th>
                {/* <th>Units On Order</th> */}
                {/* <th>Reorder Level</th> */}
                <th>Name</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody className="table-content">
            {data?.map((data, index)=>{
                return <TableRow key={index} data={data} deleteItem={deleteItem}/>
            })}
        </tbody>
    </table>
</div>
  )
}

export default Table