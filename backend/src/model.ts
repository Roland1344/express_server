import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: 'root',
    password: "",
    database: "userdb"
});

export interface User {
    id: number;
    nev: string;
    cim: string;
    szuletesiDatum: string | null;
}

//Összes felhasznalo lekerese:
export const getUsers = async () => {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
}

export const createUser = async (user: Omit<User, "id">) => {
    const [result] = await pool.query<mysql.ResultSetHeader>("INSERT INTO (nev, cim, szuletesiDatum) VALUES (?,?,?)", [user.nev, user.cim, user.szuletesiDatum]);

    const insertedId = result.insertId;
}