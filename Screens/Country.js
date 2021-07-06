import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {CountryDropdown , RegionDropdown , CountryRegionData } from 'react-country-region-selector'
export default class Country extends Component {
    constructor (props) {
        super(props);
        this.state = { country: '', region: '' };
      }
    
      selectCountry (val) {
        this.setState({ country: val });
      }
    
      selectRegion (val) {
        this.setState({ region: val });
      }
    
    render() {
        const { country, region } = this.state;
        return (
            <View style={{width:300 , padding: 10,}}>
                    <CountryDropdown style={{paddingTop:10,marginBottom:10}}
                    value={country}
                    onChange={(val) => this.selectCountry(val)}
                    />
                    <View style={{paddingLeft:5,marginBottom:5}}><Text>{selectCountry}</Text></View>
                    <RegionDropdown style={{paddingTop:10}}
                    country={country}
                    value={region}
                    onChange={(val) => this.selectRegion(val)}
                    />
                    <View style={{paddingLeft:5,marginBottom:5}}><Text>{selectRegion}</Text></View>
            </View>
        )
    }
}
