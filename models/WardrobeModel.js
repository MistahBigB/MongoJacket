import mongoose from 'mongoose';

const wardrobeSchema = new mongoose.Schema({
    article: {
      name: String,
      required: true,

      type: String,
      required: true,

      rating: String,
      required: true
  }
});

const Wardrobe = mongoose.model('Wardrobe', wardrobeSchema);
export default Wardrobe;