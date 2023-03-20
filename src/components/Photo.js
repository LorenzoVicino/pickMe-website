import React, { useState, useEffect } from "react";
import { Box, Button, Skeleton, Stack } from "./styled";
import { ReactComponent as AddToCart } from "../images/addToCart.svg";
import { ReactComponent as RemoveFromCart } from "../images/removeFromCart.svg";
import styled from "styled-components";
import {
  addSingleElementToCart,
  removeFromCart,
} from "../redux/reducers/cart-reducer";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Card = styled(Box)`
  &:hover {
    .card-action {
      opacity: 1;
      visibility: visible;
      transform: rotateX(0deg);
      height: 100% !important;
    }
  }

  .card-action {
    opacity: 0;
    visibility: hidden;
    transition: all 125ms linear;
    transform: rotateX(-90deg);
    height: 0px;
    overflow: hidden;
  }
`;

const Photo = ({ alt_description, color, urls: { full }, likes, id }) => {
  const [load, setLoad] = useState(false);
  const cartList = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // const getPhotos = function(state) {
  //   return state.photos;
  // };

  // const getCurrentPhotoId = function(state) {
  //   return state.photos.photos{id};
  // };

  // const getCurrentProduct = createSelector(
  //   getPhotos,
  //   getCurrentPhotoId,
  //   (photos, currentPhotoId) => {
  //     return photos.get(currentPhotoId);
  //   }
  // );

  const [onClick, setOnClick] = useState(false);

  useEffect(() => {
    if (onClick === true) {
      toast("Notification from useEffect", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }, [onClick]);

  function addOnClick() {
    return (
      dispatch(addSingleElementToCart({ id, url: full, likes })),
      toast("NFT Added to the cart!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    );
  }

  function removeOnClick() {
    return (
      dispatch(removeFromCart({ id, url: full, likes })),
      toast("NFT Removed from the cart!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    );
  }

  return (
    <Card
      maxWidth="367px"
      height="343px"
      width="calc(100%)"
      borderRadius="4px 4px 0px 0px"
      overflowX="hidden"
      position="relative"
      style={{
        transform: "translateZ(0)",
      }}
    >
      <Box width="100%" height="100%" bg={color}>
        <img
          src={full}
          alt={alt_description}
          width="100%"
          height="100%"
          onLoad={() => setLoad(true)}
          style={{
            display: load ? "block" : "none",
          }}
        />
        <Skeleton
          width="100%"
          height="100%"
          style={{
            display: load ? "none" : "block",
          }}
        />
      </Box>
      <Box
        className="card-action"
        position="absolute"
        bottom="0px"
        width="100%"
        maxHeight="72px"
        bg="white"
      >
        <Stack
          justify="space-between"
          align="center"
          width="100%"
          height="100%"
          px="20px"
        >
          <p
            style={{
              color: "var(--grey-800)",
            }}
          >
            {" "}
            {likes}€
          </p>

          {cartList.find((photo) => photo.id === id) ? (
            <Button
              onClick={removeOnClick}
              variant={"text"}
              rightIcon={<RemoveFromCart />}
              iconColor="purple.300"
            />
          ) : (
            <Button
              onClick={() => {
                setOnClick(true);
                addOnClick();
              }}
              variant={"text"}
              rightIcon={<AddToCart />}
              iconColor="purple.300"
            />
          )}
        </Stack>
      </Box>
    </Card>
  );
};

export default Photo;

// eslint-disable-next-line no-lone-blocks
{
  /* {inCart ? (
  <Button rightIcon={<ColoredCart />} onClick={addClick}></Button>
) : (
  <Button>
    <ClearIcon rightIcon={<ClearIcon />} onClick={removeClick} />
  </Button>
)} */
}

// eslint-disable-next-line no-lone-blocks
{
  /* {inCart ? (
  <Button
    onClick={() => {
      dispatch(
        addSingleElementToCart({ id, url: full, likes }),
        setIsInCart(true)
      );
      toast("NFT Added to the cart!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }}
    variant={"text"}
    rightIcon={<ColoredCart />}
    iconColor="purple.300"
  />
) : (
  <Button
    onClick={() => {
      dispatch(
        removeFromCart({ id, url: full, likes }),
        setIsInCart(false)
      );
      toast("NFT Removed from the cart!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }}
    variant={"text"}
    rightIcon={<ClearIcon />}
    iconColor="purple.300"
  />
)} */
}
