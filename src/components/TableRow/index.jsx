import React from "react";

const TableRow = ({data, index, deleteItem}) => {
  return (
    <tr key={index}>
      <td className="id">{data.id}</td>
      {/* <td className="supplierId">{data.supplierId}</td> */}
      {/* <td className="categoryId">{data.categoryId}</td> */}
      <td className="quantityPerUnit">{data.quantityPerUnit}</td>
      <td className="unitPrice">{data.unitPrice}</td>
      <td className="unitsInStock">{data.unitsInStock}</td>
      {/* <td className="unitsOnOrder">{data.unitsOnOrder}</td> */}
      {/* <td className="reorderLevel">{data.reorderLevel}</td> */}
      <td className="name">{data.name}</td>
      <td>
        <button className="btn btn-danger delete-button" onClick={()=>{deleteItem(data.id)}}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
