import React from "react";
import { Header, Badger } from "./header";
import { Footer } from "./footer";

type Props = {
    children: React.ReactNode;
};
const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen">
            <Badger />
            <Header />
            <div className="flex-1 flex flex-col p-5 space-y-5 tracking-wide items-center justify-center uppercase">
                <p>aaaaa</p>
                {children}
            </div>
            <Footer/>
        </div>
    )
}
export default MarketingLayout;