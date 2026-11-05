import { Book, Bookmark, BookOpen, BookOpenText, ChevronRight, MoveRight, Plus, Target } from "lucide-react";

export default function Dashboard() {

    return (
        <div>

            {/* les 4 div livre lu lectures en cours etc */}
            <div className="grid grid-cols-12  p-5 mt-8 justify-between  gap-10">

                <div className="flex col-span-3 items-center shadow-2xl rounded-2xl p-5 gap-5 bg-white">
                    <div className="bg-[#F2E3F0] p-2 rounded-xl ">
                        <BookOpen className="text-[#914D98]" size={37} />
                    </div>
                    <div>
                        <p className="font-bold text-3xl">12</p>
                        <p>Livres lus</p>
                    </div>
                </div>

                <div className="flex col-span-3 items-center shadow-2xl rounded-2xl p-5 gap-5 bg-white">
                    <div className="bg-[#f2e8e3] p-2 rounded-xl ">
                        <BookOpenText className="text-[#986f4d]" size={37} />
                    </div>
                    <div>
                        <p className="font-bold text-3xl">3</p>
                        <p>Lectures en cours</p>
                    </div>
                </div>

                <div className="flex col-span-3 items-center shadow-2xl rounded-2xl p-5 gap-5 bg-white">
                    <div className="bg-[#f2e8e3] p-2 rounded-xl ">
                        <Bookmark className="text-[#986f4d]" size={37} />
                    </div>

                    <div>
                        <p className="font-bold text-3xl">7</p>
                        <p>Pile à lire</p>
                    </div>

                </div>

                <div className="flex col-span-3 items-center shadow-2xl rounded-2xl p-5 gap-5 bg-white">
                    <div className="bg-[#f2e8e3] p-2 rounded-xl ">
                        <Target className="text-[#986f4d]" size={37} />
                    </div>

                    <div>
                        <p className="font-bold text-3xl">4320</p>
                        <p>Pages lues</p>
                    </div>

                </div>

            </div>

            {/* les 4 div livre lu lectures en cours etc */}



            <div className="grid grid-cols-12  p-5 mt-8 justify-between  gap-10">
                <div className="flex col-span-7 items-center shadow-2xl rounded-2xl p-5 gap-5 bg-white">
                    <div className="bg-[#F2E3F0] p-2 rounded-xl ">
                        <BookOpen className="text-[#914D98]" size={37} />
                    </div>
                    <div>
                        <p className="font-bold text-3xl">12</p>
                        <p>Livres lus</p>
                    </div>
                </div>

                <div className="flex col-span-5 items-center shadow-2xl rounded-2xl p-5 gap-5 bg-white">
                    <div className="bg-[#F2E3F0] p-2 rounded-xl ">
                        <BookOpen className="text-[#914D98]" size={37} />
                    </div>
                    <div>
                        <p className="font-bold text-3xl">12</p>
                        <p>Livres lus</p>
                    </div>
                </div>


            </div>


            <div className="grid grid-cols-12 p-5 mt-8 justify-between gap-10">
                <div className=" col-span-7 items-center shadow-2xl rounded-2xl p-5 gap-5 bg-white">

                    <div className="border flex justify-between p-5">
                        <p className="font-bold text-2xl">Mes derniers ajouts</p>

                        <div className="flex items-center gap-5 ">
                            <p>Voir ma blibliothèque </p>
                            <ChevronRight />
                        </div>

                    </div>

                    <div className="cardSlivre border p-5 grid grid-cols-5 gap-5 ">
                        <div className="cardlivre h-40 border">

                        </div>

                        <div className="cardlivre h-40 border">

                        </div>
                        <div className="cardlivre h-40 border">

                        </div>
                        <div className="cardlivre h-40 border">

                        </div>
                        <div className="cardlivre h-40 border flex items-center justify-center">
                            <div className=" flex flex-col items-center gap-2 ">
                                <Plus className="item" size={30} />
                                <p>Ajouter <br /> un livre</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>




                <div className="flex col-span-5 items-center shadow-2xl rounded-2xl p-5 gap-5 bg-white">
                    
                </div>


            </div>




        </div>


    );

}