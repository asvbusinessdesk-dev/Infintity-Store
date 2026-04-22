import type { Category } from "./models/category";
import type { Order } from "./models/order";
import type { Product } from "./models/product";
import type { User } from "./models/user";

export * from "./models/category";
export * from "./models/order";
export * from "./models/product";
export * from "./models/user";

export interface MarketingBanner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
  isActive: boolean;
}

export interface PopupConfig {
  id: string;
  title: string;
  description: string;
  offerCode: string;
  isActive: boolean;
}

export interface DashboardSnapshot {
  dailySales: number;
  monthlySales: number;
  revenue: number;
  orderCount: number;
  topProductIds: string[];
  lowStockProductIds: string[];
}

export const categories: Category[] = [
  {
    id: "cat-men",
    name: "Men",
    slug: "men",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    isActive: true
  },
  {
    id: "cat-women",
    name: "Women",
    slug: "women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    isActive: true
  },
  {
    id: "cat-essentials",
    name: "Essentials",
    slug: "essentials",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80",
    isActive: true
  },
  {
    id: "cat-oversized",
    name: "Oversized",
    slug: "oversized",
    parentId: "cat-essentials",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    isActive: true
  }
];

export const products: Product[] = [
  {
    id: "prod-01",
    name: "Infinity Tailored Coat",
    slug: "infinity-tailored-coat",
    description:
      "A precise double-faced coat cut with clean shoulders and a fluid drape for evening city wear.",
    price: 18990,
    discount: 10,
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
    ],
    categoryId: "cat-women",
    tags: ["coat", "luxury", "outerwear", "new drop"],
    sizes: ["S", "M", "L"],
    stock: 8,
    createdAt: "2026-04-04T08:00:00.000Z"
  },
  {
    id: "prod-02",
    name: "Monochrome Signature Hoodie",
    slug: "monochrome-signature-hoodie",
    description:
      "An oversized heavyweight hoodie with brushed fleece, subtle logo embroidery, and premium structure.",
    price: 6990,
    discount: 5,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
    ],
    categoryId: "cat-oversized",
    tags: ["hoodie", "sweatshirt", "oversized", "best seller"],
    sizes: ["S", "M", "L", "XL"],
    stock: 21,
    createdAt: "2026-04-18T08:00:00.000Z"
  },
  {
    id: "prod-03",
    name: "Silhouette Knit Dress",
    slug: "silhouette-knit-dress",
    description:
      "A minimal rib-knit dress with sculpted lines designed for seamless day-to-night styling.",
    price: 9490,
    discount: 12,
    images: [
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=80"
    ],
    categoryId: "cat-women",
    tags: ["dress", "occasion", "minimal"],
    sizes: ["XS", "S", "M", "L"],
    stock: 13,
    createdAt: "2026-03-30T08:00:00.000Z"
  },
  {
    id: "prod-04",
    name: "Essential Luxe Tee",
    slug: "essential-luxe-tee",
    description:
      "A compact cotton tee with a structured collar, soft finish, and elevated everyday silhouette.",
    price: 2990,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
    ],
    categoryId: "cat-essentials",
    tags: ["tee", "essentials", "minimal"],
    sizes: ["S", "M", "L", "XL"],
    stock: 52,
    createdAt: "2026-04-10T08:00:00.000Z"
  },
  {
    id: "prod-05",
    name: "Atelier Wide-Leg Trouser",
    slug: "atelier-wide-leg-trouser",
    description:
      "A flowing, high-rise trouser finished with pressed folds and an understated tailored waist.",
    price: 7590,
    discount: 8,
    images: [
      "https://images.unsplash.com/photo-1506629905607-c36f7d3d7d15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=80"
    ],
    categoryId: "cat-women",
    tags: ["trouser", "tailored", "wide leg"],
    sizes: ["S", "M", "L"],
    stock: 16,
    createdAt: "2026-04-15T08:00:00.000Z"
  },
  {
    id: "prod-06",
    name: "Noir Utility Overshirt",
    slug: "noir-utility-overshirt",
    description:
      "A modern overshirt with compact twill structure, tonal hardware, and sharp minimal detailing.",
    price: 8290,
    discount: 7,
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80"
    ],
    categoryId: "cat-men",
    tags: ["overshirt", "utility", "men"],
    sizes: ["M", "L", "XL"],
    stock: 5,
    createdAt: "2026-04-20T08:00:00.000Z"
  }
];

export const users: User[] = [
  {
    id: "user-admin",
    name: "Infinity Admin",
    email: "admin@infinitystore.com",
    role: "admin"
  },
  {
    id: "user-ava",
    name: "Ava Reynolds",
    email: "ava@example.com",
    role: "customer"
  }
];

export const orders: Order[] = [
  {
    id: "ORD-1001",
    userId: "user-ava",
    items: [
      {
        productId: "prod-02",
        name: "Monochrome Signature Hoodie",
        slug: "monochrome-signature-hoodie",
        size: "M",
        quantity: 1,
        unitPrice: 6640,
        image:
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    totalAmount: 6640,
    status: "SHIPPED",
    paymentStatus: "PAID",
    createdAt: "2026-04-19T10:00:00.000Z"
  },
  {
    id: "ORD-1002",
    userId: "user-ava",
    items: [
      {
        productId: "prod-04",
        name: "Essential Luxe Tee",
        slug: "essential-luxe-tee",
        size: "L",
        quantity: 2,
        unitPrice: 2990,
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    totalAmount: 5980,
    status: "DELIVERED",
    paymentStatus: "PAID",
    createdAt: "2026-04-14T13:15:00.000Z"
  }
];

export const marketingBanners: MarketingBanner[] = [
  {
    id: "banner-hero",
    title: "DEFINE YOUR STYLE",
    subtitle: "Minimal silhouettes. Infinite expression.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=80",
    ctaLabel: "Shop Now",
    ctaHref: "/shop",
    isActive: true
  }
];

export const popupConfigs: PopupConfig[] = [
  {
    id: "popup-first-order",
    title: "A first look deserves a first reward",
    description: "Unlock 10% off your first order with a private welcome code.",
    offerCode: "INFINITY10",
    isActive: true
  }
];

export const dashboardSnapshot: DashboardSnapshot = {
  dailySales: 12,
  monthlySales: 238,
  revenue: 486320,
  orderCount: 71,
  topProductIds: ["prod-02", "prod-04", "prod-01"],
  lowStockProductIds: ["prod-06", "prod-01"]
};

export const searchSynonyms: Record<string, string[]> = {
  hoodie: ["sweatshirt", "oversized"],
  sweatshirt: ["hoodie"],
  tee: ["tshirt", "t-shirt"],
  coat: ["outerwear"],
  trouser: ["pants"]
};
