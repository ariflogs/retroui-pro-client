import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";

const ProductCardOne = () => {
  const [quantity, setQuantity] = useState(2);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="px-4 py-16 flex justify-center">
      <div className="w-[400px] border-2 bg-background p-6">
        {/* Product Image and Heart Icon */}
        <div className="relative">
          <img
            src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/nike.png"
            alt="Nike shoe"
            className="w-full h-64 object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <Text as="h2">Nike Air Max</Text>
          </div>
          <Text className="text-muted-foreground font-medium mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elitsed mod tempor
            incididunt.
          </Text>

          {/* Price */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <Text className="text-destructive line-through text-lg">
                $16.95
              </Text>
              <Text className="text-2xl font-bold">$83.99</Text>
            </div>

            {/* Quantity Selector */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4 border-2">
                <button
                  onClick={handleDecrement}
                  className="p-3 hover:bg-black hover:text-white transition-colors"
                >
                  <Minus size={20} />
                </button>
                <span className="text-xl font-medium w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="p-3 hover:bg-black hover:text-white transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            size="lg"
            className="w-full bg-black text-white shadow-none shadow-primary duration-200 tracking-wide hover:-translate-y-1 hover:shadow-md hover:bg-black"
          >
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardOne;
