// types/products.ts

export type Produto = {
  id: string;
  nome: string;
  imagem: string;
  preco: string;
  descricao?: string;
};

export type ProductsByCategory = {
  products: {
    [key: string]: Produto[];
  };
};
