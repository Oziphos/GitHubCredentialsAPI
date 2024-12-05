import express from "express";
import * as githubApiController from "../controller/githubApiController.js";

const router = express.Router();

router.get("/repository", githubApiController.getRepository);
router.get("/commits", githubApiController.getCommits);
router.get("/branches", githubApiController.getBranches);
router.get("/users", githubApiController.getUsers);

export default router;
