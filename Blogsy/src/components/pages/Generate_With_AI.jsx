import React, { useState } from "react";
import OpenAI from "../../OpenAI/OpenAI";
import SpotlightCard from './../Animation/SpotLightCard';

function Generate_With_AI(){
    const[content, setContent] = useState("");
    const[topic, setTopic] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const response = OpenAI.generate_response(topic);
    }

    return (
        <div className="py-10 px-28 h-screen w-full" >
            <SpotlightCard className="custom-spotlight-card bg-opacity-25 border-0 h-full w-full" spotlightColor="rgba(0, 0, 255, 0.1)">
            <div className="h-full w-full flex flex-col items-center" >
                <textarea
                className="animate-pulse p-14 pb-40 text-left text-sm resize-none w-full bg-transparent text-black/50 backdrop-blur-3xl border-2 border-b/50 h-full rounded-3xl -z-1 focus:outline-none focus:ring-0"
                type="text" 
                readOnly={true}
                value={content||"Under Our AI-powered writing assistant is currently under development. Very soon, this space will help you generate smart content ideas, expand your thoughts, and even draft full blog posts with just a few prompts. We're actively building and testing features to make your writing process faster, easier, and more creative. Stay tuned — powerful AI tools are coming your way soon!"} />
                <form
                onSubmit={handleSubmit}
                className="flex justify-center"
                action="">
                    <div className="w-2/3 rounded-full absolute bottom-4 border z-0 flex justify-between bg-white p-2" >
                        <input 
                        className="w-full text-black/50 bg-transparent px-4 py-3 focus:outline-none focus:ring-0 "
                        type="text"
                        placeholder="Write your blog topic here..."
                        value={topic}
                        onChange={ (e) => setTopic(e.target.value) }
                        />
                        <button
                        className="py-3 px-7 text-white hover:font-semibold text-xl bg-blue-400 hover:bg-blue-500 rounded-full"
                        type="submit"
                        >✨</button>
                    </div>
                </form>
            </div>
            </SpotlightCard>
        </div>
    )
}

export default Generate_With_AI;