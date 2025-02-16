import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Cancel, ShoppingBasket } from '@mui/icons-material';


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

interface FavoriteItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

interface RecipeReviewCardProps {
  data: Product;
  onAddToFavorites?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onRemoveFromFavorites?: (id: FavoriteItem) => void;
}

const RecipeReviewCard: React.FC<RecipeReviewCardProps> = ({ data, onAddToFavorites, onAddToCart, onRemoveFromFavorites }) => {

  return (
    <Card className="flex flex-col gap-4 !rounded-card !shadow-card">
      <div className="flex flex-col items-stretch">
        <div className="grid grid-cols-[auto_1fr] gap-2 p-3">
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
          <div className="grid">
            <h2 className="line-clamp-3">{data.title}</h2>
            <Typography>{data.category}</Typography>
          </div>
        </div>
        <CardMedia
          component="img"
          height="194"
          image={data.image}
          alt="Paella dish"
          className="!w-fit max-h-[190] ml-auto mr-auto px-3"
        />
      </div>
      <div className="h-full grid content-end">
        <div className="flex justify-between items-center pr-4 pl-1">
          <div className="flex">
            {onAddToFavorites && (
              <IconButton aria-label="add to favorites" onClick={() => onAddToFavorites(data)}>
                <FavoriteIcon />
              </IconButton>
            )}
            {onAddToCart && (
              <IconButton aria-label="share" onClick={() => onAddToCart(data)}>
                <ShoppingBasket />
              </IconButton>
            )}
            {onRemoveFromFavorites && (
              <IconButton aria-label="remove" onClick={() => onRemoveFromFavorites(data)}>
                <Cancel />
              </IconButton>
            )}
          </div>
          <span className="font-bold text-xl text-primary">{'$' + data.price}</span>
        </div>
        <CardContent>
          <Typography className="capitalize line-clamp-4">
            {data.description}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}


export default RecipeReviewCard;
