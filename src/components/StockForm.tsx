import { StockFormTypes } from "../types"

const StockForm: React.FC<StockFormTypes> = ({
  product,
  handleProductChange,
  handleSubmit,
  isEditing,
}) => {
  const { productName, productQuantity } = product

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        name="productName"
        onChange={handleProductChange}
      />
      <input
        type="text"
        placeholder="Product Quantity"
        value={productQuantity}
        name="productQuantity"
        onChange={handleProductChange}
      />
      <button type="submit">
        {isEditing ? "Update Product" : "Add Product"}
      </button>
    </form>
  )
}

export default StockForm
