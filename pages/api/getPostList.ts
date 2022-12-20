import type { NextApiRequest, NextApiResponse } from "next";
const db = require("../../configs/db/db");

export default function (req: NextApiRequest, res: NextApiResponse) {
  db.query("SELECT * FROM post", (err: any, result: any) => {
    if (err) {
      console.log(err);
    } else {
      return res.status(200).json({
        success: true,
        data: result,
      });
    }
  });
}
