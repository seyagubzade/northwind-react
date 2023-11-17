import React from 'react'
import TableRow from '../TableRow'
const Table = () => {
  return (
    <div>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Supplier ID</th>
                <th>Category ID</th>
                <th>Quantity Per Unit</th>
                <th>Unit Price</th>
                <th>Units In Stock</th>
                <th>Units On Order</th>
                <th>Reorder Level</th>
                <th>Discontinued</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody class="table-content">
            <TableRow />
        </tbody>
    </table>
</div>
  )
}

export default Table