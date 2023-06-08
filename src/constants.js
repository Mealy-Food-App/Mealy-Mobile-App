import React from 'react';
const { StatusBarManager } = NativeModules;

//API URL
export const API_URL = 'https://mealy-backend-app.onrender.com/api/mealy';

//API End Points
export const REGISTER = `${API_URL}/user/signup`;
export const LOGIN = `${API_URL}/user/signin`;
export const UPDATE_PROFILE = `${API_URL}/user/update`;
export const UPLOAD_IMAGE = `${API_URL}/user/upload`;
export const FORGOT_PASSWORD = `${API_URL}/auth/recover`;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;