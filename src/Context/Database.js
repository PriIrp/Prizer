import { auth, db } from "../firebase"
import { useState, useEffect } from "react"
import { set, ref } from "firebase/database"

export function writeInitialUserData(brand) {
    set(ref(db, `${brand ? 'brand' : 'influencer'}/${auth.currentUser.uid}`), {
        'brand': brand,
        'email': auth.currentUser.email
    })
}
