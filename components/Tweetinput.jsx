import { PhotographIcon } from "@heroicons/react/outline";

export default function TweetInput() {
    return (
        <div className="flex space-x-3 p-3 border-b border-gray-700">
            <img 
            className="w-11 h-11 rounded-full object-cover"
            src="/assets/kylie.png" alt="" />
            <div className="w-full">
                <textarea 
                placeholder="What's on your mind?"
                className="bg-transparent resize-none outline-none w-full
                min-h-[50px] text-lg "></textarea>


                
                <div className="flex justify-between border-t border-gray-700 pt-4">
                    <div className="flex space-x-1.5">
                        <div>
                            <PhotographIcon className="h-[22px] text-[#1d9bf0]"/>
                        </div>
                        <div>
                            <PhotographIcon className="h-[22px] text-[#1d9bf0]"/>
                        </div>
                        <div>
                            <PhotographIcon className="h-[22px] text-[#1d9bf0]"/>
                        </div>
                        <div>
                            <PhotographIcon className="h-[22px] text-[#1d9bf0]"/>
                        </div>
                    </div>
                    <button>
                        Tweet
                    </button>
                </div>
            </div>
        </div>
    )
}