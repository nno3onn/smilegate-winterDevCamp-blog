import type { NextApiRequest, NextApiResponse } from "next";
import convertNowDateTime from "../../util/convertNowDateTIme";
const db = require("../../configs/db/db");

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "POST") {
    const { id, password, name } = req.body;
    db.query(
      `INSERT INTO user (id, password, created_at, name, isAdmin)
        VALUES ('${id}', '${password}', '${convertNowDateTime()}', '${name}', 0)`,
      (err: any, result: any) => {
        if (err) {
          console.log(1, err);
          if (err.errno === 1062) {
            return res.status(400).json({
              success: false,
              message: "이미 존재하는 아이디입니다.",
            });
          }
        } else {
          return res.status(200).json({
            success: true,
            message: "회원가입이 완료되었습니다.",
          });
        }
      }
    );
  } else if (method === "GET") {
    const { id, password } = req.query;
    db.query(`SELECT * FROM user WHERE id="${id}"`, (err: any, result: any) => {
      if (err) {
        console.log(err);
      } else {
        if (!result.length) {
          return res.status(400).json({
            success: false,
            message: "아이디가 없습니다.",
          });
        }
        if (result[0].password !== password) {
          return res.status(400).json({
            success: false,
            message: "비밀번호가 다릅니다.",
          });
        } else {
          const { user_id, id, name } = result[0];
          const data = { user_id, id, name };
          return res.status(200).json({
            success: true,
            data,
          });
        }
      }
    });
  }
}
