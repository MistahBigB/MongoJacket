const mongoose = require(mongoose);

const { Schema } = mongoose 

const categorySchema = Schema ({
    categoryName: {
        type: String,
        required: true
    }
})

categorySchema.statics.submit = async function (categoryName) {
    const category = new this()
    category.categoryName = categoryName
    await category.save()
    return category
}

const Category = mongoose.model('Category', categorySchema)
module.exports = Category