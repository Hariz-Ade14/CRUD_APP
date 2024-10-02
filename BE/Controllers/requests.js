import USERMODEL from "../Model/model.js";
import jwt from "jsonwebtoken";
// import { BOOKING } from "../Model/model.js";

const secretKey = 'your-secret-key';
let token = null;
async function signUp(req, res) {
  const { name, email, password } = req.body;
  const userAlreadyExists = await USERMODEL.findOne({ email });

  try {
    if (!name || !email || !password) {
      res.status(404).json({ message: "All fields required" });
    }else if(userAlreadyExists){
            res.status(400).json({ status: false ,message: "user already exists" });
    }else{
      const newUser = new USERMODEL({
            name,
            email,
            password,
      });
      const setUser = await newUser.save();
      if (setUser) {
            res.status(200).json({ message: "user created", Data: setUser });
      }
    }

  } catch (error) {
    res.status(404).json({error: error});
    console.log(error);
  }
}

// let username = null;
async function Login(req, res) {
      const {email,password,name} = req.body
      // const user = await USERMODEL.findOne({email})
      const pword = await USERMODEL.findOne({password});
      const username = await USERMODEL.findOne({email});
      const fName = username.name;
      console.log(fName);
      try {
          if(!username){
             res.status(404).json({status: false ,message: "Invalid email"})
          }else if(!pword) {
             res.status(404).json({status: false ,message: "Invalid password"})
          }else if(!username && !pword){
             res.status(404).json({status: false ,message: "Invalid credentials"})
          }
          else{
             token = jwt.sign({ userId: username._id }, secretKey, { expiresIn: '1h' });  
             await username.save();
             res.cookie(token);
             res.status(200).json({status: true,fName,message: "login successful", token})
          }
      } catch (error) {
        res.send(error);
      }
}

async function Logout(req, res) {
      try {
        res.clearCookie(token);
        res.status.json({message: "Logged out"});
      } catch (error) {
        res.send(error);
      }

}
async function deleteReq(req, res) {
  res.send("Delete request");
}

async function bookAppointment (req,res) {
       const {firstname,othername,lastname,email,sex} = req.body;

       try {
        if (!firstname || !othername || !lastname || !email || !sex) {
          res.status(404).json({ message: "All fields required" });
        }else{
          const newBooking =
          //  new USERMODEL(
            {
                firstname,
                othername,
                lastname,
                email,
                sex,
          }
        // ); 
          const Booking =  newBooking;
          
          const username = await USERMODEL.findOne({email});
         
          // USERMODEL.findByIdAndUpdate(username.id,{$set: {booking}} , {new: true});
          // // // const BookAppointment = 
         
          // // // if(booking.email){
          // // //   for (let i = 1; i < 5; i++) {
          // // //       username.Book = booking;
          // // //   }
          // // //     await username.save();
          // //     await booking.save();
          // // // }
          
          
          
          // // await username.save();
          // // if (booking) {
              
          // //       res.status(200).json({USER: username});
          // //       //  message: "appointment booked", Data: booking});
          // // }
          // username.Book = booking;
          // await username.save();

      
          // if(Booking){
             username.BOOKING = Booking;
             await username.save();
            // USERMODEL.updateOne({username},{$set: {book : Booking}})
             console.log(username)
             res.status(200).json({username})

             
          // }
        }
    
      } catch (error) {
        res.status(404).json({error: error});
        console.log(error);
      }

}

export { signUp, Login, Logout, deleteReq ,bookAppointment};