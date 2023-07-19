const addmodel = require('../model/data')
const createData = async(req,res)=>{
    const {name, contact, img ,category,join} = req.body;
    const newadd = new addmodel({
        name : name,
        contact : contact,
        img : img,
        category: category,
        join : join.toString(),})
    
        
    try{
        await newadd.save();
        res.status(200).json(newadd)
    }
    catch(error){console.log(error)} 
}
const getData = async (req,res)=>{
    try{
        const data = await addmodel.find()
        res.status(201).send(data)
    }catch(error){ 
        console.log(error);
        res.status(500).json({massage : "Some thing went wrong "})
    }
}  

const deletedata = async(req,res) =>{
    try{
        const{_id,category} = req.body       

        if(category =='Fresher'){
            await addmodel.deleteOne({"_id": _id})
            res.send("Deleted Successfully")  
        } 
        else{res.send("Can't delete Experience person")  }      
    }catch(err){
        res.send("Something went wrong")        
    } 
}
const updateOne = async(req,res) => {
    const {_id, name, contact, img ,category,join} = req.body;
    const newadd = new addmodel({
        _id:_id,
        name : name,
        contact : contact,
        img : img,
        category: category,
        join : join.toString(),})  

    try{
        await addmodel.findByIdAndUpdate(_id , newadd, {new : true})
        res.send(newadd) 
    
    }catch(err){
        res.send("Something went wrong in update")
        console.log(err)
    } 
}

const getOne = async(req,res)=>{
    const id = req.params._id
    try{
        const data = await addmodel.find({_id : id})
        res.status(201).send(data)
    }catch(error){ 
        console.log(error);
        res.status(500).json({massage : "Some thing went wrong "})
    }
}
module.exports = {createData, getData,deletedata, updateOne , getOne};