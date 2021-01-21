import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Sweater from "../../pexels-dom-j-45982.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 220,
  },
  media: {
    height: 150,
  },
});

export default function Product() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={Sweater} title="Sweater" />
        <CardContent>
          <Typography variant="caption" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
            minus.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton color="primary" aria-label="add to shopping cart">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
