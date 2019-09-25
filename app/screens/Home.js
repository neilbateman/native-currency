import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput'

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';


class Home extends React.Component {
    handleChangeText = () => {
        console.log('change text');
      };
    
      handlePressBaseCurrency = () => {
        console.log('press base currency');
      };
    
      handlePressQuoteCurrency = () => {
        console.log('press quote currency');
      };
    
      handleSwapCurrency = () => {
        console.log('handle swap currency');
      };
    render() {
        return (
    <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Logo />
    <InputWithButton buttonText={TEMP_BASE_CURRENCY} 
        onPress={this.handlePressBaseCurrency} 
        defaultValue={TEMP_BASE_PRICE}/>
    <InputWithButton buttonText={TEMP_QUOTE_CURRENCY} 
        editable={false} buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          value={TEMP_QUOTE_PRICE}/>
    </Container>
        )
    }
}
export default Home;