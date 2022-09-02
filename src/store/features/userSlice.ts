import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import { UserData } from "../../types";
import { transformUserCredential } from "../../services";
import { getFirebaseMessageError } from "../../utils";

interface UserState {
  isLoading: boolean;
  error: string | null;
  result: UserData;
}

const initialState: UserState = {
  isLoading: false,
  error: null,
  result: { displayName: null, email: null },
};

type UserRegData = {
  email: string;
  password: string;
  name: string;
  handleModal: () => void;
};

export const createUser = createAsyncThunk<
  UserCredential,
  UserRegData,
  { rejectValue: string }
>(
  "user/createUser",
  async ({ email, password, name, handleModal }: UserRegData, { rejectWithValue }) => {
    const auth = getAuth();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name });
      }
      handleModal();
      return response;
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.result = transformUserCredential(payload);
    });
    builder.addCase(createUser.rejected, (state, { payload }) => {
      console.log(payload)
      state.isLoading = false;
      if (payload) {
        state.error = getFirebaseMessageError(payload);
      }
    });
  },
});

export default userSlice.reducer;
