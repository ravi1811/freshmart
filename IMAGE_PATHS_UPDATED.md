# FreshMart image path updates

## Shop by category
The homepage category cards now use existing, real image files in `public/images/products/`:

- Leafy Vegetables: `/images/products/vegetables/spinach.png`
- Fruiting Vegetables: `/images/products/vegetables/tomato.png`
- Root Vegetables: `/images/products/vegetables/carrot.png`
- Herbs & Seasoning: `/images/products/groceries/spices.png`
- Beans & Legumes: `/images/products/groceries/lentils_dal.png`
- Fruits & Daily Essentials: `/images/products/fruits/apple.png`

## Next.js public paths
Files stored under `public/images/...` must be referenced in the browser as `/images/...` (without `public`).

## Verify category assets
All six paths above were checked against the actual files in `public/`. If you replace an image later, keep the filename and folder the same or update `data/categories.ts` accordingly.
