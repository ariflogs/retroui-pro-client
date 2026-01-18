import { X, Check, Copy } from "lucide-react";
import { useState } from "react";
import { usePPP } from "@/hooks/usePPP";
import { getPPPCouponCode } from "@/lib/ppp";
import { Text } from "./ui";
import { toast } from "sonner";

export default function PPPBanner() {
  const { country, isLoading, isDismissed, dismiss } = usePPP();
  const [isCopied, setIsCopied] = useState(false);

  if (isLoading || isDismissed || !country) {
    return null;
  }

  const couponCode = getPPPCouponCode(country.discount);

  if (!couponCode) {
    return null;
  }

  const copyCoupon = () => {
    navigator.clipboard.writeText(couponCode);
    setIsCopied(true);
    toast("Coupon code copied to clipboard! 🚀");
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div className="bg-primary text-black text-center py-2 px-4 font-medium">
      <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <Text className="text-sm flex flex-wrap items-center gap-2">
          <span>{country.flag}</span>
          <span>
            We support <strong>Purchasing Power Parity</strong> in{" "}
            {country.name}! Use code{" "}
          </span>
          <span className="font-bold bg-black text-white rounded-sm px-2 py-0.5 inline-flex items-center gap-2">
            {couponCode}
            <button
              className="cursor-pointer hover:opacity-70"
              onClick={copyCoupon}
              aria-label="Copy coupon code"
            >
              {isCopied ? (
                <Check className="w-3 h-3" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </button>
          </span>
          <span>
            for <strong>{country.discount}% off</strong>
          </span>
        </Text>

        <button
          onClick={dismiss}
          className="p-1 hover:bg-black/10 rounded-sm transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
