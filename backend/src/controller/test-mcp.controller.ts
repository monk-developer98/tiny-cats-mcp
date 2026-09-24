import type { Request, Response } from "express";
import { getMcpClient } from "../services/mcp.service.ts";
import { generateAIResponse } from "../services/gemini.service.ts";

export const testMcpController = async (req: Request, res: Response) => {
    try {
        const client = await getMcpClient();

        const tools = await client.listTools();

        const result = await client.callTool({
            name:"recommend_cats",
            arguments:{
                kidsFriendly:true,
                apartmentFriendly:false
            }
        })

        const content = result.content as Array<{ text?: unknown }>;

        if (typeof content[0]?.text !== "string") {
            throw new Error("Invalid tool response content");
        }

        const catsData = content[0].text;

        let prompt = `
        
        Available cats

        ${catsData}

        recommend best cats from this data
        
        `

        let aiResponse = await generateAIResponse(prompt)

        return res.json({
        success: true,
        data:aiResponse,
        }); 
    } catch (error) {
        console.error(error);

        return res.status(500).json({
        success: false,
        message: "Failed to connect to MCP server",
        });
    }
};
