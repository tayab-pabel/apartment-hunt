const Reducer = (state = {email:"",isSignIn:false,name:"",photo:""}, action) => {
  switch(action.type) {
     case 'LOGIN':
       return state = action.payload

     default:
       return state
   }
}

export default Reducer