import type { NextApiRequest, NextApiResponse } from "next";
const db = require("../../configs/db/db");

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { user_id } = req.query;
  db.query(`SELECT name FROM user WHERE user_id=${user_id}`, function (err: any, result: any) {
    if (err) {
      console.log(err);
    } else {
      res.json(result[0].name);
    }
  });
}
