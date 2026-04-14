import exp from 'express'
export const adminApp=exp.Router()
import { UserModel as usermodel } from '../models/UserModel.js'
import {verifyToken} from '../middlewears/verifyToken.js'

adminApp.get('/users',verifyToken('ADMIN'),async(req,res)=>{
	const usersAndAuthors = await usermodel
		.find({role:{$in:['USER','AUTHOR']}},{email:1,isUserActive:1,_id:0})
		.lean()
	res.status(200).json({message:'Users and authors',payload:usersAndAuthors})
})

adminApp.patch('/user-status',verifyToken('ADMIN'),async(req,res)=>{
	const {email,isUserActive} = req.body

	const userOrAuthor = await usermodel.findOne({
		email:email,
		role:{$in:['USER','AUTHOR']}
	})

	if(!userOrAuthor)
	{
		return res.status(404).json({message:'User/Author not found'})
	}

	if(userOrAuthor.isUserActive===isUserActive)
	{
		return res.status(200).json({message:'User already in same state'})
	}

	userOrAuthor.isUserActive=isUserActive
	await userOrAuthor.save()

	res.status(200).json({message:'User status updated',payload:{email:userOrAuthor.email,isUserActive:userOrAuthor.isUserActive}})
})


