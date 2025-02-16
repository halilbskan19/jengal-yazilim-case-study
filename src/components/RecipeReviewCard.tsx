import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Cancel, ShoppingBasket } from "@mui/icons-material";
import { Product } from "@/interfaces/product";
import { CartHandler, FavoriteHandler } from "@/interfaces/card-handler";

interface RecipeReviewCardProps extends FavoriteHandler, CartHandler {
  data: Product;
}

const RecipeReviewCard: React.FC<RecipeReviewCardProps> = ({
  data,
  onAddToFavorites,
  onAddToCart,
  onRemoveFromFavorites,
}) => {
  const [isFavorited, setIsFavorited] = React.useState(false);

  React.useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites);
      setIsFavorited(favorites.some((item: Product) => item.id === data.id));
    }
  }, [data.id]);

  return (
    <Card className="flex flex-col gap-8 !rounded-card !shadow-card">
      <div className="flex flex-col items-stretch gap-8 h-full">
        <div className="grid gap-2 p-3 min-h-[96]">
          <div className="grid gap-2">
            <h2 className="line-clamp-2 text-md">{data.title}</h2>
            <Typography className="flex items-end text-xs capitalize">{data.category}</Typography>
          </div>
        </div>
        <div className="grid h-full items-center">
          <CardMedia
            component="img"
            height="194"
            image={data.image}
            alt={data.title}
            className="!w-fit max-h-[230] ml-auto mr-auto px-3"
          />
        </div>
      </div>
      <div className="grid content-end">
        <div className="flex justify-between items-center pr-4 pl-1">
          <div className="flex">
            {onAddToFavorites && (
              <IconButton
                aria-label="add to favorites"
                onClick={() => {
                  onAddToFavorites(data);
                  setIsFavorited(true);
                }}
                color={isFavorited ? "error" : "default"}
              >
                <FavoriteIcon />
              </IconButton>
            )}
            {onAddToCart && (
              <IconButton aria-label="add to cart" onClick={() => onAddToCart(data)}>
                <ShoppingBasket />
              </IconButton>
            )}
            {onRemoveFromFavorites && (
              <IconButton
                aria-label="remove from favorites"
                onClick={() => {
                  onRemoveFromFavorites(data);
                  setIsFavorited(false);
                }}
              >
                <Cancel />
              </IconButton>
            )}
          </div>
          <span className="font-bold text-xl text-link">${data.price}</span>
        </div>
        <CardContent>
          <Typography className="capitalize line-clamp-3 text-sm">{data.description}</Typography>
        </CardContent>
      </div>
    </Card>
  );
};


export default RecipeReviewCard;
