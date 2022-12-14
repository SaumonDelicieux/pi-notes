import React, { useEffect, useState } from "react"
import { CgSmileSad } from "react-icons/cg"

import { IFolder } from "../types/IFolder"
import { INote } from "../types/INote"

import Header from "./Header"
import SortNotes from "./SortNotes"
import FolderItem from "./FolderItem"
import CreateInput from "./CreateInput"
import ProfileCard from "./ProfileCard"
import SearchBar from "./SearchBar"
import NoteItem from "./NoteItem"

import { useAppSelector } from "../store"

const Navbar: React.FC = () => {
    const { id, isPremium } = useAppSelector(state => state.user)
    const { folders } = useAppSelector(state => state.folders)
    const { notesDisplay, sharedNotes } = useAppSelector(state => state.notes)

    const [isNewFolder, setIsNewFolder] = useState(false)
    const [search, setSearch] = useState("")
    const [filtredNotes, setFiltredNote] = useState<INote[]>()

    useEffect(() => {
        setFiltredNote(
            notesDisplay?.filter((note: INote) =>
                note.title?.toLowerCase().includes(search.toLowerCase()),
            ),
        )
    }, [search])

    return (
        <nav className="p-2 max-w-xs flex flex-col justify-between bg-slate-400 dark:bg-blue-900 text-slate-50">
            <Header isPremium={isPremium} displayNewFolder={setIsNewFolder} />
            <SearchBar search={search} setSearch={setSearch} />
            {search.length > 0 ? (
                <div className="flex flex-col flex-1">
                    {filtredNotes!.length > 0 ? (
                        filtredNotes?.map((note: INote) => <NoteItem key={note._id} note={note} />)
                    ) : (
                        <div className="flex items-center gap-1 justify-center">
                            Aucune note trouvée <CgSmileSad size="20px" />
                        </div>
                    )}
                </div>
            ) : (
                <>
                    <SortNotes />
                    <div className="flex flex-col flex-1 overflow-y-auto hide-scrollbar">
                        <div className="flex flex-col">
                            {folders?.map((folder: IFolder) => {
                                if (!folder.parentId) {
                                    return (
                                        <FolderItem
                                            title={folder.title}
                                            folders={folders}
                                            folderId={folder._id}
                                            key={folder._id}
                                            notes={notesDisplay}
                                        />
                                    )
                                } else {
                                    return
                                }
                            })}
                        </div>
                        <CreateInput
                            isNewFolder={isNewFolder}
                            setIsNewFolder={setIsNewFolder}
                            userId={id}
                        />
                    </div>
                    {sharedNotes.length > 0 && (
                        <>
                            <div className="font-bold">Notes partagés </div>
                        </>
                    )}
                </>
            )}
            <ProfileCard />
        </nav>
    )
}

export default Navbar
