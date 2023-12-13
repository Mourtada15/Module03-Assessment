import * as React from "react";

function MyComponent(props) {
  return (
    <div className="bg-white flex flex-col items-stretch pb-12">
      <div className="z-[1] w-full max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-1/5 max-md:w-full max-md:ml-0">
            <div className="bg-zinc-300 flex w-full grow flex-col items-stretch mx-auto pl-3.5 pr-12 py-12 max-md:pr-5">
              <div className="flex items-stretch justify-between gap-4 mt-20 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bfb05a28aed7ccbfa21fdb4a18d2359d7ea75a8e62c132a80f7d371b54af36c?apiKey=9ae344219fc54852810dddab3f597ec3&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-base self-center my-auto">
                  All Articles
                </div>
              </div>
              <div className="flex items-stretch justify-between gap-4 mt-6 max-md:mr-1.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/837ec09567dfd6adfd81fe4b0b1f1b7ab7b4fed363e22dbe3fb12064a17825ba?apiKey=9ae344219fc54852810dddab3f597ec3&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-base self-center my-auto">
                  Create Article
                </div>
              </div>
              <div className="flex items-stretch justify-between gap-4 mt-6">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3354bab80133be3b70265f8e6ba98a034ebe0570944e72a667e531243a1155ea?apiKey=9ae344219fc54852810dddab3f597ec3&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-base self-center my-auto">
                  Update Article
                </div>
              </div>
              <div className="flex items-stretch justify-between gap-4 mt-6 mb-52 max-md:mb-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c22a9c374bc1de30ed32deff0383f44d611f091c67d3cb7f335a265a11524c57?apiKey=9ae344219fc54852810dddab3f597ec3&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-base self-center my-auto">
                  Delete Article
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-4/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
              <div className="bg-white flex items-stretch justify-between gap-5 pl-5 pr-11 py-4 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <div className="text-black text-xs">Article</div>
                <div className="text-black text-xs">Date</div>
              </div>
              <div className="bg-zinc-300 bg-opacity-20 flex items-stretch justify-between gap-5 pl-5 pr-11 pt-3 pb-5 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <div className="text-black text-xs">Article</div>
                <div className="text-black text-xs">Date</div>
              </div>
              <div className="bg-white flex items-stretch justify-between gap-5 pl-5 pr-11 py-4 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <div className="text-black text-xs">Article</div>
                <div className="text-black text-xs">Date</div>
              </div>
              <div className="bg-zinc-300 bg-opacity-20 flex items-stretch justify-between gap-5 pl-5 pr-11 pt-3 pb-5 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <div className="text-black text-xs">Article</div>
                <div className="text-black text-xs">Date</div>
              </div>
              <div className="bg-white flex shrink-0 h-10 flex-col max-md:max-w-full" />
              <div className="bg-zinc-300 bg-opacity-20 flex shrink-0 h-10 flex-col max-md:max-w-full" />
              <div className="bg-white flex shrink-0 h-10 flex-col max-md:max-w-full" />
              <div className="bg-zinc-300 bg-opacity-20 flex shrink-0 h-10 flex-col max-md:max-w-full" />
              <div className="bg-white flex shrink-0 h-10 flex-col max-md:max-w-full" />
              <div className="bg-zinc-300 bg-opacity-20 flex shrink-0 h-10 flex-col max-md:max-w-full" />
              <div className="bg-white flex shrink-0 h-10 flex-col max-md:max-w-full" />
              <div className="bg-zinc-300 bg-opacity-20 flex shrink-0 h-10 flex-col max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-black text-xl whitespace-nowrap bg-stone-300 mt-0 w-full justify-center items-center mb-96 px-16 py-8 max-md:max-w-full max-md:mt-0 max-md:mb-10 max-md:px-5">
        Article Dashboard
      </div>
    </div>
  );
}

export default MyComponent;