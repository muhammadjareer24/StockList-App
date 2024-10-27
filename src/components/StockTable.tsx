import { StockTableTypes } from "../types"

const StockTable: React.FC<StockTableTypes> = ({
  stockList,
  handleDeleteProduct,
  handleEditClick,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {stockList.map(({ id, productName, productQuantity }, index) => (
          <tr key={id}>
            <td>{index + 1}</td>
            <td>{productName}</td>
            <td>{productQuantity}</td>
            <td>
              <button id="delete-btn" onClick={() => handleDeleteProduct(id)}>
                <i className="fa-solid fa-trash"></i>Delete
              </button>
              <button
                id="edit-btn"
                onClick={() =>
                  handleEditClick({ id, productName, productQuantity })
                }
              >
                <i className="fa-solid fa-edit"></i>Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default StockTable
