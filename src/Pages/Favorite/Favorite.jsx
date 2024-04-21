import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Card } from "antd";
import Card1 from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button1 from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import CategorySub from "../../Components/CategorySubComp/CategorySub";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useRemoveFromFavourite from "../../Hooks/useRemoveFromFavourite";
import { likedProductAction } from "../../Store/Slices/Favorites";

const { Meta } = Card;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Favorite() {
  const favorite = useSelector((state) => state.favourite.favourite);
  let search = favorite;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { RemoveProductFromFavourite } = useRemoveFromFavourite();
  const RemoveFavourite = (productId) => {
    RemoveProductFromFavourite(productId);
  };

  const showPrice = (number) => {
    const formattedNumber = new Intl.NumberFormat("en-EG", {
      style: "currency",
      currency: "EGP",
      minimumFractionDigits: 0, // Specifies the minimum number of fraction digits
      maximumFractionDigits: 2,
    }).format(number);
    return formattedNumber.replace(/\.00$/, "");
  };

  const formatDateDifference = (updatedAt) => {
    const currentDate = new Date();
    const updatedDate = new Date(updatedAt);
    const timeDifference = currentDate - updatedDate;

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesDifference = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

    if (daysDifference > 0) {
      return `${daysDifference} day${daysDifference > 1 ? "s" : ""} ago`;
    } else if (hoursDifference > 0) {
      return `${hoursDifference} hour${hoursDifference > 1 ? "s" : ""} ago`;
    } else if (minutesDifference > 0) {
      return `${minutesDifference} minute${minutesDifference > 1 ? "s" : ""} ago`;
    } else {
      return 'just now';
    }
};

  return (
    <div className="container pt-7">
      {/* <CategorySub></CategorySub> */}
      <div className="min-h-48">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label={
                  <h1 className="font-bold text-black-500">Favourites </h1>
                }
                {...a11yProps(0)}
              />
              <Tab
                label={
                  <h1 className="font-bold text-black-500">Saved searches</h1>
                }
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="flex gap-4 flex-wrap ">
              {favorite?.length > 0 &&
                favorite.map((prod, i) => {
                  return (
                    <Card1 className="w-full md:w-80 lg:w-72 p-0" key={i}>
                      <CardMedia
                        className="h-48 md:h-40 m-0"
                        image={prod?.images[0]}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          <div className="flex justify-between">
                            <span className="font-sans text-lg text-red-600 font-semibold">
                              {showPrice(prod.price)}
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                RemoveFavourite(prod._id);
                              }}
                            >
                              <FaHeart className="text-red-500" />
                            </button>
                          </div>
                        </Typography>
                        <Typography className=" h-14 pb-2">
                          <span className="text-sm font-semibold">
                            {prod?.name}
                          </span>
                        </Typography>
                        <Typography className="text-lg">
                          <span className="text-sm">{prod?.location}</span>
                        </Typography>
                        <div className="flex py-1">
                        <p className="text-sm text-gray-700">
                          {formatDateDifference(prod.updatedAt)}
                        </p>
                      </div>
                      </CardContent>
                      <CardActions></CardActions>
                    </Card1>
                  );
                })}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="flex flex-wrap gap-2">
              {search?.length > 0 ? (
                search.map((product) => {
                  return (
                    <Card1 sx={{ maxWidth: 400, minWidth: 300 }}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image={product.images[0]}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.description}
                        </Typography>
                      </CardContent>
                      <CardActions></CardActions>
                    </Card1>
                  );
                })
              ) : (
                <div className="text-center bg-green-300 w-full">No data</div>
              )}
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
