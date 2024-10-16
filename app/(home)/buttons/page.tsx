import { Button } from "@/components/ui/button";
import Image from "next/image";

const ButtonsPage = () => {
    return (
        <div className="p-5 space-y-5 flex-col flex max-w-[600px] bg-cyan-500 tracking-wide">
            <Button variant={"ghost"} className="hover:bg-red-400">WTH???</Button>
            <Button>
                <Image
                    src={"/MoonMan.png"}
                    width={25}
                    height={25}
                    alt="VECTOR"
                />
                HOW DID I GET HERE???
            </Button>
            <p className="centre">
                I am on da moon
            </p>
            <Image
                src={"/MoonMan.png"}
                width={250}
                height={25}
                alt="VECTOR"
            />
        </div>
    );
};

export default ButtonsPage;