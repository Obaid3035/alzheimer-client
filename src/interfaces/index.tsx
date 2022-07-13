import React from "react";

export interface IButton {
    children: any;
    type: string
    onClick: () => void
}

export interface IInput {
    children: any;
    // onSubmit: () => void
}

export interface ICoordinates {
    lat: number,
    lng: number
}

export interface IMapInputProps {
    selectedCoordinates: ICoordinates | null,
    setSelectedCoordinates: React.Dispatch<React.SetStateAction<null | ICoordinates>>,
    showMap: boolean
    google: any;
}

export interface IStarRating {
    rating?: number;
    // changeRating?: (rating: number) => void;
}

export interface IRegister{
    loc: boolean,
    resume: boolean,
    name: string
}


// ----------------------------------- ENUM ------------------------------

export enum RegisterType {
    caregiver = '/caregiver/register',
    lawyer = "/lawyer/register"
}

export enum LoginType {
    caregiver = '/caregiver/login',
    lawyer = "/lawyer/login"
}

export enum USER_ROLE {
    CAREGIVER = "caregiver",
    LAWYER = "lawyer"
}