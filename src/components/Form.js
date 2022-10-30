import React, { useState } from "react";
import Container from "./Container/Container";
import Input, { RadioButton } from "./Input/Input";
import Button from "./Button/Button";
import Label from "./Label/Label";
import PrimaryHeading from "./Heading/Heading";


const Form = () => {
  const [user,setUser]=useState({
    firstName:"",
    lastName:'',
    email:'',
    phone:'',
    gender:'',
    dob:'',
    password:'' 
  })

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setUser({
        ...user,[name]:value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(user);
  }
  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <Container>
        <PrimaryHeading>Sign Up</PrimaryHeading>
        <p>Please fill in this form to create an account.</p>
        <hr style={{ margin: "5px 0 12px 0" }} />
        <Label htmlFor="firstName">First Name:</Label>
        <Input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          autoComplete="off"
          value={user.firstName}
          onChange={handleChange}
        ></Input>
        <Label htmlFor="lastName"> Last Name:</Label>
        <Input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          autoComplete="off"
          value={user.lastName}
          onChange={handleChange}
        ></Input>
        <Label htmlFor="email"> Email:</Label>
        <Input
          type="email"
          name="email"
          placeholder="Enter Email"
          autoComplete="off"
          required
          value={user.email}
          onChange={handleChange}
        ></Input>
        <Label htmlFor="phone"> Phone:</Label>
        <Input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          autoComplete="off"
          required
          value={user.phone}
          onChange={handleChange}
        ></Input>
        <Label htmlFor="gender"> Gender:</Label>
        <RadioButton type="radio" name="gender" value="male" checked={user.gender==='male'} onChange={handleChange}/>
        Male
        <RadioButton type="radio" name="gender" value="female" checked={user.gender==='female'} onChange={handleChange}/>
        Female
        <RadioButton type="radio" name="gender" value="others" checked={user.gender==='others'} onChange={handleChange}/>
        Others
        <br />
        <Label htmlFor="dob"> Date of Birth:</Label>
        <Input
          type="date"
          name="dob"
          placeholder="Your date of birth"
          autoComplete="off"
          value={user.dob}
          onChange={handleChange}
        ></Input>
        <Label htmlFor="password"> Password:</Label>
        <Input
          type="password"
          name="password"
          placeholder="Enter password"
          required
          autoComplete="off"
          value={user.password}
          onChange={handleChange}
        ></Input>
        
        <Button type="submit">Sign Up</Button>
      </Container>
    </form>
  );
};

export default Form;
