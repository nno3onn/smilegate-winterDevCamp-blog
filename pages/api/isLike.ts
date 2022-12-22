import type { NextApiRequest, NextApiResponse } from "next";
const db = require("../../configs/db/db");

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { user_id, post_id } = req.query;
  db.query(
    `SELECT * FROM post_like WHERE user_id=${user_id} AND post_id=${post_id}`,
    function (err: any, result: any) {
      if (err) {
        console.log(err);
      } else {
        res.json(result.length === 0 ? false : true);
      }
    }
  );
}
