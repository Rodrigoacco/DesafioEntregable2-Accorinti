class ProductManager {
    constructor() {
        this.products = [];
        this.idCounter = 0;
    }

    getProducts() {
    return this.products;
    }

    addProduct({ title, description, price, thumbnail, code, stock }) {
        const id = ++this.idCounter;
        const newProduct = { id, title, description, price, thumbnail, code, stock };
        this.products.push(newProduct);
        return newProduct;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            throw new Error(`Product with id ${id} not found`);
        }
        return product;
    }

    updateProduct(id, updates) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            throw new Error(`Product with id ${id} not found`);
        }
        const product = { ...this.products[index], ...updates, id };
        this.products[index] = product;
        return product;
    }

    deleteProduct(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            throw new Error(`Product with id ${id} not found`);
        }
        const [deletedProduct] = this.products.splice(index, 1);
        return deletedProduct;
    }
}

const manager = new ProductManager();
console.log(manager.getProducts()); // []

const newProduct = manager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
});
console.log(newProduct); // { id: 1, title: "producto prueba", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: "abc123", stock: 25 }

console.log(manager.getProducts()); // [{ id: 1, title: "producto prueba", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: "abc123", stock: 25 }]

const productById = manager.getProductById(1);
console.log(productById); // { id: 1, title: "producto prueba", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: "abc123", stock: 25 }

const updatedProduct = manager.updateProduct(1, { title: "producto actualizado" });
console.log(updatedProduct); // { id: 1, title: "producto actualizado", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: "abc123", stock: 25 }

const deletedProduct = manager.deleteProduct(1);
console.log(deletedProduct); // { id: 1, title: "producto actualizado", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: "abc123", stock: 25 }
console.log(manager.getProducts()); // []
