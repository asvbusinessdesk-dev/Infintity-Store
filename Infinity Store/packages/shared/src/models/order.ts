export type OrderStatus = "PENDING" | "SHIPPED" | "DELIVERED";
export type PaymentStatus = "PENDING" | "PAID" | "FAILED";

export interface OrderItem {
  productId: string;
  name: string;
  slug: string;
  size: string;
  quantity: number;
  unitPrice: number;
  image: string;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  createdAt: string;
}
