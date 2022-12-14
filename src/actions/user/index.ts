import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import jwtDecode from "jwt-decode"
import { toast } from "react-toastify"

import api from "../../helpers/api"
import { urls } from "../../helpers/urls"

import { IUser } from "../../types/IUser"
import { IUserLogin } from "../../types/IUserLogin"
import { IUserRegister } from "../../types/IUserRegister"

type UserError = {
    message: string
}

export const loginUser = createAsyncThunk<IUser, IUserLogin, { rejectValue: UserError }>(
    "user/login",
    async ({ identifer, password }: IUserLogin, thunkApi) => {
        try {
            const { data } = await api.post(
                urls.API.LOGIN,
                {
                    identifer,
                    password,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                },
            )

            if (data.success) {
                const { id, firstName, lastName, email, isPremium, phoneNumber }: IUser = jwtDecode(
                    data.token,
                )
                localStorage.setItem("token", data.token)

                return {
                    id,
                    firstName,
                    lastName,
                    email,
                    isPremium,
                    phoneNumber,
                    token: data.token,
                }
            } else {
                return thunkApi.rejectWithValue({ message: data.message })
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.data.message) {
                return thunkApi.rejectWithValue({
                    message: error.response?.data.message,
                })
            } else {
                return thunkApi.rejectWithValue({
                    message: "Problème avec l'API",
                })
            }
        }
    },
)

export const registerUser = createAsyncThunk<IUser, IUserRegister, { rejectValue: UserError }>(
    "user/register",
    async ({ email, password, confirmPassword }: IUserRegister, thunkApi) => {
        try {
            if (password !== confirmPassword) {
                toast("Mot de passe différent", { type: "warning" })
                return {}
            }
            const { data } = await api.post(
                urls.API.REGISTER,
                {
                    email,
                    password,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                },
            )

            if (data.success) {
                const tokenUser: IUser = jwtDecode(data.token)
                localStorage.setItem("token", data.token)

                return {
                    id: tokenUser.id,
                    firstName: tokenUser.firstName,
                    lastName: tokenUser.lastName,
                    email: tokenUser.email,
                    isPremium: tokenUser.isPremium,
                    phoneNumber: tokenUser.phoneNumber,
                    token: data.token,
                }
            }

            return { message: data.message }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.data.message) {
                return thunkApi.rejectWithValue({
                    message: error.response?.data.message,
                })
            } else {
                return thunkApi.rejectWithValue({
                    message: "Problème avec l'API",
                })
            }
        }
    },
)

export const forgottenPassword = createAsyncThunk(
    "user/forgottenPassword",
    async (identifer: string) => {
        try {
            const { data } = await api.post(
                urls.API.FORGOTTEN_PASSWORD,
                {
                    identifer,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                },
            )

            toast("Un mail a été envoyé à l'adresse mail", {
                type: "success",
            })

            return data
        } catch (err) {
            console.log(err)
        }
    },
)

export const updateUser = createAsyncThunk<IUser, IUserRegister, { rejectValue: UserError }>(
    "user/updateUser",
    async (updatedUser: IUser, thunkApi) => {
        console.log(updatedUser)
        try {
            const { data } = await api.put(
                urls.API.PROFILE,
                {
                    _id: updatedUser.id,
                    firstName: updatedUser.firstName,
                    lastName: updatedUser.lastName,
                    email: updatedUser.email,
                    phoneNumber: updatedUser.phoneNumber,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                },
            )

            const { id, firstName, lastName, email, isPremium, phoneNumber }: IUser = jwtDecode(
                data.token,
            )
            localStorage.setItem("token", data.token)

            if (data.success) {
                toast("Vos informations ont bien été mises à jour", {
                    type: "success",
                })
            }

            return { id, firstName, lastName, email, isPremium, phoneNumber, token: data.token }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.data.message) {
                return thunkApi.rejectWithValue({
                    message: error.response?.data.message,
                })
            } else {
                return thunkApi.rejectWithValue({
                    message: "Problème avec l'API",
                })
            }
        }
    },
)
