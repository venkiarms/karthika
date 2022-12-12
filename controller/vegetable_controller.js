const vegetable = require ('../models/vegetable')

const getAllVegetables = async(req,res,next)=>{
let vegetables
try {
    vegetables = await vegetable.find();
} catch (err) {
    console.log(err);
}
if(!vegetables)
return res.status(404).json({ message:"no vegetable found"});
return res.status(200).json({vegetables});






}

exports.getAllVegetables = getAllVegetables;
