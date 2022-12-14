import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import jwtDecode from "jwt-decode"

import { IUser } from "../../types/IUser"
import { CategoryDisplay } from "../../types/states/INotesState"

import api from "../../helpers/api"
import { urls } from "../../helpers/urls"

interface CreateNote {
    title: string
    folderId: string
    userId: string
}

interface UpdateNote {
    id: string
    title: string
    text: string
    state: CategoryDisplay
}

export const createNote = createAsyncThunk(
    "notes/createNote",
    async ({ title, folderId, userId }: CreateNote) => {
        try {
            const { data } = await api.post(
                urls.API.CREATE_NOTE,
                {
                    title,
                    folderId,
                    userId,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                },
            )
            if (data.success) {
                toast(data.message, { type: "success" })
                return data
            }
        } catch (error) {
            toast("Erreur lors de la création de la note", { type: "warning" })
        }
    },
)

export const getAllNotes = createAsyncThunk("notes/getAllNotes", async (token: string) => {
    try {
        const { id }: IUser = jwtDecode(token)

        const { data } = await api.get(urls.API.GET_ALL_NOTES, {
            params: { userId: id },
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        })

        return data
    } catch (error) {
        console.log(error)
    }
})

export const deleteNote = createAsyncThunk("notes/deleteNote", async (noteId: string) => {
    try {
        const { data } = await api.delete(urls.API.DELETE_NOTE, {
            params: { noteId },
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        })

        if (data.success) {
            toast(data.message, { type: "success" })
            return data
        }
    } catch (error) {
        console.log(error)
    }
})

export const updateNote = createAsyncThunk(
    "notes/updateNote",
    async ({ id, title, text, state }: UpdateNote) => {
        try {
            const { data } = await api.put(
                urls.API.UPDATE_NOTE,
                {
                    id,
                    title,
                    text,
                    state,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                },
            )
            if (data.success) {
                toast(data.message, { type: "success" })
            }

            return data.note
        } catch (error) {
            toast("Erreur lors de la modification de la note", { type: "warning" })
        }
    },
)

export const getSharedNotes = createAsyncThunk("notes/sharedNotes", async (token: string) => {
    try {
        const { data } = await api.get(urls.API.GET_SHARED_NOTES, {
            headers: {
                Authorization: token,
            },
        })
        if (data.success) {
            toast(data.message, { type: "success" })
        }

        return data.notes
    } catch (error) {
        toast("Erreur lors de la modification de la note", { type: "warning" })
    }
})
