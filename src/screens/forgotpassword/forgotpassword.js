import React, { Component,useState } from "react";
import {  StyleSheet,View } from "react-native";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider
} from 'native-base';
const styles = StyleSheet.create({
    error: {
        color: 'red',
		marginTop: 5,
    },
});
class ForgotpasswordView extends Component {
	state = { 
	invalidEmail:false,
	emailEmpty: false,
	};
	constructor(props) {
	super(props);
	this.redirect = this.redirect.bind(this);
	}
	componentDidMount() {	 	
    }
    componentWillUnmount() {
    }
	redirect() {
	const { navigate } = this.props.navigation;
	this.props.navigation.navigate('LoginView');
	}
	isEmailAddress(str) {
		var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		return pattern.test(str);  // returns a boolean 
	}
	EmailValidationTrigger = (email) => {
		let error_val = 0;
		if(typeof email === "undefined" || email=="") {
			this.setState({ emailEmpty: true});
			error_val = 1;
		}
		else {
			if(email=='') {
				
				this.setState({ emailEmpty: true  });
				error_val = 1;
			}
			else {
			if(this.isEmailAddress(email)==false) {
				
				this.setState({ invalidEmail: true  });
				error_val = 1;
			}
			else {
				this.setState({ invalidEmail: false });
			}
			this.setState({ emailEmpty: false });
			}
		}
		return error_val;
	}
	formsubmission = (e) => {
		let email=this.state.email;
		let error1 = this.EmailValidationTrigger(email);
		if(error1==0 ){
			alert('Everything okay for submission');
		}
		
    }
	OnchangeEmail = (email) => {
		 this.setState({email:email,emailEmpty:false,invalidEmail:false,responseMessage:null});
		this.EmailValidationTrigger(email);
	}
	ForgotpasswordHtml = () => {
	return  <Box
        safeArea
        flex={1}
        p={2}
        w="90%"
        mx='auto'
      >
        <Heading size="lg" color='primary.500'>
          Forgot Password
        </Heading>
        <Heading color="muted.400" size="xs">
         Enter your email to reset your password.
        </Heading>

        <VStack space={2} mt={5}>
          <FormControl>
            <FormControl.Label _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
                Email
            </FormControl.Label>
            <Input value={this.state.email}  onChangeText={(email) => this.OnchangeEmail(email)}  />
			<Text style={[styles.error]} fontSize="sm">
				{this.state.emailEmpty ? " Email is a required field." : null}
				{this.state.invalidEmail ? " Email is invalid." : null}
			</Text>
          </FormControl>
       
          <VStack  space={2}>
          <Button colorScheme="cyan" _text={{color: 'white' }}  onPress={this.formsubmission}>
              Reset
          </Button>

<HStack justifyContent="center" alignItem='center'>
       
         
         
          </HStack>
          </VStack>
         
        </VStack>
      </Box>
   
	}
	render() {
		return this.ForgotpasswordHtml();
	}
}
export default ForgotpasswordView;