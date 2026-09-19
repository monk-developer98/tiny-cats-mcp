import type { Request, Response } from "express";
import { generateAIResponse } from "../services/gemini.service.ts";

export const askAiController = async (req:Request,res:Response)=>{
    let prompt = req.body.prompt;
    let result = await generateAIResponse(prompt);

    return res.status(200).json({
        message:"Ai responded",
        success:true,
        data: result
    })
}