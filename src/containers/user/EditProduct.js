import React from 'react';
import base from '../../firebase';

import InputText from '../../components/user/Form/InputText';
import InputDropDown from '../../components/user/Form/InputDropDown';
import InputTextarea from '../../components/user/Form/InputTextarea';
import SubmitButton from '../../components/user/Form/SubmitButton';
import Message from '../../components/user/Form/Message';
import StyledLink from '../../components/utility/StyledLink';
import Wrapper from '../../components/user/Form/Wrapper';

class EditProduct extends React.Component {
  state = {
    categoryList: [],
    locationList: ['Kota','Sawai Madhopur','Allahabad','Agra','Lucknow','Delhi'],
    subcategoryList: [],
    category: '',
    subcategory: '',
    location: '',
	imageurl: '',
    title: '',
    price: '',
    description: '',
    mobile: '',
    titleMessage: false,
    priceMessage: false,
    descriptionMessage: false,
    mobileMessage: false
  };

  componentDidMount() {
    this.setStateInfo();
  }



  setStateInfo = () => {
    if (this.props.productList.length > 0) {
      const product = this.props.productList.filter(
        item => item.key === this.props.match.params.key
      );
      this.setState({ ...product[0] });
    }
  };

  handleChange = (event, name) => {
    this.setState({ [name]: event.target.value });
  };



  handlePriceChange = event => {
    const value = event.target.value;
    if (!isNaN(value)) {
      this.setState({ price: value, priceMessage: false });
    } else {
      this.setState({ priceMessage: 'Numbers only' });
    }
  };

  handleDescriptionChange = event => {
    const value = event.target.value;
    const valueLength = value.length;
    if (valueLength <= 1500) {
      this.setState({
        description: value,
        descriptionMessage:
          valueLength > 0 && valueLength < 1500
            ? `${1500 - valueLength} characters left`
            : false
      });
    } else {
      this.setState({ descriptionMessage: false });
    }
  };
	handleImageUrlChang=event=>{
		const value=event.target.value;
		this.setState({
			imageurl:value
		});
	};

  handleMobileChange = event => {
    const value = event.target.value;
    const valueLength = value.length;
    if (!isNaN(value)) {
      if (valueLength <= 10) {
        this.setState({
          mobile: value,
          mobileMessage:
            valueLength > 0 && valueLength < 10
              ? `${10 - valueLength} digit left`
              : false
        });
      } else {
        this.setState({ mobileMessage: false });
      }
    } else {
      this.setState({ mobileMessage: 'Numbers only' });
    }
  };


  handleSubmit = event => {
    event.preventDefault();
    if (this.state.price.length <= 0) {
      this.setState({ priceMessage: 'Can not be empty' });
    }
    if (this.state.description.length <= 400) {
      this.setState({
        descriptionMessage: 'At least 400 characters'
      });
    }
    if (this.state.mobile.length < 10) {
      this.setState({ mobileMessage: 'Must be 10 digit' });
    }

    if (
      this.state.price.length > 0 &&
      this.state.description.length >= 400 &&
      this.state.mobile.length === 10
    ) {
      base
        .update(`/products/${this.props.match.params.key}`, {
          data: {
			  imageurl: this.state.imageurl,
            location: this.state.location,
            type: this.state.type,
            price: this.state.price,
            description: this.state.description,
            mobile: this.state.mobile
          }
        })
        .then(() => console.log('success'))
        .then(() => this.props.history.push('/user/product-list'))
        .catch(error => console.log(error));
    }
  };

  render() {
    return (
      <Wrapper>
        {this.state.type ? (
          <React.Fragment>
            
            
            <InputDropDown
              title="Location"
              options={this.state.locationList}
              value={this.state.location}
              handleChange={event => this.handleChange(event, 'location')}
            />
            
            <InputDropDown
              title="Type"
              options={['Used', 'New']}
              value={this.state.type}
              handleChange={event => this.handleChange(event, 'type')}
            />
            <InputText
              title="Price"
              placeholder="Product Price"
              value={this.state.price}
              handleChange={event => this.handlePriceChange(event)}
            />
            {this.state.priceMessage && (
              <Message>{this.state.priceMessage}</Message>
            )}
            <InputTextarea
              title="Description"
              placeholder="Product Details "
              value={this.state.description}
              handleChange={event => this.handleDescriptionChange(event)}
            />
            {this.state.descriptionMessage && (
              <Message>{this.state.descriptionMessage}</Message>
            )}
			<InputTextarea
				title= "Image Url"
				placeholder="Image Url"
				value={this.state.imageurl}
				handleChange={event =>this.handleImageUrlChang(event)}
			/>
            <InputText
              title="Mobile"
              placeholder="Your Mobile"
              value={this.state.mobile}
              handleChange={event => this.handleMobileChange(event)}
            />
            {this.state.mobileMessage && (
              <Message>{this.state.mobileMessage}</Message>
            )}
            <SubmitButton onClick={this.handleSubmit}>UPDATE</SubmitButton>
          </React.Fragment>
        ) : (
          <StyledLink to="/user/product-list">Get Back</StyledLink>
        )}
      </Wrapper>
    );
  }
}

export default EditProduct;
