import React ,{useState} from "react";



const Contact = () => {
    
  const formSubmit = () =>{
    return(
    <h1>the form is submmitted successfully</h1>
    );
  };
  
  return(
   <>
    <div className="my-5">
    <h1 className="text-center">Contact Us</h1>
    </div>
  <div className="container contact_div">
  <div className="row">
  <div className ="col-md-6 col-10 mx-auto">
  <form>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="name" class="form-control" id="exampleFormControlInput1"name="fullname"value=" name" 
  placeholder="enter your name"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"name="email"value="email"  
  placeholder="enter your email"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="email" class="form-control" id="phone"name="phone"value="phone"  
  placeholder="mobile number"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1"name="msg"value="message" rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary"type="submit"onSubmit={formSubmit}>Submit form</button>
  </div>

</form>

</div>


</div>

</div>
</>
);

};
export default Contact;