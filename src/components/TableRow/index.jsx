import React from "react";

const TableRow = () => {
  return (
    <tr>
      <td class="id">No data</td>
      <td class="supplierId">No data</td>
      <td class="categoryId">No data</td>
      <td class="quantityPerUnit">No data</td>
      <td class="unitPrice">No data</td>
      <td class="unitsInStock">No data</td>
      <td class="unitsOnOrder">No data</td>
      <td class="reorderLevel">No data</td>
      <td class="discontinued">No data</td>
      <td class="name">No data</td>
      <td>
        <button class="btn btn-danger delete-button">Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
