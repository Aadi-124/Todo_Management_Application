import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();


export default function Auth(){
    return(
        useContext(AuthContext)
    );
}


