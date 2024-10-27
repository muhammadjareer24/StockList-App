import { ChangeEvent, FormEvent } from "react"

interface ProductType {
  productName: string
  productQuantity: string
}

interface StockListType extends ProductType {
  id: number
}

interface StockFormTypes {
  product: ProductType
  handleProductChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  isEditing?: boolean
}

interface StockTableTypes {
  stockList: StockListType[]
  handleDeleteProduct: (id: number) => void
  handleEditClick: (product: StockListType) => void
}

export { ProductType, StockListType, StockFormTypes, StockTableTypes }
