import { recommendService } from "./cat.service.ts";
import { generateAIResponse } from "./gemini.service.ts";

export const aiRecommendService = async (kidsFriendly: boolean , apartmentFriendly:boolean)=>{
    let matchCatsFromDb = await recommendService(kidsFriendly,apartmentFriendly);

    const prompt = `
        Your taskis to recommend and comapare the most suitable  cat breeds based on the user's preferences.

        User Preferences:
        - Kids Friendly: ${kidsFriendly}
        - Apartment Friendly: ${apartmentFriendly}

        Instructions:
        1. Analyze the user's prefernces carefully.
        2. Recommend the top 5 most suitable cat breeds.
        3. Compare the breeds  based on:
            - Temperament
            - Energy Level
            - Kid Friendlines
            - Apartment Suitability
            - Grooming  Needs
            - Intelligence
            - Affection Level
            - Life Span
        4. Explain the pros and cons of each breed.
        5. Rank the breeds from best match to least suitable match.
        6. Provide a final recommendation explaining Why the #1 breed is the best choice.
        7. Keep the response informative, professional, and easy to understand.
        8. Use clear headings and bullet points.
        9. Do not include fictional information.
        10. if no breed perfectly matches the requirements,explain the trade offs.

        Response Format:

        # Best Cat Breed Matches

        ## 1. Breed Name
        Match Score: XX/100

        ### Why it Mtches
        ...

        ### Pros
        - ...
        - ...

        ### Cons
        - ...
        - ...

        ### Key Characteristics
            - Energy Level
            - Kid Friendlines
            - Apartment Suitability
            - Grooming  Needs
            - Intelligence
            - Affection Level
            - Life Span
        
        ---

    (Repeat for remaining breeds)

    # Final Recommendation
    Explain  Which breed is the best overall choice and why.
`;


    const aiResponse = await generateAIResponse(prompt)

    return aiResponse

}