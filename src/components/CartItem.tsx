import Image from "next/image";
import { CartItem as CartItemType } from "@/interfaces/cart";
import IconButton from "@mui/material/IconButton";
import { Cancel } from "@mui/icons-material";

interface CartItemProps {
    item: CartItemType;
    onRemove: (id: number) => void;
}

export default function CartItem({ item, onRemove }: CartItemProps) {
    return (
        <div className="flex items-center justify-between border-b pb-4 mb-4">
            <Image src={item.image} alt={item.title} width={64} height={64} className="object-contain" />
            <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500">${item.price} x {item.quantity}</p>
            </div>
            <IconButton
                aria-label="remove from favorites"
                onClick={() => onRemove(item.id)}
            >
                <Cancel />
            </IconButton>
        </div>
    );
}
