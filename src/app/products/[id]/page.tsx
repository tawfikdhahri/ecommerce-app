import QuantitySelector from "@/app/components/QuantitySelector";
import { Product } from "@/app/types";

const getProduct = async (id: string) => {
  const res = await fetch(`${config.baseUrl}/products/${id}`);
  return (await res.json()) as Product;
};

import Slider from "@/app/components/Slider";
import Collapsible from "@/app/components/common/Collapsible";
import { config } from "@/app/config";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);
  if (!product) return <div>Product not found</div>;

  return (
    <div className="h-full">
      <div className=" flex justify-center items-center  py-32 max-w-screen-xl w-full mx-auto px-4  flex-col md:flex-row">
        <div className="md:w-1/3">
          {/*just hard coding the product images for sake of Gallery*/}
          <Slider images={[product.image, product.image, product.image]} />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-bold">${product.price}</p>
            <p className="text-sm text-green-700 font-semibold">3 available</p>
          </div>
          <div className="mb-4">
            <Collapsible label="Shipping information">
              <p className="text-gray-500 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                nihil fugit incidunt odit est. Veritatis rerum in illo placeat
                minima labore assumenda culpa similique sapiente ducimus
                corrupti unde omnis quos totam, dolores voluptate. Culpa ea qui
                nobis perspiciatis, obcaecati perferendis sunt pariatur autem
                quaerat magnam molestiae officiis! Laudantium, repellat
                doloribus!
              </p>
            </Collapsible>
          </div>
          <QuantitySelector product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
