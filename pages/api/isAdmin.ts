import type { NextApiRequest, NextApiResponse } from "next";
const db = require("../../configs/db/db");

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { user_id } = req.query;
  db.query(`SELECT isAdmin FROM user where user_id=${user_id}`, function (err: any, result: any) {
    if (err) {
      console.log(err);
    } else {
      console.log(result[0].isAdmin);
      res.json(result[0].isAdmin);
    }
  });
}
