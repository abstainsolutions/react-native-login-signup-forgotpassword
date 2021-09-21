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
class SignupView extends Component {
	state = { 
	password_field:'',
	email:'',
	confirmpassword:'',
	invalidEmail:false,
	emailEmpty: false,
	passwordEmpty:false,
	confirmpasswordEmpty:false,
	invalidPassword:false,
	confirmpasswordMatch:false,
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
	OnchangeEmail = (email) => {
		 this.setState({email:email,emailEmpty:false,invalidEmail:false,responseMessage:null});
		this.EmailValidationTrigger(email);
	}
	OnChangePassword = (password_field) => {
		 this.setState({password_field:password_field,passwordEmpty:false,invalidPassword:false,responseMessage:null});
		 this.PasswordValidationTrigger(password_field);
	}
	OnChangeConfirmPassword = (confirmpassword) => {
		 this.setState({confirmpassword:confirmpassword,confirmpasswordEmpty:false,confirmpasswordMatch:false,responseMessage:null});
		 this.ConfirmPasswordValidationTrigger(confirmpassword);
	}
	
	isValidPassword(str) {
		if(str.length>=8)
			return true;
		else
			return false;
	}
	isEmailAddress(str) {
		var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		return pattern.test(str);  // returns a boolean 
	}
	ConfirmPasswordValidationTrigger = (confirmpassword) => {

			let error_val = 0;
			if(typeof confirmpassword === "undefined" || confirmpassword=="") {
				this.setState({ confirmpasswordEmpty: true, confirmpasswordMatch: false});
				error_val = 1;
			} else {
				if(this.state.password_field!=confirmpassword){
					this.setState({ confirmpasswordMatch: true,confirmpasswordEmpty: false});
					error_val = 1;
				}
			}
		
		return error_val;
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
	PasswordValidationTrigger = (password_field) => {
		let error_val = 0;
		if(typeof password_field === "undefined" || password_field=="") {
			error_val = 1;
			this.setState({ passwordEmpty: true });
		}
		else {
			if(password_field=='') {
				error_val = 1;
				this.setState({ passwordEmpty: true  });
			}
			else {
				if(this.isValidPassword(password_field)==false) {
				error_val = 1;
				this.setState({ invalidPassword: true  });
			}
			else {
				this.setState({ invalidPassword: false });
			}
			this.setState({ passwordEmpty: false });
			}
		}
		return error_val;
	}
	formsubmission = (e) => {
		let email=this.state.email;
		let password_field = this.state.password_field;
		let confirmpassword = this.state.confirmpassword;
		let error1 = this.EmailValidationTrigger(email);
		let error2 = this.PasswordValidationTrigger(password_field);
		let error3 = this.ConfirmPasswordValidationTrigger(confirmpassword);
		if(error1==0 && error2==0 && error3==0){
			alert('Everything okay for submission');
		}
		
    }
	SignupViewHtml = () => {
	return  <Box
        safeArea
        flex={1}
        p={2}
        w="90%"
        mx='auto'
      >
        <Heading size="lg" color='primary.500'>
          New User
        </Heading>
        <Heading color="muted.400" size="xs">
          Sign up to continue!
        </Heading>

        <VStack space={2} mt={5}>
          <FormControl>
            <FormControl.Label _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
                Email
            </FormControl.Label>
            <Input value={this.state.email}  onChangeText={(email) => this.OnchangeEmail(email)}/>
			<Text style={[styles.error]} fontSize="sm">
				{this.state.emailEmpty ? " Email is a required field." : null}
				{this.state.invalidEmail ? " Email is invalid." : null}
			</Text>
          </FormControl>
          <FormControl>
            <FormControl.Label  _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
                Password
            </FormControl.Label>
            <Input type="password" onChangeText={(password_field) => this.OnChangePassword(password_field)}  />
			<Text style={[styles.error]} fontSize="sm">
				{this.state.passwordEmpty ? " Password is a required field." : null}
				{this.state.invalidPassword ? " Password must be 8 characters long." : null}
			</Text>
          </FormControl>
          <FormControl>
            <FormControl.Label  _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
               Confirm Password
            </FormControl.Label>
            <Input   type="password"  onChangeText={(confirm_password_field) => this.OnChangeConfirmPassword(confirm_password_field)}  />
			<Text style={[styles.error]} fontSize="sm">
				{this.state.confirmpasswordEmpty ? " Confirm password is a required field." : null}
				{this.state.confirmpasswordMatch ? " Confirm password must match password." : null}
			</Text>
          </FormControl>
          <VStack  space={2}  mt={5}>
          <Button colorScheme="cyan" _text={{color: 'white' }} onPress={this.formsubmission}>
              Sign Up
          </Button>
          </VStack>
		   <HStack justifyContent="center">
            <Text fontSize='sm' color='muted.700' fontWeight={400}>Already has an account. </Text>
            <Link _text={{ color: 'cyan.500', bold: true, fontSize: 'sm' }} onPress={this.redirect}>
              Login Here
            </Link>
          </HStack>
        </VStack>
      </Box>
   
	}
	render() {
		return this.SignupViewHtml();
	}
}
export default SignupView;