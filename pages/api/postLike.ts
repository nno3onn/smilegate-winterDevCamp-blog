import type { NextApiRequest, NextApiResponse } from "next";
import convertNowDateTime from "../../util/convertNowDateTIme";
const db = require("../../configs/db/db");

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "POST") {
    const { post_id, user_id } = req.body;
    db.query(
      `INSERT INTO post_like (post_id, user_id)
        VALUES (${post_id}, ${user_id})`,
      (err: any, result: any) => {
        if (err) {
          console.log(err);
        } else {
          return res.status(200).json({
            success: true,
            data: result,
          });
        }
      }
    );
  } else if (method === "GET") {
    const { post_id } = req.query;
    db.query(`SELECT count(*) FROM post_like WHERE post_id="${post_id}"`, (err: any, result: any) => {
      if (err) {
        console.log(err);
      } else {
        return res.status(200).json({
          success: true,
          data: result[0]["count(*)"],
        });
      }
    });
  } else if (method === "DELETE") {
    const { post_id, user_id } = req.query;
    db.query(`DELETE FROM post_like WHERE post_id=${post_id} and user_id=${user_id}`, (err: any, result: any) => {
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
}
