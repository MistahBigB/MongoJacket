import mongoose from 'mongoose';

const wardrobeSchema = new mongoose.Schema({
    name: String,
    type: String,
    rating: String
  });

  const Wardrobe = mongoose.model('Wardrobe', wardrobeSchema);


export default Wardrobe;