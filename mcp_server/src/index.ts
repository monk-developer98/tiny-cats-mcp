import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { recommendCatsTool } from "./tools/recommendCats.tools.ts";


// Create server instance
const server = new McpServer({
    name: "tiny-cats",
    version: "1.0.0",
});

server.registerTool("recommend_cats",{
    title:"recommend_cats",
    description:"Recommend a Best Cat breed according to Inputs",
    inputSchema:{
        kidsFriendly: z.boolean(),
        apartmentFriendly:z.boolean()
    }
},
async({kidsFriendly, apartmentFriendly})=>{
    const result = await recommendCatsTool(kidsFriendly,apartmentFriendly);

    return{
        content:[
            {
                type:"text",
                text:JSON.stringify(result)
            }
        ]
    }
}
)

const transporter = new StdioServerTransport();

await server.connect(transporter);

console.error("tiny cats mcp running")