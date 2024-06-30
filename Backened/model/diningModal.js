import mongoose from 'mongoose';

const DiningSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
});

const Dine = mongoose.model('Dining', DiningSchema);

export default Dine;
