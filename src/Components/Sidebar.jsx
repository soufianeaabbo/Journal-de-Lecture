import { BookOpen, House, LibraryBig, Search ,ChartNoAxesCombined,NotebookPen ,Bookmark,Settings    } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-[#FFF8F0] border-r border-[#E8D8CA] p-6">

      <div className="flex items-center gap-2 mb-12">
        <BookOpen size={28} className="text-[#824B35]" />
        <h1 className="text-xl font-bold text-[#42291F]">
          LivreJournal
        </h1>
      </div>

  
        <ul className="flex flex-col gap-5">
          <li className="ongletside"><House/> Acceuil</li>
          <li className="ongletside" ><LibraryBig/> Bibliothèque</li>
          <li className="ongletside"> <Search/> Recherche</li>
          <li className="ongletside"><NotebookPen/>Journal de Lecture</li>
          <li className="ongletside"> <ChartNoAxesCombined/> Statistiques </li>
        </ul>

        <hr className="border-0 h-px bg-[#765047] opacity-40 my-6" />

        <ul className="flex flex-col gap-5">
          <li className="ongletside"><Bookmark/> readlist</li>
          <li className="ongletside"><Settings/> Réglages</li>
          
        </ul>
      
      
    </aside>
  );
}