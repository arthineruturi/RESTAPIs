export async function fetchCategories() {
  const response = await fetch("/api/categories");
  return await response.json();
}

export async function fetchProducts() {
  const response = await fetch("/api/products");
  return await response.json();
}

export async function fetchProductsByCategory(category) {
  const response = await fetch(`/api/products/category/${category}`);
  return await response.json();
}

