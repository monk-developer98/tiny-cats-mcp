import type { Request, Response } from "express";
import { createCatService, getAllCatService, getSingleCatService, recommendService, searchCatService } from "../services/cat.service.ts";

export const createCatController = async (req:Request , res:Response) =>{
    let result = await createCatService(req.body)

    return res.status(201).json({
        success:true,
        message:"Cat Created",
        data : result
    });
}

export const getAllCatController = async (req:Request , res:Response) =>{
    let result = await getAllCatService()

    return res.status(200).json({
        success:true,
        message:"All Cats Fetched",
        data : result
    });
}
export const getSingleCatController = async (req:Request , res:Response) =>{

    let id = req.params.id as string

    let result = await getSingleCatService(id)
    
    return res.status(200).json({
        success:true,
        message:"Cat Fecthed",
        data : result
    });
}
export const searchCatController = async (req:Request , res:Response) =>{
    let q = req.query.q as string;
    let result = await searchCatService(q)

    return res.status(200).json({
        success:true,
        message:"Cats Searched",
        data : result
    });
}

export const recommendCatsController = async (req:Request , res:Response)=>{

    const { kidsFriendly , apartmentFriendly} = req.body;

    const result = await recommendService(kidsFriendly , apartmentFriendly)
    return res.status(200).json({
        success:true,
        messgae:"Cat Fetched",
        data: result
    })
}

