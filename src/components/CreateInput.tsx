import React, { KeyboardEvent, useState } from "react"
import { GrFormClose } from "react-icons/gr"
import { BsCheck } from "react-icons/bs"
import { toast } from "react-toastify"

import { createFolder } from "../actions/folders"

import { useAppDispatch } from "../store"

interface CreateInputProps {
    isNewFolder: boolean
    setIsNewFolder: any
    userId?: string
}

const CreateInput: React.FC<CreateInputProps> = ({ isNewFolder, setIsNewFolder, userId }) => {
    const dispatch = useAppDispatch()
    const [newFolder, setNewFolder] = useState("")

    const handleCreateFolder = async () => {
        if (newFolder === "") {
            setIsNewFolder(false)
            setNewFolder("")
            return toast("Le titre du dossier est vide")
        }

        dispatch(createFolder({ title: newFolder, userId: userId! }))
        setIsNewFolder(false)
        setNewFolder("")
    }

    const keyPressed = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            await handleCreateFolder()
        }

        if (e.key === "Escape") {
            setIsNewFolder(false)
            setNewFolder("")
        }
    }

    return (
        <div
            className={`${!isNewFolder && "hidden"} relative ml-2 mb-2 transition-all duration-500`}
        >
            <input
                className="w-full p-1 bg-slate-500 dark:bg-blue-700 rounded-md focus:outline-none"
                type="text"
                value={newFolder}
                onChange={e => setNewFolder(e.target.value)}
                onKeyDown={keyPressed}
            />
            <div className="absolute top-2 right-2 flex">
                <GrFormClose
                    color="red"
                    size={16}
                    className="cursor-pointer"
                    onClick={() => {
                        setIsNewFolder(false)
                        setNewFolder("")
                    }}
                />
                <BsCheck
                    color="white"
                    size={16}
                    className="cursor-pointer"
                    onClick={() => handleCreateFolder()}
                />
            </div>
        </div>
    )
}

export default CreateInput
