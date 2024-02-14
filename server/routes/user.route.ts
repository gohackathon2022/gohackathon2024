import express from 'express';
import { activateUser, getUserInfo, loginUser, logoutUser, registrationUser, socialAuth, updateAccessToken, updateUserInfo, updatePassword, updateProfilePicture } from '../controllers/user.controller';
import { isAuthenticate } from '../middleware/auth';
const userRouter = express.Router();

userRouter.post('/registration', registrationUser);

userRouter.post('/activate-user', activateUser);

userRouter.post('/login', loginUser);

userRouter.get('/logout',isAuthenticate, logoutUser);

userRouter.get('/refreshtoken', updateAccessToken);

userRouter.get('/me', isAuthenticate, getUserInfo);

userRouter.post('/social-auth', socialAuth);

userRouter.put('/update-user-info', isAuthenticate, updateUserInfo);

userRouter.put('/update-user-password', isAuthenticate, updatePassword);

userRouter.put('/update-user-avatar', isAuthenticate, updateProfilePicture);

export default userRouter;

// authorizeRoles ("admin")