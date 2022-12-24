import type { NextApiRequest, NextApiResponse } from "next";
import convertNowDateTime from "../../util/convertNowDateTIme";
const db = require("../../configs/db/db");

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "POST") {
    const { title, content, thumbnail = null } = req.body;
    db.query(
      `INSERT INTO post (title, content, created_at, thumbnail)
        VALUES ('${title}', '${content}', '${convertNowDateTime()}', '${thumbnail}')`,
      (err: any, result: any) => {
        if (err) {
          console.log(err);
        } else {
          return res.status(200).json({
            success: true,
            data: { post_id: result.insertId },
          });
        }
      }
    );
  } else if (method === "GET") {
    const { post_id } = req.query;
    db.query(`SELECT * FROM post WHERE post_id="${post_id}"`, (err: any, result: any) => {
      if (err) {
        console.log(err);
      } else {
        return res.status(200).json({
          success: true,
          data: result,
        });
      }
    });
  } else if (method === "PATCH") {
    const { post_id, title, content, thumbnail = null } = req.body;
    db.query(
      `UPDATE post SET title="${title}", content="${content}" ${thumbnail ? `, thumbnail="${thumbnail}"` : ""} WHERE post_id=${post_id}`,
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
  } else if (method === "DELETE") {
    const { post_id } = req.query;
    db.query(`DELETE FROM post WHERE post_id=${post_id}`, (err: any, result: any) => {
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
