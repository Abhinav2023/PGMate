import React from 'react';
import FilterLocation from '../../components/public/Filter/Location/FilterLocation';
import SortBy from '../../components/public/Filter/SortBy';
import FilterBox from '../../components/public/Filter/FilterBox';

class Filter extends React.Component {
  state = {
    modalLocation: false,
    modalCategory: false,
    locations: ['Kota','Sawai Madhopur','Allahabad','Delhi'],
    category: [],
    subcategory: []
  };

  // control modal visibility for location
  handleModalLocation = () => {
    this.setState({ modalLocation: !this.state.modalLocation });
  };

  render() {
    return (
      <FilterBox>
        <FilterLocation
          visible={this.state.modalLocation}
          locations={this.state.locations}
          handleModal={this.handleModalLocation}
          currentLocation={this.props.currentLocation}
          handleLocation={this.props.handleLocation}
        />
        <SortBy
          handleSortBy={this.props.handleSortBy}
          currentSortBy={this.props.currentSortBy}
        />
      </FilterBox>
    );
  }
}

export default Filter;
