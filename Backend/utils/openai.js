import "dotenv/config";

const getOpenAIResponse=async(message)=>{

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                { 
    role: "system", 
    content: "You are a helpful assistant. Always respond in plain paragraphs or simple bullet points. NEVER use markdown tables, NEVER use | characters, NEVER use multi-column layouts. Keep responses clean and simple."
},
                { role: "user", content:message }
            ]
        })
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        const data = await response.json();
        return (data.choices[0].message.content); //reply
    } catch (err) {
        console.log(err);
    }
};

export default getOpenAIResponse;