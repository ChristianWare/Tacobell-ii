export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  description: string;
  name: string;
}

export interface fullProduct {
  // content: unknown;
  content: Array<Block | ImageBlock>;
  _id: string;
  images: any;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
}

export interface categoryData {
  _id: string;
  name: string;
}

export interface Block {
  _key: string;
  _type: "block";
  children: Array<{
    _key: string;
    _type: string;
    marks: string[];
    text: string;
  }>;
  markDefs: Array<any>;
  style: string;
}

export interface ImageBlock {
  _key: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}