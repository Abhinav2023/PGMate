import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';
import * as color from '../../../color';

const StyledLink = styled(Link)`
  display: block;
  margin: 30px 0;
  width: 650px;
  padding: 0;
  text-decoration: none;
  color: ${color.colorBlack};
  box-shadow: 0 1px 2px ${color.colorA};
  background-color: white;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 700px) {
    width: 95vw;
  }
`;

const Details = styled.div`
  display: flex;
`;

const Image = styled.img`
  display: block;
  width: 160px;
  max-height: 140px;

  @media (max-width: 700px) {
    width: 100px;
  }
`;

const Info = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;

const Heading = styled.div`
  color: ${color.colorA};
  font-size: 22px;
  font-weight: 300;
  text-transform: capitalize;
  white-space: nowrap;
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const Time = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${color.colorB};
  margin-right: 10px;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const ProductListItem = ({ id, item, index }) => {
  const { price, date,imageurl,location } = item;
  return (
    <StyledLink to={`/view/${id}`}>
      <Details>
        <Image src={imageurl} />
        <Info>
			<Heading>{location}</Heading>
          <Price>Rs. {price}/Month</Price> 
          <Time>{moment(moment(date)).fromNow()} Added</Time>
        </Info>
      </Details>
    </StyledLink>
  );
};

ProductListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ProductListItem;
