import React from "react";

export interface IInput {
    children: any;
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

// Sidebar Interface

export interface ISideBarRoutes {
    icon: JSX.Element,
    path?: string,
    title: string,
    isSubNav?: boolean,
}

// Admin Panel Interface

export interface IRoutesLink {
    component: JSX.Element,
    path: string,
}

export interface ISideBarRoutes {
    icon: JSX.Element,
    path?: string,
    title: string,
    isSubNav?: boolean,
    subNav?: {
        path: string,
        title: string
    }[]
}