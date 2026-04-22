# THE INFINITY STORE

Premium, minimal, full-stack fashion commerce monorepo with a Next.js storefront/admin, Express API, Prisma schema, shared commerce models, and luxury-first design system.

## Workspace

- `apps/web` - Next.js storefront and admin console
- `apps/api` - Express API with JWT auth, role checks, inventory-safe orders, and Razorpay prep hooks
- `packages/shared` - shared models and curated commerce seed data
- `prisma` - PostgreSQL schema for users, categories, products, orders, and order items

## Getting started

1. Install dependencies with `npm install`
2. Copy `.env.example` to `.env`
3. Run `npm run prisma:generate`
4. Run `npm run prisma:migrate`
5. Start the API with `npm run dev:api`
6. Start the web app with `npm run dev:web`

## Feature highlights

- Premium minimal storefront with hero, shop, product, cart, checkout, account, and order tracking
- Admin dashboard with products, categories, orders, and marketing controls
- Shared TypeScript commerce models to keep the API and web app in sync
- JWT auth with admin route protection and role-based middleware
- Inventory-safe order creation and stock deduction hooks
- Razorpay-ready payment payload generation for checkout integration
