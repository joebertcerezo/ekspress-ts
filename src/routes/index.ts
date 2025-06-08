import express, { Router, Request, Response } from 'express';

const router: Router = express.Router()

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    code: "SERVER_CONNECTED",
    message: "Server connected successfully",
    data: ""
  })
})

export default router
