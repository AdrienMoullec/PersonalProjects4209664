import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
    return (
        <div className="p-5 space-y-5 flex-col flex max-w-[200px] bg-cyan-500 tracking-wide ">
            <Button variant={"ghost"} className="hover:bg-red-400">Primary</Button>
            <Button>Primary outline</Button>
            <p>
                Help I am on da moon
            </p>
        </div>
    );
};

export default ButtonsPage;