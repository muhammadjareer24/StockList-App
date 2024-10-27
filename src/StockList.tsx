import { ChangeEvent, FormEvent, useState } from "react"
import "./App.css"
import StockForm from "./components/StockForm"
import StockTable from "./components/StockTable"
import { ProductType, StockListType } from "./types"

function StockList() {
  const [stockList, setStockList] = useState<StockListType[]>([])

  const [product, setProduct] = useState<ProductType>({
    productName: "",
    productQuantity: "",
  })

  const [editingId, setEditingId] = useState<number | null>(null)

  const handleProductChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const handleDeleteProduct = (id: number) => {
    setStockList(stockList.filter((product) => product.id !== id))
  }

  const handleEditClick = (productToEdit: StockListType) => {
    setEditingId(productToEdit.id)
    setProduct({
      productName: productToEdit.productName,
      productQuantity: productToEdit.productQuantity,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { productName, productQuantity } = product

    if (!productName || !productQuantity) {
      alert("Please enter both, product name and quantity.")
      return
    }

    if (editingId !== null) {
      // Update existing product
      setStockList(
        stockList.map((item) =>
          item.id === editingId
            ? { ...item, productName, productQuantity }
            : item
        )
      )
      setEditingId(null)
    } else {
      // Add new product
      const id: number = Date.now()
      setStockList([...stockList, { ...product, id }])
    }

    // Reset form
    setProduct({
      productName: "",
      productQuantity: "",
    })

    setEditingId(null) //Reset editing state
  }

  return (
    <div className="container">
      <StockForm
        product={product}
        handleProductChange={handleProductChange}
        handleSubmit={handleSubmit}
        isEditing={editingId !== null}
      />

      <StockTable
        stockList={stockList}
        handleDeleteProduct={handleDeleteProduct}
        handleEditClick={handleEditClick}
      />
    </div>
  )
}

export default StockList
