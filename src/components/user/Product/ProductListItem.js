import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import DeleteProduct from '../../../containers/user/DeleteProduct';
import Edit from '../Button/EditBtn';
import * as color from '../../../color';

const Item = styled.div`
  width: 650px;
  display: flex;
  justify-content: space-between;
  margin: 15px 10px;
  border-radius: 5px;
  color: ${color.colorBlack};
  box-shadow: 0 1px 2px ${color.colorA};
  background-color: white;
  padding: 0;
  @media (max-width: 700px) {
    width: 95vw;
    flex-direction: column;
  }
`;

const Image = styled.img`
  display: block;
  width: 160px;
  max-height: 140px;
  @media (max-width: 700px) {
    width: 100px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  overflow: hidden;
`;

const Info = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;



const LocationTime = styled.div`
  font-size: 16px;
  font-weight: 300;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const Action = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 700px) {
    flex-direction: row;
  }
`;

const ProductListItem = ({ id, item, index }) => {
  const {  location, price, date,imageurl } = item;
  return (
    <Item>
      <InfoBox>
        <Image src={imageurl} />
        <Info>
          <LocationTime>
            {location} ‒ {moment(moment(date).format()).fromNow()}
          </LocationTime>
          <Price>Rs. {price}</Price>
        </Info>
      </InfoBox>
      <Action>
        <Edit to={`/user/edit/${id}`}>Edit</Edit>
        <DeleteProduct pid={id}>Delete</DeleteProduct>
      </Action>
    </Item>
  );
};

ProductListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ProductListItem;
