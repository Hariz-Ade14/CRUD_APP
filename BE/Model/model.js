import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  firstname: {
    type: String,
    required: false,
  },
  lastname: {
    type: String,
    required: false,
  },
  othername: {
    type: String,
    required: false,
  },
  sex: {
    type: String,
    required: false,
  },
});

const bookingSchema = {
  email: {
    type: String,
    required: true,
  },
};

// export const BOOKING = mongoose.model('booking', bookingSchema);
const USERMODEL = mongoose.model("USER", schema);
export default USERMODEL;
