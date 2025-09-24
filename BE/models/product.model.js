import mongoose from "mongoose";

// coi tương tự như bản thiết kế
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },

}, {
  timestamps: true //createdAt,updatedAt
});

const Product = mongoose.model('Product', productSchema);
//Product hiểu đơn giản là giống class,còn'Product' là bạn đặt mongoose chuyển thành products (tên collection trong MongoDB)
//products là tên collection

export default Product;