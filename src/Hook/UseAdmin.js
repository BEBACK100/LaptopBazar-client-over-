import { useEffect } from "react"
import { useState } from "react"

const UseAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://laptop-bazar-second-hand-server-assignment12.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin)

                    setIsAdminLoading(false)

                })
        }

    }, [email])
    return [isAdmin, isAdminLoading]
}
export default UseAdmin;