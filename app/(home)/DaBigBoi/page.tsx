import { Button } from "@/components/ui/button";
import Image from "next/image";

const ButtonsPage = () => {
    return (
        <div className="p-5 space-y-5 flex-col flex max-w-[600px] bg-cyan-500 tracking-wide hover:bg-blue-200">
            <Button variant={"ghost"} className="bg-yellow-500 hover:bg-red-400">Click me???</Button>
            
        </div>
    );
};

export default ButtonsPage;