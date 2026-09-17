import CatModel from "../models/cat.models.ts";


// Create Service
export const createCatService = async (payload:object) =>{
    return await CatModel.create(payload)
};

// Get Al Services 
export const getAllCatService = async() =>{
    return await CatModel.find()
};

// Get Single cat service
export const getSingleCatService = async(id:string) =>{
    return await CatModel.findById(id)
};

// Search cat service
export const searchCatService = async(query: string)=>{
    return await CatModel.find({
        $or:[
            
                {name:{
                    $regex:query,
                    $options:'i'
                },},
                {
                    breed:{
                        $regex:query,
                        $options:'i'
                    },
                }
            
        ]
    })
}

export const recommendService = async (kidsFriendly:boolean , apartmentFriendly:boolean) =>{
    return await CatModel.find({
        kidsFriendly,
        apartmentFriendly
    })
}