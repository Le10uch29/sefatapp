import { z } from "zod";
import { validateResponse } from "./validateResponse";

export const UserSchema = z.object({
    id: z(),
    password: z(),
    email: z(), 
})

export type User = z.infer<typeof UserSchema>


export function fetchUser(id): Promise<User> {
    return fetch(`/api/users/${id}`)
    .then((response) => response.json())
    .then((data) => UserSchema.parse(data))
}


export function registerUser( email, password): Promise<void>{
    return fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password}),
    })
    .then(validateResponse)
    .then(() => undefined);
}

export function login(email, password): Promise<void> {
    return fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
    })
    .then(validateResponse)
    .then(() => undefined);
}

export function fetchMe(): Promise<User> {
    return fetch('/api/users/me')
        .then((response) => response.json())
        .then((data) => UserSchema.parse(data))
}
