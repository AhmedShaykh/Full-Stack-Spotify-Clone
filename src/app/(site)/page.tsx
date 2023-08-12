import React from "react";
import Header from "@/Components/Header";
import ListItem from "@/Components/ListItem";

const Home = () => {
    return (
        <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
            <Header>
                <div className="mb-3">
                    <h1 className="text-white text-4xl font-semibold">
                        Welcome back
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
                        <ListItem
                            name="Liked Songs"
                            image="/asset/liked.png"
                            href="liked"
                        />
                    </div>
                </div>
            </Header >
            <div className="mt-2 mb-7 px-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-2xl font-semibold">
                        Newest songs
                    </h1>
                </div>
                <div>
                    List Of Songs
                </div>
            </div>
        </div >
    )
};

export default Home;