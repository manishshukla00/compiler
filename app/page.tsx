import { Button } from "@/components/ui/button";
import CodeEditor from "./component/monacoEditor";
import DropdownMenuCheckboxes from "./component/dropdownMenu";
import { AiOutlineDown } from "react-icons/ai";
import { IoPlay } from "react-icons/io5";
import { PiBugDroidFill } from "react-icons/pi";
import { MdChevronRight } from "react-icons/md";

export default function Home() {
  const code = "// Your code here";

  return (
    // Main Container
    <div className="w-full h-screen bg-main-bg">
      {/* Heading Section */}
      <div className="flex justify-center items-center md:p-2">
        <h1 className="max-w-[857px] h-[59px] text-white font-gilroy font-gilroyHeavy text-2xl sm:text-4xl md:text-[50px] my-4 md:my-8 select-none">
          Solved your coding problems here
        </h1>
      </div>

      {/* compiler area section */}
      <div className="max-w-[1204px] grid md:grid-cols-2 m-auto">
        <div className="relative max-w-[602px] h-[400px] bg-editor rounded-l-2xl">
          {/* dropdown menu */}
          <div className="pl-10 border-none">
            <DropdownMenuCheckboxes />
            <AiOutlineDown className="absolute text-white top-[15px] left-[107px]" />
          </div>

          {/* Code Editor */}
          <CodeEditor />
        </div>

        {/* Run and debug code area */}
        <div className="relative max-w-[602px] h-[400px]  bg-custom-color text-white rounded-r-2xl">
          <div className="flex m-8 select-none">
            <IoPlay className="text-icon text-xl" />
            <span className="flex items-center text-icon mx-4 mb-2">Run</span>
            <PiBugDroidFill className="text-teal text-xl" />
          </div>
          <div className="flex items-center">
            <MdChevronRight className="ml-4" />
            <span className="text-sm">Sum of 15 and 12 is 27</span>
          </div>
        </div>
      </div>

      {/* Footer secion */}
      <div className="flex flex-col bg-main-bg justify-center items-center text-white">
        <h3 className="max-w-[1108px] h-[46px] text-sm sm:text-2xl md:text-[35px] md:my-2 py-4 font-gilroy font-gilroyBold select-none">
          The WAE Coding Platform Streamlines Coding For Engineers
        </h3>
        <Button className="bg-white text-black hover:text-white font-gilroy font-gilroyHeavy md:my-8 rounded-3xl">
          Explore More About Plateform
        </Button>
      </div>
    </div>
  );
}
