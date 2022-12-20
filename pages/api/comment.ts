import type { NextApiRequest, NextApiResponse } from "next";
import convertNowDateTime from "../../util/convertNowDateTIme";
const db = require("../../configs/db/db");

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "POST") {
    const { content, post_id, user_id } = req.body;
    console.log(content, post_id, user_id);
    db.query(
      `INSERT INTO comment (content, created_at, post_id, user_id)
        VALUES ('${content}', '${convertNowDateTime()}', '${post_id}', '${user_id}')`,
      (err: any, result: any) => {
        if (err) {
          console.log(err);
        } else {
          return res.status(200).json({
            success: true,
            message: "댓글이 작성되었습니다.",
            data: { comment_id: result.insertId },
          });
        }
      }
    );
  } else if (method === "GET") {
    const { post_id } = req.query;
    db.query(`SELECT * FROM comment WHERE post_id=${post_id}`, (err: any, result: any) => {
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
    const { content, comment_id } = req.body;
    db.query(`UPDATE comment SET content="${content}" WHERE comment_id=${comment_id}`, (err: any, result: any) => {
      if (err) {
        console.log(err);
      } else {
        return res.status(200).json({
          success: true,
          data: result,
        });
      }
    });
  } else if (method === "DELETE") {
    const { comment_id } = req.query;
    console.log(comment_id);
    db.query(`DELETE FROM comment WHERE comment_id=${comment_id}`, (err: any, result: any) => {
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
